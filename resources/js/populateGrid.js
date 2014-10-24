/**
 * Created by zhaoyong on 2014/10/22.
 */
(function ($) {
    $.fn.populateGrid = function (options, data) {
        $(this).append((new populateGrid(options)).populate(data));
    };

    /**
     * 构造信息化的表格
     * @param options
     */
    var populateGrid = function (options) {
        this._initial(options);
    };
    populateGrid.prototype = {
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
                headers: [  //展示的表格列标题
                    {header: '', name: 'name'},
                    {header: '', name: 'value'}
                ],
                rowGroup: 1 //一行显示几组数据(一组数据表示一个object)
            };
            $.extend(this._options, options);
        },
        /**
         * 构造数据
         * @param datas 数据
         * @private
         */
        _populate: function (datas) {
            var that = this;
            //构造表格
            var $table = $('<table>', {
                class: 'table table-striped table-bordered table-hover',
                'cellspacing': 0,
                'cellpadding': 0,
                html: $('<thead>', {
                    html: $('<tr>', {
                        html: function () {
                            var $children = [];
                            var leng = that._options.headers.length;
                            for (var i = 0; i < that._options.rowGroup; i++) {
                                for (var j = 0; j < leng; j++) {
                                    if (that._options.headers[j] && that._options.headers[j].header) {
                                        $children.push($('<th>', {
                                            html: that._options.headers[j].header
                                        }));
                                    }
                                }
                            }
                            return $children;
                        }
                    })
                })
            });

            if (datas && datas.length > 0) {
                var $tbody = $('<tbody>', {
                    html: function () {
                        var $trs = [];

                        // 将headers的key拼接
                        var headers = [];
                        var leng = that._options.headers.length;
                        for (var i = 0; i < leng; i++) {
                            if (that._options.headers[i]) {
                                headers.push(that._options.headers[i].name);
                            }
                        }

                        that._options.rowGroup = that._options.rowGroup || 1;
                        leng = datas.length;
                        var $tds = [];
                        for (var i = 0; i < leng; i++) {
                            var data = datas[i];
                            if (data) {
                                for (var j = 0; j < headers.length; j++) {
                                    $tds.push($('<td>', {
                                        text: data[headers[j]] || ''
                                    }));
                                }
                            }

                            if ((i + 1 ) % that._options.rowGroup == 0) {
                                $trs.push($('<tr>', {
                                    html: $tds
                                }));
                                $tds = [];
                            }
                        }

                        if ($tds.length <= that._options.rowGroup * headers.length) {
                            for (var i = that._options.rowGroup * headers.length - $tds.length; i > 0; i--) {
                                $tds.push($('<td>', {}));
                            }
                            $trs.push($('<tr>', {
                                html: $tds
                            }));
                        }
                        return $trs;
                    }
                }).appendTo($table);
            }

            return $table;
        },
        /**
         * 根据给定的数据构造表格
         * @param datas 数据
         */
        populate: function (datas) {
            return this._populate(datas);
        }
    };
})(jQuery);

