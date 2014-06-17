/**
 * Created by zhaoyong on 14-5-22.
 * XML格式化
 */
(function($) {
    $.fn.xmlFormat = function(rowString, options) {
        return new xmlFormatter(options).format(rowString);
    };

    // XMl格式化
    var xmlFormatter = function(options){
        this._initial(options);
    };
    xmlFormatter.prototype = {
        /**
         * 初始化
         * @param options 参数对象
         * @private
         */
        _initial:function(options){
            this._setOptions(options);
        },
        /**
         * 设置参数
         * @param options 参数对象
         * @private
         */
        _setOptions:function(options){
            //默认选项
            this._options = {
                indent: 4,  // 缩进量
                indentChar: ' ' //缩进字符串
            };
            $.extend(this._options, options);
        },
        /**
         * 预处理
         * @param rowString 待格式化字符串
         * @private
         */
        _preFormat:function(rowString){
            // 去除空格
            rowString = $.trim(rowString);

            // 去除换行
            var regex = /(\r|\n)/g;
            rowString = rowString.replace(regex, '');

            //去除> <之间的空格
            regex = /(>)(\s*)(<)/g;
            rowString = rowString.replace(regex, '$1$3');

            regex = /(\s+)(\s*)/g;
            rowString = rowString.replace(regex, ' ');

            return rowString;
        },
        /**
         * 格式化xml字符串
         * @param rowString 待格式化字符串
         * @private
         */
        _format:function(rowString){
            var that = this;
            var xml = '', regex = /(>)(<)(\/*)/g;
            rowString = rowString.replace(regex, '$1\r\n$2$3');
            var depth = 0;
            $.each(rowString.split('\r\n'), function(index, node){
                var indent = 0;
                if(node.match(/.+<\/\w[^>]*>$/)){
                    indent = 0;
                } else if(node.match(/^<\/\w/)){
                    if(depth !== 0){
                        depth = depth -1;
                    }
                } else if(node.match(/^<\w[^>]*[^\/]>.*$/)){
                    indent = 1;
                } else{
                    indent = 0;
                }

                var indentStr = '';
                for(var i=0; i<depth * that._options.indent; i++){
                    indentStr += that._options.indentChar;
                }
                xml += indentStr + node + '\r\n';

                depth += indent;
            });

            return xml;
        },
        /**
         * 格式化xml字符串
         * @param rowString 待格式化字符串
         */
        format:function(rowString){
            var xml = null;
            if(rowString){
                //预处理
                xml = this._preFormat(rowString);

                if(xml) {
                    // 格式化字符串
                    xml = this._format(xml);
                }
            }
            return xml;
        }
    };

    $(document).ready(function () {
        $('#xmlFormatBtn').click(function (event) {
            $(this).preventDefault(event);

            //格式化XML
            var rawXml = $('#rawXml').val();
            if (rawXml) {
                var xml = $(this).xmlFormat(rawXml, {
                });

                if (xml) {
                    if($('#processedXml').length == 0){
                        $('#canvas').append($('<pre>', {
                            id: 'processedXml'
                        }));
                    }
                    $('#processedXml').attr({'class': 'prettyprint'});

                    // 由于xml中含有<, &, >等字符，html中会导致xml节点被认为是html元素，所以需要做escape处理
                    var formatedXml = xml.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    $('#processedXml').html('' + formatedXml);

                    // 美化代码展示
                    prettyPrint();
                }
            }
        });
    });
})(jQuery);
