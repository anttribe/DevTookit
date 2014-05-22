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
                stylesheet: "/resources/template/xmlFormatter.xsl"  //xsl文件路径
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

            return rowString;
        },
        /**
         * 格式化xml字符串
         * @param rowString 待格式化字符串
         * @private
         */
        _format:function(rowString){
            var xmlDoc = null;
            //装载数据
            if(window.DOMParser){
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(rowString, "text/xml");
            } else if(window.ActiveXObject){
                xmlDoc = new ActiveXObject("Msxml2.DOMDocument");
                xmlDoc.async = false;
                xmlDoc.loadXML(rowString);
            }

            if(xmlDoc){
                //装载样式单
                var stylesheet = null, xhttp = null;
                if(window.XMLHttpRequest){
                    xhttp = new XMLHttpRequest();
                } else if(window.ActiveXObject){
                    xhttp = new ActiveXObject("Msxml2.DOMDocument");
                }
                xhttp.open("GET", this._options.stylesheet, false);
                xhttp.send();
                stylesheet = xhttp.responseXML;

                if(stylesheet){
                    var result = null;
                    // 把解析结果放到结果对象中
                    xmlDoc.transformNodeToObject(stylesheet, result);
                    alert(result);
                }
            }

            return finalStr;
        },
        /**
         * 格式化xml字符串
         * @param rowString 待格式化字符串
         */
        format:function(rowString){
            var xml = null;
            if(rowString){
                //预处理
                json = this._preFormat(rowString);

                // 格式化字符串
                json = this._format(json);
            }
            return xml;
        }
    };

    $(document).ready(function () {
        $("#xmlFormatBtn").click(function (event) {
            $(this).preventDefault(event);

            //格式化XML
            var rawXml = $("#rawXml").val();
            if (rawXml) {
                var xml = $("this").xmlFormat(rawXml, {
                });
                if (xml) {
                    if($("#processedXml").length == 0){
                        $("#canvas").append($("<pre>", {
                            id: "processedXml"
                        }));
                    }
                    $("#processedXml").html("" + xml);
                }
            }
        });
    });
})(jQuery);
