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
                indentChar: $symbols.space,  //缩进字符
                quotes: true  // key是否使用引号
            };
            $.extend(this._options, options);
        },
        /**
         * 预处理
         * @param rowString 待格式化字符串
         * @returns {string}
         * @private
         */
        _preFormat:function(rowString){
            // 去除空格
            rowString = $.trim(rowString);

            //去除不以[或{开头的字符

            // 在“[ ]”之前和之后增加一行
            var regex = /([\[\]])/g;
            rowString = rowString.replace(regex, '\r\n$1\r\n');

            // 在“｛ ｝”之前和之后增加行
            regex = /([\{\}])/g;
            rowString = rowString.replace(regex, '\r\n$1\r\n');

            // 逗号之后增加一行
            regex = /(\,)/g;
            rowString = rowString.replace(regex, '$1\r\n');

            // 去除多余的换行
            regex = /(\r\n)(\r\n)+/g;
            rowString = rowString.replace(regex, '\r\n');

            // 去除逗号前面的换行
            regex = /(\r\n\,)/g;
            rowString = rowString.replace(regex, ',');

            //去除:{和:[中间的换行
            //regex = /(\:)(\r\n)(\{|\[)/g;
            //rowString = rowString.replace(regex, '$1$3');

            //去除([或({或[{或]}或])或})之间的换行
            //regex = /(\[|\(|\}|\])(\s*)(\{|\]|\}|\)|\[)/g;
            //rowString = rowString.replace(regex, '$1$3');

            //去除,{或,{或,(之间的换行, 增加一个空格
            //regex = /(\,)(\s*)(\{|\]|\}|\))/g;
            //rowString = rowString.replace(regex, '$1 $3');

            //在:后面增加一个空格
            //regex = /(\:)/g;
            //rowString = rowString.replace(regex, ': ');

            return rowString;
        },
        /**
         * json格式化
         * @param rowString 待格式化字符串
         * @returns {string}
         * @private
         */
        _format:function(rowString){
            var that = this, json = '', depth = 0;
            $.each(rowString.split('\r\n'), function(index, node){
                node = $.trim(node);
                if(node){
                    var indent = 0;
                    if (node.match(/(\{|\[)$/)) {
                        indent = 1;
                    } else if (node.match(/(\}|\])$/)) {
                        if (depth !== 0) {
                            depth -= 1;
                        }
                    } else {
                        indent = 0;
                    }

                    var indentStr = '';
                    for(var i=0; i<depth * that._options.indent; i++){
                        indentStr += that._options.indentChar;
                    }
                    json += indentStr + node + '\r\n';
                    depth += indent;
                }
            });

            if(json){

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
                // 预处理json
                json = this._preFormat(rowString);
                if(json){
                    json = this._format(json);
                }
            }

            return json;
        }
    };

    $(document).ready(function () {
        $("#jsonFormatBtn").click(function (event) {
            $(this).preventDefault(event);

            //格式化json
            var rawJson = $('#rawJson').val();
            if (rawJson) {
                var json = $('this').jsonFormat(rawJson, {
                    indent: $('#indent').val(),
                    quotes: $('#quotes').prop('checked')
                });

                if (json) {
                    if($('#processedJson').length == 0){
                        $('#canvas').append($('<pre>', {
                            id: 'processedJson'
                        }));
                    }
                    $('#processedJson').attr({'class':'prettyprint'});

                    $('#processedJson').html('' + json);

                    // 美化代码展示
                    prettyPrint();
                }
            }
        });
    });
})(jQuery);