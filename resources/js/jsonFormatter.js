/**
 * Created by zhaoyong on 2014/5/13.
 * json格式化
 */
(function ($) {
    $.fn.jsonFormat = function(rowString, options) {
        return new jsonFormatter(options).format(rowString);
    };

    /**
     * jsonFormatter
     *
     * @param options 参数列表
     */
    var jsonFormatter = function(options){
        this._initial(options);
    };
    /**
     * 原型
     * @type {{format}}
     */
    jsonFormatter.prototype = {
        /**
         * 初始化
         * @param options 参数选项
         * @private
         */
        _initial:function(options){
            this._setOptions(options);
        },
        /**
         * 设置参数
         * @param options 参数选项
         * @private
         */
        _setOptions:function(options){
            //默认选项
            this._options = {
                indent: 4,  // 缩进量
                indentChar: ' ',  //缩进字符
                quotes: true  // key是否使用引号
            };
            $.extend(this._options, options);
        },
        /**
         * 校验json字符串
         * @param rowString 待校验的json字符串
         * @returns {string}
         * @private
         */
        _validate:function(rowString){  //校验
            var regex = null;
            // 去除空格
            rowString = $.trim(rowString);

            // 在“｛ ｝”之前和之后增加行
            regex = /([\{\}])/g;
            rowString = rowString.replace(regex, '\r\n$1\r\n');

            // 在“[ ]”之前和之后增加一行
            regex = /([\[\]])/g;
            rowString = rowString.replace(regex, '\r\n$1\r\n');

            // 逗号之后增加一行
            regex = /(\,)/g;
            rowString = rowString.replace(regex, '$1\r\n');

            // 去除多余的换行
            regex = /(\r\n\r\n)/g;
            rowString = rowString.replace(regex, '\r\n');

            // 去除逗号前面的换行
            regex = /(\r\n\,)/g;
            rowString = rowString.replace(regex, ',');

            return rowString;
        },
        /**
         * json格式化
         * @param jsonObj json对象
         * @param depth 解析级别，深度
         * @returns {string}
         * @private
         */
        _format:function(jsonObj, depth){
            var json = "";

            // 缩进量字符串
            var indentStr = this._getIndent(depth);

            // json对象类型：对象、数组
            var type = $.type(jsonObj);
            if("array" == type){
                json += symbols.leftBracket + symbols.newLine;
                if(jsonObj.length>0){
                    for(var i=0; i<jsonObj.length; i++){
                        if(jsonObj[i]){
                            var subJsonObj = jsonObj[i];
                            json += this._format(subJsonObj, (depth + 1));
                        }
                    }
                    json += symbols.newLine;
                }
                json += indentStr + symbols.rightBracket;
            } else if("object" == type){
                json += symbols.leftBrace + symbols.newLine;

                var leng = 0;
                for(property in jsonObj) {
                    leng++;
                }

                var tempIndentStr = this._getIndent(depth + 1);
                var index = 0;
                for(property in jsonObj) {
                    json += tempIndentStr;
                    if(this._options.quotes){
                        json += symbols.quote + property + symbols.quote;
                    } else{
                        json += property;
                    }

                    //属性值
                    var value = jsonObj[property];
                    json += symbols.colon + symbols.space + this._format(value, (depth + 1));

                    if((index++)<leng - 1){
                        json += symbols.comma;
                    }
                    json += symbols.newLine;
                }
                json += indentStr + symbols.rightBrace;
            } else if("number" == type || "boolean" == type){
                json += jsonObj;
            } else if("function" == type){
                var tempIndentStr = this._getIndent(depth + 1);
                var funcArray = jsonObj.toString().split("\n");
                for(var i=0; i<funcArray.length; i++){
                    json += (i == 0 ? "" : (i == funcArray.length - 1 ? indentStr : tempIndentStr)) + funcArray[i] + (i <funcArray.length - 1 ? symbols.newLine : "");
                }
            } else if("undefined" == type){
                json += symbols.quote + "undefined" + symbols.quote;
            } else{
                json += symbols.quote + jsonObj.toString() + symbols.quote;
            }
            return json;
        },
        /**
         * 得到缩进量字符串
         * @param depth 深度
         * @private
         */
        _getIndent: function(depth){
            var indentStr = "";
            for(var i=0; i<depth * this._options.indent; i++){
                indentStr = indentStr + this._options.indentChar;
            }
            return indentStr;
        },
        /**
         * json格式化
         * @param rowString json字符串
         * @returns {*}
         */
        format:function(rowString){
            var json = null;
            if(rowString){
                // 校验数据
                //json = this._validate(rowString);

                try{
                    // 格式化数据
                    var jsonObj = window.eval("(" + rowString + ")");
                    if(jsonObj) {
                        json = this._format(jsonObj, 0);
                    }
                } catch(e){
                }
            }

            return json;
        }
    };

    /**
     * 符号定义
     * @type {{}}
     */
    var symbols = {
        space: " ",  // 空格
        comma: ",",  //逗号
        colon: ":",  //冒号
        quote: "\"",  //引号
        newLine: "\r\n",  // 换行
        leftBracket: "[", //左中括号
        rightBracket: "]",  //右中括号
        leftBrace: "{",  //左大括号
        rightBrace: "}"  //右大括号
    };

    $(document).ready(function () {
        $("#jsonFormatBtn").click(function (event) {
            $(this).preventDefault(event);

            //格式化json
            var rawJson = $("#rawJson").val();
            if (rawJson) {
                var json = $("this").jsonFormat(rawJson, {
                    indent: $("#indent").val(),
                    quotes: $("#quotes").prop("checked")
                });
                if (json) {
                    if($("#processedJson").length == 0){
                        $("#canvas").append($("<pre>", {
                            id: "processedJson"
                        }));
                    }
                    $("#processedJson").html("" + json);
                }
            }
        });
    });
})(jQuery);