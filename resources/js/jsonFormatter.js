/**
 * Created by zhaoyong on 2014/5/13.
 * json格式化
 */
(function($){
    $.fn.jsonFormat = function(rowString, options) {
        var json = "";

        // 可选属性
        options = options || { // 默认属性
            indentChar: '    ',  // 缩进量
            quotes: true  // key是否使用引号
        };

        if (rowString) {
            var regex = null;
            // 去除空格
            json = $.trim(rowString);

            // 在“｛ ｝”之前和之后增加行
            regex = /([\{\}])/g;
            json = json.replace(regex, '\r\n$1\r\n');

            // 在“[ ]”之前和之后增加一行
            regex = /([\[\]])/g;
            json = json.replace(regex, '\r\n$1\r\n');

            // 逗号之后增加一行
            regex = /(\,)/g;
            json = json.replace(regex, '$1\r\n');

            // 去除多余的换行
            regex = /(\r\n\r\n)/g;
            json = json.replace(regex, '\r\n');

            // 去除逗号前面的换行
            regex = /(\r\n\,)/g;
            json = json.replace(regex, ',');
        }

        return json;
    };
})(jQuery);