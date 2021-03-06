/**
 * Created by zhaoyong on 2014/5/13.
 * json格式化
 */
(function ($) {
    'use strict';

    $.fn.jsonFormat = function (rowString, options) {
        return new jsonFormatter(options).format(rowString);
    };

    /**
     * jsonFormatter
     *
     * @param options 参数列表
     */
    var jsonFormatter = function (options) {
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
        _initial: function (options) {
            this._setOptions(options);
        },
        /**
         * 设置参数
         * @param options 参数选项
         * @private
         */
        _setOptions: function (options) {
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
        _preFormat: function (rowString) {
            // 去除空格
            rowString = $.trim(rowString);

            return rowString;
        },
        /**
         * 预处理json对象
         * @param jsonObj
         * @private
         */
        _preFormatObj: function (jsonObj) {
            var json = '', that = this;
            // json对象类型：对象、数组
            var type = $.type(jsonObj);
            if ('array' == type) {
                json += $symbols.leftBracket + $symbols.newLine;
                if (jsonObj.length > 0) {
                    var length = jsonObj.length;
                    for (var i = 0; i < length; i++) {
                        if (jsonObj[i]) {
                            var subJsonObj = jsonObj[i];
                            json += this._preFormatObj(subJsonObj);
                            if (i < length - 1) {
                                json += $symbols.comma;
                            }
                        }
                    }
                    json += $symbols.newLine;
                }
                json += $symbols.rightBracket;
            } else if ('object' == type) {
                json += $symbols.leftBrace + $symbols.newLine;
                var index = 0, length = 0;
                //计算js对象中name:value的个数
                for (var prop in jsonObj) {
                    length++;
                }
                for (var prop in jsonObj) {
                    if (jsonObj.hasOwnProperty(prop)) {
                        //属性name
                        if (this._options.quotes) {
                            json += $symbols.quote + prop + $symbols.quote;
                        } else {
                            json += prop;
                        }

                        //属性值value
                        var value = jsonObj[prop] || '';
                        json += $symbols.colon + $symbols.space + this._preFormatObj(value);
                        if ((index++) < length - 1) {
                            json += $symbols.comma;
                        }
                        json += $symbols.newLine;
                    }
                }
                json += $symbols.rightBrace;
            } else if ('number' == type || 'boolean' == type) {
                json += jsonObj + $symbols.newLine;
            } else if ('function' === type) {
                var array = jsonObj.toString().split('\n');
                if (array && array.length > 0) {
                    var length = array.length;
                    for (var i = 0; i < length; i++) {
                        json += array[i] + $symbols.newLine;
                    }
                }
            } else if ('undefined' == type) {
                json += $symbols.quote + 'undefined' + $symbols.quote;
            } else {
                json += $symbols.quote + ('' + jsonObj) + $symbols.quote;
            }
            return json;
        },
        /**
         * json格式化
         * @param jsonObj 待格式化字符串对应的js对象
         * @returns {string}
         * @private
         */
        _format: function (jsonObj) {
            var json = '', preJson = this._preFormatObj(jsonObj), that = this;
            if (preJson) {
                var depth = 0;
                $.each(preJson.split('\r\n'), function (index, node) {
                    var indent = 0;

                    node = node.trim();
                    if (node) {
                        if (node.match(/\{$/) || node.match(/\[$/)) {
                            indent = 1;
                        } else if (node.match(/\}/) || node.match(/\]/)) {
                            if (depth !== 0) {
                                depth -= 1;
                            }
                        } else {
                            indent = 0;
                        }

                        var indentStr = '', length = depth * that._options.indent;
                        for (var i = 0; i < length; i++) {
                            indentStr += that._options.indentChar;
                        }
                        json += indentStr + node + '\r\n';
                        depth += indent;
                    }
                });
                if (json) {
                    //去除多余的行
                    var regex = /(\r\n)(\r\n)+/m;
                    json = json.replace(regex, '\r\n');

                    //去除:之后多余的空格
                    regex = /(\:)(\s+)/g;
                    json = json.replace(regex, '$1 ');

                    //去除,{或,{或,(之间的换行, 增加一个空格
                    regex = /(\,)(\s+)(\{|\[|\()/g;
                    json = json.replace(regex, '$1 $3');
                }
            }
            return json;
        },
        /**
         * json格式化
         * @param rowString json字符串
         * @returns {*}
         */
        format: function (rowString) {
            var json = null;
            if (rowString) {
                // 预处理json
                json = this._preFormat(rowString);
                if (json) {
                    try {
                        // 格式化数据
                        var jsonObj = eval('(' + rowString + ')');
                        if (jsonObj) {
                            json = this._format(jsonObj);
                        }
                    } catch (e) {
                    }
                }
            }

            return json;
        }
    };

    $(document).ready(function () {
        $('#jsonFormatBtn').click(function (event) {
            $(this).preventDefault(event);

            //格式化json
            var rawJson = $('#rawJson').val();
            if (rawJson) {
                var json = $('this').jsonFormat(rawJson, {
                    indent: $('#indent').val(),
                    quotes: $('#quotes').prop('checked')
                });

                if (json) {
                    var processedJson = $('#processedJson');
                    if (processedJson.length == 0) {
                        processedJson = $('<pre>', {
                            id: 'processedJson'
                        }).appendTo($('#canvas'));
                    }
                    processedJson.attr({'class': 'prettyprint Lang-json linenums'});

                    processedJson.html('' + json);

                    // 美化代码展示
                    prettyPrint();
                }
            }
        });
    });
})(jQuery);