/**
 * Created by zhaoyong on 2014/5/13.
 * Sql格式化
 */
(function ($) {
    'use strict';

    $.fn.sqlFormat = function (rowString, options) {
        return new sqlFormatter(options).format(rowString);
    };

    /**
     * sqlFormatter
     *
     * @param options 参数列表
     */
    var sqlFormatter = function (options) {
        this._initial(options);
    };
    /**
     * 原型
     * @type {{format}}
     */
    sqlFormatter.prototype = {
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
         * sql格式化
         * @returns {string}
         * @private
         */
        _format: function () {
            return '';
        },
        /**
         * sql格式化
         * @param rowString 原始字符串
         * @returns {*}
         */
        format: function (rowString) {
            var sql = null;
            return sql;
        }
    };

    $(document).ready(function () {
        $('#sqlFormatBtn').click(function (event) {
            $(this).preventDefault(event);

            //格式化sql
            var rawSql = $('#rawSql').val();
            if(!rawSql){
                //提示输入
                return;
            }

            var sql = $('this').sqlFormat(rawSql, {
                indent: $('#indent').val(),
                quotes: $('#quotes').prop('checked')
            });

            if (sql) {
                var processedSql = $('#processedSql');
                if (processedSql.length == 0) {
                    processedSql = $('<pre>', {
                        id: 'processedSql'
                    }).appendTo($('#canvas'));
                }
                processedSql.attr({'class': 'prettyprint Lang-sql linenums'});

                processedSql.html('' + sql);

                // 美化代码展示
                prettyPrint();
            }
        });
    });
})(jQuery);