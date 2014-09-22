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
            rowString = rowString.replace(/AND(\s+)/ig, '\r\n' + 'AND ')
                .replace(/BETWEEN(\s+)/ig, '\r\n' + 'BETWEEN ')
                .replace(/CASE(\s+)/ig, '\r\n' + 'CASE ')
                .replace(/ELSE(\s+)/ig, '\r\n' + 'ELSE ')
                .replace(/END(\s+)/ig, '\r\n' + 'END ')
                .replace(/FROM(\s+)/ig, '\r\nFROM ')
                .replace(/GROUP(\s+)BY(\s+)/ig, '\r\nGROUP BY ')
                .replace(/HAVING(\s+)/ig, '\r\nHAVING ')
                //.replace(/SET(\s+)/ig,' SET\r\n')
                .replace(/IN(\s+)/ig, ' IN ')
                .replace(/JOIN(\s+)/ig, '\r\nJOIN ')
                .replace(/CROSS\r\n(\s+)JOIN(\s+)/ig, '\r\nCROSS JOIN ')
                .replace(/INNER\r\n(\s+)JOIN(\s+)/ig, '\r\nINNER JOIN ')
                .replace(/LEFT\r\n(\s+)JOIN(\s+)/ig, '\r\nLEFT JOIN ')
                .replace(/RIGHT\r\n(\s+)JOIN(\s+)/ig, '\r\nRIGHT JOIN ')
                .replace(/ON(\s+)/ig, '\r\n' + 'ON ')
                .replace(/OR(\s+)/ig, '\r\n' + 'OR ')
                .replace(/ORDER(\s+)BY(\s+)/ig, '\r\nORDER BY ')
                .replace(/OVER(\s+)/ig, '\r\n' + 'OVER ')
                .replace(/\((\s+)SELECT(\s+)/ig, '\r\n(SELECT ')
                .replace(/\)(\s+)SELECT(\s+)/ig, ')\r\nSELECT ')
                .replace(/THEN(\s+)/ig, ' THEN\r\n' + '')
                .replace(/UNION(\s+)/ig, '\r\nUNION\r\n')
                .replace(/USING(\s+)/ig, '\r\nUSING ')
                .replace(/WHEN(\s+)/ig, '\r\n' + 'WHEN ')
                .replace(/WHERE(\s+)/ig, '\r\nWHERE ')
                .replace(/WITH(\s+)/ig, '\r\nWITH ')
                //.replace(/\,(\s*)\(/ig, ',\r\n( ')
                //.replace(/\,/ig,',\r\n'+tab+tab+'')
                .replace(/(\s*)ALL(\s+)/ig, ' ALL ')
                .replace(/(\s*)AS(\s+)/ig, ' AS ')
                .replace(/(\s*)ASC(\s+)/ig, ' ASC ')
                .replace(/(\s*)DESC(\s+)/ig, ' DESC ')
                .replace(/(\s*)DISTINCT(\s+)/ig, ' DISTINCT ')
                .replace(/(\s*)EXISTS/ig, ' EXISTS ')
                .replace(/(\s*)NOT(\s+)/ig, ' NOT ')
                .replace(/(\s*)NULL(\s+)/ig, ' NULL ')
                .replace(/(\s*)LIKE(\s+)/ig, ' LIKE ')
                .replace(/(\s*)SELECT(\s+)/ig, 'SELECT ')
                .replace(/(\s*)UPDATE/ig, 'UPDATE ')
                .replace(/(\s*)SET(\s+)/ig, ' SET ')
                .replace(/\r\n+/g, '\r\n');

            return rowString;
        },
        /**
         * 计算缩进字符
         * @param depth 深度
         * @param referenceStr 参考字符串
         * @returns {string}
         * @private
         */
        _getIndentStr: function (depth, referenceStr) {
            var that = this, indentStr = '', length = depth * that._options.indent + (referenceStr ? referenceStr.length : 0);
            for (var i = 0; i < length; i++) {
                indentStr += that._options.indentChar;
            }
            return indentStr;
        },
        /**
         * 判断是否是子查询
         *
         * @param rowString 原始字符串
         * @param depth 深度
         */
        isSubquery: function (rowString, depth) {
        },
        /**
         * sql格式化
         * @param rowString 原始字符串
         * @returns {string}
         * @private
         */
        _format: function (rowString) {
            var that = this, sql = '', depth = 0, referenceStr = '';
            $.each(rowString.split('\r\n'), function (index, node) {
                console.log(node);

                var indent = 0;
                //depth = that.isSubquery(node, depth);
                if (node.match(/\s*SELECT\s*/)) {
                    indent = 1;
                    node = node.replace(/\,/g, ', \r\n' + that._getIndentStr(depth, 'SELECT'));
                } else if (node.match(/(\s*)SET(\s*)/)) {
                    node = node.replace(/\,/g, ',\n' + that._getIndentStr(depth, 'SET') + '');
                } else if (node.match(/\s*\(\s*SELECT\s*}/)) {
                    depth++;
                }

                var indentStr = '';
                for (var i = 0; i < depth * that._options.indent; i++) {
                    indentStr += that._options.indentChar;
                }
                sql += indentStr + node + '\r\n';

                depth += indent;
            });
            sql = sql.replace(/^\n+/, '').replace(/\n+/g, '\n');

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