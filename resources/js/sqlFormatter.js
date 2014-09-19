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
                dbType: 'mysql',  // 数据库类型
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
            var that = this;
            // 去除空格
            rowString = $.trim(rowString);
            //去除多余的空格
            var regex = /\s+/g;
            rowString = rowString.replace(regex, ' ');
            //处理原始字符串,在可能的分割处添加分割标志
            regex = /\'/ig;
            rowString = rowString.replace(regex, '~::~\'')
                .replace(/ AND /ig, "~::~" + that._getIndentStr(2) + "AND ")
                .replace(/ BETWEEN /ig, "~::~" + that._getIndentStr(1) + "BETWEEN ")
                .replace(/ CASE /ig, "~::~" + that._getIndentStr(1) + "CASE ")
                .replace(/ ELSE /ig, "~::~" + that._getIndentStr(1) + "ELSE ")
                .replace(/ END /ig, "~::~" + that._getIndentStr(1) + "END ")
                .replace(/ FROM /ig, "~::~FROM ")
                .replace(/ GROUP\s{1,}BY/ig, "~::~GROUP BY ")
                .replace(/ HAVING /ig, "~::~HAVING ")
                //.replace(/ SET /ig," SET~::~")
                .replace(/ IN /ig, " IN ")
                .replace(/ JOIN /ig, "~::~JOIN ")
                .replace(/ CROSS~::~{1,}JOIN /ig, "~::~CROSS JOIN ")
                .replace(/ INNER~::~{1,}JOIN /ig, "~::~INNER JOIN ")
                .replace(/ LEFT~::~{1,}JOIN /ig, "~::~LEFT JOIN ")
                .replace(/ RIGHT~::~{1,}JOIN /ig, "~::~RIGHT JOIN ")
                .replace(/ ON /ig, "~::~" + that._getIndentStr(1) + "ON ")
                .replace(/ OR /ig, "~::~" + that._getIndentStr(2) + "OR ")
                .replace(/ ORDER\s{1,}BY/ig, "~::~ORDER BY ")
                .replace(/ OVER /ig, "~::~" + that._getIndentStr(1) + "OVER ")
                .replace(/\(\s{0,}SELECT /ig, "~::~(SELECT ")
                .replace(/\)\s{0,}SELECT /ig, ")~::~SELECT ")
                .replace(/ THEN /ig, " THEN~::~" + that._getIndentStr(1) + "")
                .replace(/ UNION /ig, "~::~UNION~::~")
                .replace(/ USING /ig, "~::~USING ")
                .replace(/ WHEN /ig, "~::~" + that._getIndentStr(1) + "WHEN ")
                .replace(/ WHERE /ig, "~::~WHERE ")
                .replace(/ WITH /ig, "~::~WITH ")
                //.replace(/\,\s{0,}\(/ig,",~::~( ")
                //.replace(/\,/ig,",~::~"+tab+tab+"")
                .replace(/ ALL /ig, " ALL ")
                .replace(/ AS /ig, " AS ")
                .replace(/ ASC /ig, " ASC ")
                .replace(/ DESC /ig, " DESC ")
                .replace(/ DISTINCT /ig, " DISTINCT ")
                .replace(/ EXISTS /ig, " EXISTS ")
                .replace(/ NOT /ig, " NOT ")
                .replace(/ NULL /ig, " NULL ")
                .replace(/ LIKE /ig, " LIKE ")
                .replace(/\s{0,}SELECT /ig, "SELECT ")
                .replace(/\s{0,}UPDATE /ig, "UPDATE ")
                .replace(/ SET /ig, " SET ")
                .replace(/~::~{1,}/g, "~::~");

            return rowString;
        },
        /**
         * 计算缩进字符
         * @param depth 深度
         * @returns {string}
         * @private
         */
        _getIndentStr: function (depth) {
            var that = this;
            if (!depth) {
                depth = 1;
            }
            var indentStr = '';
            for (var i = 0; i < depth * that._options.indent; i++) {
                indentStr += that._options.indentChar;
            }
            return indentStr;
        },
        /**
         * sql格式化
         * @param rowString 原始字符串
         * @returns {string}
         * @private
         */
        _format: function (rowString) {
            var that = this;
            var sql = '', regex = /\'/ig;
            var depth = 0;
            $.each(rowString.split('~::~'), function (index, node) {
                console.log(node);
                depth = isSubquery(node, depth);

                if (/\s{0,}\s{0,}SELECT\s{0,}/.exec(node)) {
                    node = node.replace(/\,/g, ", \n" + that._getIndentStr(2) + "");
                }

                if (/\s{0,}\s{0,}SET\s{0,}/.exec(node)) {
                    node = node.replace(/\,/g, ",\n" + that._getIndentStr(2) + "");
                }

                if (/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(node)) {
                    deep++;
                    str += this.shift[deep] + ar[ix];
                } else if (/\'/.exec(ar[ix])) {
                    if (parenthesisLevel < 1 && deep) {
                        deep--;
                    }
                    str += ar[ix];
                }
                else {
                    str += this.shift[deep] + ar[ix];
                    if (parenthesisLevel < 1 && deep) {
                        deep--;
                    }
                }
            });
            sql = sql.replace(/^\n{1,}/, '').replace(/\n{1,}/g, "\n");

            return sql;
        },
        /**
         * sql格式化
         * @param rowString 原始字符串
         * @returns {*}
         */
        format: function (rowString) {
            //预处理
            var sql = this._preFormat(rowString);

            if (sql) {
                // 格式化字符串
                sql = this._format(sql);
            }
            return sql;
        }
    };

    $(document).ready(function () {
        $('#sqlFormatBtn').click(function (event) {
            $(this).preventDefault(event);

            //格式化sql
            var rawSql = $('#rawSql').val();
            if (!rawSql) {
                //提示输入
                return;
            }

            var sql = $('this').sqlFormat(rawSql, {
                dbType: $('#dbType').val()
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