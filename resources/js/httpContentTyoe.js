/**
 * Created by zhaoyong on 2014/10/22.
 * Http ContentType数据
 */
(function ($) {
    'use strict';

    var httpContentTypeData = [
        {name: '.*（ 二进制流，不知道下载文件类型）', value: 'application/octet-stream'},
        {name: '.', value: 'application/x-'},
        {name: '.001', value: 'application/x-001'},
        {name: '.301', value: 'application/x-301'},
        {name: '.323', value: 'text/h323'},
        {name: '.906', value: 'application/x-906'},
        {name: '.907', value: 'drawing/907'},
        {name: '.a11', value: 'application/x-a11'},
        {name: '.acp', value: 'audio/x-mei-aac'},
        {name: '.ai', value: 'application/postscript'},
        {name: '.aif', value: 'audio/aiff'},
        {name: '.aifc', value: 'audio/aiff'},
        {name: '.aiff', value: 'audio/aiff'},
        {name: '.anv', value: 'application/x-anv'},
        {name: '.apk', value: 'application/vnd.android.package-archive'},
        {name: '.asa', value: 'text/asa'},
        {name: '.asf', value: 'video/x-ms-asf'},
        {name: '.asp', value: 'text/asp'},
        {name: '.asx', value: 'video/x-ms-asf'},
        {name: '.au', value: 'audio/basic'},
        {name: '.avi', value: 'video/avi'},
        {name: '.awf', value: 'application/vnd.adobe.workflow'},
        {name: '.biz', value: 'text/xml'},
        {name: '.bmp', value: 'application/x-bmp'},
        {name: '.bot', value: 'application/x-bot'},
        {name: '.c4t', value: 'application/x-c4t'},
        {name: '.c90', value: 'application/x-c90'},
        {name: '.cal', value: 'application/x-cals'},
        {name: '.cat', value: 'application/vnd.ms-pki.seccat'},
        {name: '.cdf', value: 'application/x-netcdf'},
        {name: '.cdr', value: 'application/x-cdr'},
        {name: '.cel', value: 'application/x-cel'},
        {name: '.cer', value: 'application/x-x509-ca-cert'},
        {name: '.cg4', value: 'application/x-g4'},
        {name: '.cgm', value: 'application/x-cgm'},
        {name: '.cit', value: 'application/x-cit'},
        {name: '.class', value: 'java/*'},
        {name: '.cml', value: 'text/xml'},
        {name: '.cmp', value: 'application/x-cmp'},
        {name: '.cmx', value: 'application/x-cmx'},
        {name: '.cot', value: 'application/x-cot'},
        {name: '.crl', value: 'application/pkix-crl'},
        {name: '.crt', value: 'application/x-x509-ca-cert'},
        {name: '.csi', value: 'application/x-csi'},
        {name: '.css', value: 'text/css'},
        {name: '.cut', value: 'application/x-cut'},
        {name: '.dbf', value: 'application/x-dbf'},
        {name: '.dbm', value: 'application/x-dbm'},
        {name: '.dbx', value: 'application/x-dbx'},
        {name: '.dcd', value: 'text/xml'},
        {name: '.dcx', value: 'application/x-dcx'},
        {name: '.der', value: 'application/x-x509-ca-cert'},
        {name: '.dgn', value: 'application/x-dgn'},
        {name: '.dib', value: 'application/x-dib'},
        {name: '.dll', value: 'application/x-msdownload'},
        {name: '.doc', value: 'application/msword'},
        {name: '.dot', value: 'application/msword'},
        {name: '.drw', value: 'application/x-drw'},
        {name: '.dtd', value: 'text/xml'},
        {name: '.dwf', value: 'Model/vnd.dwf'},
        {name: '.dwf', value: 'application/x-dwf'},
        {name: '.dwg', value: 'application/x-dwg'},
        {name: '.dxb', value: 'application/x-dxb'},
        {name: '.dxf', value: 'application/x-dxf'},
        {name: '.edn', value: 'application/vnd.adobe.edn'},
        {name: '.emf', value: 'application/x-emf'},
        {name: '.eml', value: 'message/rfc822'},
        {name: '.ent', value: 'text/xml'},
        {name: '.epi', value: 'application/x-epi'},
        {name: '.eps', value: 'application/x-ps'},
        {name: '.eps', value: 'application/postscript'},
        {name: '.etd', value: 'application/x-ebx'},
        {name: '.exe', value: 'application/x-msdownload'},
        {name: '.fax', value: 'image/fax'},
        {name: '.fdf', value: 'application/vnd.fdf'},
        {name: '.fif', value: 'application/fractals'},
        {name: '.fo', value: 'text/xml'},
        {name: '.frm', value: 'application/x-frm'},
        {name: '.g4', value: 'application/x-g4'},
        {name: '.gbr', value: 'application/x-gbr'},
        {name: '.gif', value: 'image/gif'},
        {name: '.gl2', value: 'application/x-gl2'},
        {name: '.gp4', value: 'application/x-gp4'},
        {name: '.hgl', value: 'application/x-hgl'},
        {name: '.hmr', value: 'application/x-hmr'},
        {name: '.hpg', value: 'application/x-hpgl'},
        {name: '.hpl', value: 'application/x-hpl'},
        {name: '.hqx', value: 'application/mac-binhex40'},
        {name: '.hrf', value: 'application/x-hrf'},
        {name: '.hta', value: 'application/hta'},
        {name: '.htc', value: 'text/x-component'},
        {name: '.htm', value: 'text/html'},
        {name: '.html', value: 'text/html'},
        {name: '.htt', value: 'text/webviewhtml'},
        {name: '.htx', value: 'text/html'},
        {name: '.icb', value: 'application/x-icb'},
        {name: '.ico', value: 'image/x-icon'},
        {name: '.ico', value: 'application/x-ico'},
        {name: '.iff', value: 'application/x-iff'},
        {name: '.ig4', value: 'application/x-g4'},
        {name: '.igs', value: 'application/x-igs'},
        {name: '.iii', value: 'application/x-iphone'},
        {name: '.img', value: 'application/x-img'},
        {name: '.ins', value: 'application/x-internet-signup'},
        {name: '.isp', value: 'application/x-internet-signup'},
        {name: '.IVF', value: 'video/x-ivf'},
        {name: '.java', value: 'java/*'},
        {name: '.jfif', value: 'image/jpeg'},
        {name: '.jpe', value: 'image/jpeg'},
        {name: '.jpe', value: 'application/x-jpe'},
        {name: '.jpeg', value: 'image/jpeg'},
        {name: '.jpg', value: 'image/jpeg'},
        {name: '.jpg', value: 'application/x-jpg'},
        {name: '.js', value: 'application/x-javascript'},
        {name: '.jsp', value: 'text/html'},
        {name: '.la1', value: 'audio/x-liquid-file'},
        {name: '.lar', value: 'application/x-laplayer-reg'},
        {name: '.latex', value: 'application/x-latex'},
        {name: '.lavs', value: 'audio/x-liquid-secure'},
        {name: '.lbm', value: 'application/x-lbm'},
        {name: '.lmsff', value: 'audio/x-la-lms'},
        {name: '.ls', value: 'application/x-javascript'},
        {name: '.ltr', value: 'application/x-ltr'},
        {name: '.m1v', value: 'video/x-mpeg'},
        {name: '.m2v', value: 'video/x-mpeg'},
        {name: '.m3u', value: 'audio/mpegurl'},
        {name: '.m4e', value: 'video/mpeg4'},
        {name: '.mac', value: 'application/x-mac'},
        {name: '.man', value: 'application/x-troff-man'},
        {name: '.math', value: 'text/xml'},
        {name: '.mdb', value: 'application/msaccess'},
        {name: '.mdb', value: 'application/x-mdb'},
        {name: '.mfp', value: 'application/x-shockwave-flash'},
        {name: '.mht', value: 'message/rfc822'},
        {name: '.mhtml', value: 'message/rfc822'},
        {name: '.mi', value: 'application/x-mi'},
        {name: '.mid', value: 'audio/mid'},
        {name: '.midi', value: 'audio/mid'},
        {name: '.mil', value: 'application/x-mil'},
        {name: '.mml', value: 'text/xml'},
        {name: '.mnd', value: 'audio/x-musicnet-download'},
        {name: '.mns', value: 'audio/x-musicnet-stream'},
        {name: '.mocha', value: 'application/x-javascript'},
        {name: '.movie', value: 'video/x-sgi-movie'},
        {name: '.mp1', value: 'audio/mp1'},
        {name: '.mp2', value: 'audio/mp2'},
        {name: '.mp2v', value: 'video/mpeg'},
        {name: '.mp3', value: 'audio/mp3'},
        {name: '.mp4', value: 'video/mpeg4'},
        {name: '.mpa', value: 'video/x-mpg'},
        {name: '.mpd', value: 'application/vnd.ms-project'},
        {name: '.mpe', value: 'video/x-mpeg'},
        {name: '.mpeg', value: 'video/mpg'},
        {name: '.mpg', value: 'video/mpg'},
        {name: '.mpga', value: 'audio/rn-mpeg'},
        {name: '.mpp', value: 'application/vnd.ms-project'},
        {name: '.mps', value: 'video/x-mpeg'},
        {name: '.mpt', value: 'application/vnd.ms-project'},
        {name: '.mpv', value: 'video/mpg'},
        {name: '.mpv2', value: 'video/mpeg'},
        {name: '.mpw', value: 'application/vnd.ms-project'},
        {name: '.mpx', value: 'application/vnd.ms-project'},
        {name: '.mtx', value: 'text/xml'},
        {name: '.mxp', value: 'application/x-mmxp'},
        {name: '.net', value: 'image/pnetvue'},
        {name: '.nrf', value: 'application/x-nrf'},
        {name: '.nws', value: 'message/rfc822'},
        {name: '.odc', value: 'text/x-ms-odc'},
        {name: '.out', value: 'application/x-out'},
        {name: '.p10', value: 'application/pkcs10'},
        {name: '.p12', value: 'application/x-pkcs12'},
        {name: '.p7b', value: 'application/x-pkcs7-certificates'},
        {name: '.p7c', value: 'application/pkcs7-mime'},
        {name: '.p7m', value: 'application/pkcs7-mime'},
        {name: '.p7r', value: 'application/x-pkcs7-certreqresp'},
        {name: '.p7s', value: 'application/pkcs7-signature'},
        {name: '.pc5', value: 'application/x-pc5'},
        {name: '.pci', value: 'application/x-pci'},
        {name: '.pcl', value: 'application/x-pcl'},
        {name: '.pcx', value: 'application/x-pcx'},
        {name: '.pdf', value: 'application/pdf'},
        {name: '.pdf', value: 'application/pdf'},
        {name: '.pdx', value: 'application/vnd.adobe.pdx'},
        {name: '.pfx', value: 'application/x-pkcs12'},
        {name: '.pgl', value: 'application/x-pgl'},
        {name: '.pic', value: 'application/x-pic'},
        {name: '.pko', value: 'application/vnd.ms-pki.pko'},
        {name: '.pl', value: 'application/x-perl'},
        {name: '.plg', value: 'text/html'},
        {name: '.pls', value: 'audio/scpls'},
        {name: '.plt', value: 'application/x-plt'},
        {name: '.png', value: 'image/png'},
        {name: '.png', value: 'application/x-png'},
        {name: '.pot', value: 'application/vnd.ms-powerpoint'},
        {name: '.ppa', value: 'application/vnd.ms-powerpoint'},
        {name: '.ppm', value: 'application/x-ppm'},
        {name: '.pps', value: 'application/vnd.ms-powerpoint'},
        {name: '.ppt', value: 'application/vnd.ms-powerpoint'},
        {name: '.ppt', value: 'application/x-ppt'},
        {name: '.pr', value: 'application/x-pr'},
        {name: '.prf', value: 'application/pics-rules'},
        {name: '.prn', value: 'application/x-prn'},
        {name: '.prt', value: 'application/x-prt'},
        {name: '.ps', value: 'application/x-ps'},
        {name: '.ps', value: 'application/postscript'},
        {name: '.ptn', value: 'application/x-ptn'},
        {name: '.pwz', value: 'application/vnd.ms-powerpoint'},
        {name: '.r3t', value: 'text/vnd.rn-realtext3d'},
        {name: '.ra', value: 'audio/vnd.rn-realaudio'},
        {name: '.ram', value: 'audio/x-pn-realaudio'},
        {name: '.ras', value: 'application/x-ras'},
        {name: '.rat', value: 'application/rat-file'},
        {name: '.rdf', value: 'text/xml'},
        {name: '.rec', value: 'application/vnd.rn-recording'},
        {name: '.red', value: 'application/x-red'},
        {name: '.rgb', value: 'application/x-rgb'},
        {name: '.rjs', value: 'application/vnd.rn-realsystem-rjs'},
        {name: '.rjt', value: 'application/vnd.rn-realsystem-rjt'},
        {name: '.rlc', value: 'application/x-rlc'},
        {name: '.rle', value: 'application/x-rle'},
        {name: '.rm', value: 'application/vnd.rn-realmedia'},
        {name: '.rmf', value: 'application/vnd.adobe.rmf'},
        {name: '.rmi', value: 'audio/mid'},
        {name: '.rmj', value: 'application/vnd.rn-realsystem-rmj'},
        {name: '.rmm', value: 'audio/x-pn-realaudio'},
        {name: '.rmp', value: 'application/vnd.rn-rn_music_package'},
        {name: '.rms', value: 'application/vnd.rn-realmedia-secure'},
        {name: '.rmvb', value: 'application/vnd.rn-realmedia-vbr'},
        {name: '.rmx', value: 'application/vnd.rn-realsystem-rmx'},
        {name: '.rnx', value: 'application/vnd.rn-realplayer'},
        {name: '.rp', value: 'image/vnd.rn-realpix'},
        {name: '.rpm', value: 'audio/x-pn-realaudio-plugin'},
        {name: '.rsml', value: 'application/vnd.rn-rsml'},
        {name: '.rt', value: 'text/vnd.rn-realtext'},
        {name: '.rtf', value: 'application/msword'},
        {name: '.rtf', value: 'application/x-rtf'},
        {name: '.rv', value: 'video/vnd.rn-realvideo'},
        {name: '.sam', value: 'application/x-sam'},
        {name: '.sat', value: 'application/x-sat'},
        {name: '.sdp', value: 'application/sdp'},
        {name: '.sdw', value: 'application/x-sdw'},
        {name: '.sit', value: 'application/x-stuffit'},
        {name: '.slb', value: 'application/x-slb'},
        {name: '.sld', value: 'application/x-sld'},
        {name: '.slk', value: 'drawing/x-slk'},
        {name: '.smi', value: 'application/smil'},
        {name: '.smil', value: 'application/smil'},
        {name: '.smk', value: 'application/x-smk'},
        {name: '.snd', value: 'audio/basic'},
        {name: '.sol', value: 'text/plain'},
        {name: '.sor', value: 'text/plain'},
        {name: '.spc', value: 'application/x-pkcs7-certificates'},
        {name: '.spl', value: 'application/futuresplash'},
        {name: '.spp', value: 'text/xml'},
        {name: '.ssm', value: 'application/streamingmedia'},
        {name: '.sst', value: 'application/vnd.ms-pki.certstore'},
        {name: '.stl', value: 'application/vnd.ms-pki.stl'},
        {name: '.stm', value: 'text/html'},
        {name: '.sty', value: 'application/x-sty'},
        {name: '.svg', value: 'text/xml'},
        {name: '.swf', value: 'application/x-shockwave-flash'},
        {name: '.tdf', value: 'application/x-tdf'},
        {name: '.tg4', value: 'application/x-tg4'},
        {name: '.tga', value: 'application/x-tga'},
        {name: '.tif', value: 'image/tiff'},
        {name: '.tif', value: 'application/x-tif'},
        {name: '.tiff', value: 'image/tiff'},
        {name: '.tld', value: 'text/xml'},
        {name: '.top', value: 'drawing/x-top'},
        {name: '.torrent', value: 'application/x-bittorrent'},
        {name: '.tsd', value: 'text/xml'},
        {name: '.txt', value: 'text/plain'},
        {name: '.uin', value: 'application/x-icq'},
        {name: '.uls', value: 'text/iuls'},
        {name: '.vcf', value: 'text/x-vcard'},
        {name: '.vda', value: 'application/x-vda'},
        {name: '.vdx', value: 'application/vnd.visio'},
        {name: '.vml', value: 'text/xml'},
        {name: '.vpg', value: 'application/x-vpeg005'},
        {name: '.vsd', value: 'application/vnd.visio'},
        {name: '.vsd', value: 'application/x-vsd'},
        {name: '.vss', value: 'application/vnd.visio'},
        {name: '.vst', value: 'application/vnd.visio'},
        {name: '.vst', value: 'application/x-vst'},
        {name: '.vsw', value: 'application/vnd.visio'},
        {name: '.vsx', value: 'application/vnd.visio'},
        {name: '.vtx', value: 'application/vnd.visio'},
        {name: '.vxml', value: 'text/xml'},
        {name: '.wav', value: 'audio/wav'},
        {name: '.wax', value: 'audio/x-ms-wax'},
        {name: '.wb1', value: 'application/x-wb1'},
        {name: '.wb2', value: 'application/x-wb2'},
        {name: '.wb3', value: 'application/x-wb3'},
        {name: '.wbmp', value: 'image/vnd.wap.wbmp'},
        {name: '.wiz', value: 'application/msword'},
        {name: '.wk3', value: 'application/x-wk3'},
        {name: '.wk4', value: 'application/x-wk4'},
        {name: '.wkq', value: 'application/x-wkq'},
        {name: '.wks', value: 'application/x-wks'},
        {name: '.wm', value: 'video/x-ms-wm'},
        {name: '.wma', value: 'audio/x-ms-wma'},
        {name: '.wmd', value: 'application/x-ms-wmd'},
        {name: '.wmf', value: 'application/x-wmf'},
        {name: '.wml', value: 'text/vnd.wap.wml'},
        {name: '.wmv', value: 'video/x-ms-wmv'},
        {name: '.wmx', value: 'video/x-ms-wmx'},
        {name: '.wmz', value: 'application/x-ms-wmz'},
        {name: '.wp6', value: 'application/x-wp6'},
        {name: '.wpd', value: 'application/x-wpd'},
        {name: '.wpg', value: 'application/x-wpg'},
        {name: '.wpl', value: 'application/vnd.ms-wpl'},
        {name: '.wq1', value: 'application/x-wq1'},
        {name: '.wr1', value: 'application/x-wr1'},
        {name: '.wri', value: 'application/x-wri'},
        {name: '.wrk', value: 'application/x-wrk'},
        {name: '.ws', value: 'application/x-ws'},
        {name: '.ws2', value: 'application/x-ws'},
        {name: '.wsc', value: 'text/scriptlet'},
        {name: '.wsdl', value: 'text/xml'},
        {name: '.wvx', value: 'video/x-ms-wvx'},
        {name: '.xdp', value: 'application/vnd.adobe.xdp'},
        {name: '.xdr', value: 'text/xml'},
        {name: '.xfd', value: 'application/vnd.adobe.xfd'},
        {name: '.xfdf', value: 'application/vnd.adobe.xfdf'},
        {name: '.xhtml', value: 'text/html'},
        {name: '.xls', value: 'application/vnd.ms-excel'},
        {name: '.xls', value: 'application/x-xls'},
        {name: '.xlw', value: 'application/x-xlw'},
        {name: '.xml', value: 'text/xml'},
        {name: '.xpl', value: 'audio/scpls'},
        {name: '.xq', value: 'text/xml'},
        {name: '.xql', value: 'text/xml'},
        {name: '.xquery', value: 'text/xml'},
        {name: '.xsd', value: 'text/xml'},
        {name: '.xsl', value: 'text/xml'},
        {name: '.xslt', value: 'text/xml'},
        {name: '.xwd', value: 'application/x-xwd'},
        {name: '.x_b', value: 'application/x-x_b'},
        {name: '.sis', value: 'application/vnd.symbian.install'},
        {name: '.sisx', value: 'application/vnd.symbian.install'},
        {name: '.x_t', value: 'application/x-x_t'},
        {name: '.ipa', value: 'application/vnd.iphone'},
        {name: '.xap', value: 'application/x-silverlight-app'}
    ];

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
                class: 'table table-striped table-bordered',
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
                                    html: data[headers[j]] || ''
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
                    return $trs;
                }
            }).appendTo($table);

            return $table;
        },
        /**
         * 根据给定的数据构造表格
         * @param datas 数据
         */
        populate: function (datas) {
            if (datas && datas.length > 0) {
                return this._populate(datas);
            }
        }
    };

    $(document).ready(function () {
        $('#httpContentType').populateGrid({headers: [
            {header: '文件扩展名', name: 'name'},
            {header: 'Content-Type(Mime-Type)', name: 'value'}
        ], rowGroup: 2}, httpContentTypeData);
    });
})(jQuery);
