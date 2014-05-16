/**
 * Created by zhaoyong on 2014/5/13.
 * json格式化
 */
(function ($) {
    $.fn.jsonFormat = function(rowString, options) {
        return new jsonFormatter(options).format(rowString);
    };

    // jsonFormatter
    var jsonFormatter = function(options){
        this._initial(options);
    };
    jsonFormatter.prototype = {
        _initial:function(options){  // 初始化
            this._setOptions(options);
        },
        _setOptions:function(options){  //选项设置
            //默认选项
            this._options = {
                indent: 4,  // 缩进量
                quotes: true  // key是否使用引号
            };
            $.extend(this._options, options);
        },
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
        _format:function(rowString){   // json格式化
            var json = "";

            var jsonObj = eval("(" + rowString + ")");
            if(jsonObj){
                if($.isArray(jsonObj)){
                }
            }
            return json;
        },
        format:function(rowString){  // json格式化
            var json = null;
            if(rowString){
                // 校验数据
                // json = this._validate(rowString);

                // 格式化数据
                json = this._format(rowString);
            }

            return json;
        }
    };

    $(document).ready(function () {
        $("#jsonFormatBtn").click(function (event) {
            $(this).preventDefault(event);

            //格式化json
            var rawJson = $("#rawJson").val();
            if (rawJson) {
                var json = $("this").jsonFormat(rawJson, {
                    indent: $("#indent").val(),
                    quotes: $("#quotes").val() == "on"
                });
                if (json) {
                    $("#processedJson").val(json);
                }
            }
        });
    });
})(jQuery);