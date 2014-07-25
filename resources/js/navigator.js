/**
 * Created by zhaoyong on 2014-6-14.
 * 用于页面上导航的处理
 */
(function ($) {
    $(document).ready(function () {
        $('.tabs').children('li').click(function () {
            // 所有兄弟li元素去除active样式
            $(this).siblings('li').removeClass('active');
            $('.tab-content').children().removeClass("show").addClass("hidden");

            // 取得a标签获得href属性值，得到需要显示的区域块id
            var href = $(this).children('a').attr('href');
            if (href) {
                $('.tab-content').children('' + href + '').each(function () {
                    var $this = $(this);
                    if (!$this.attr('initialized')) {
                        var src = $this.attr('src');
                        if (src) {
                            function iframeSelfAdaption(iframe) {
                                if (iframe) {
                                    if (iframe.contentWindow) {
                                        var contentHeight = Math.max(iframe.contentWindow.document.documentElement.scrollHeight, iframe.contentWindow.document.body.scrollHeight);
                                        var windowHeight = Math.max(window.document.documentElement.scrollHeight, window.document.body.scrollHeight);
                                        var maxHeight = Math.max(contentHeight, windowHeight);
                                        $(iframe).height(maxHeight);
                                        $(window).height(maxHeight);

                                        if (window.frameElement) {
                                            if ($(window.frameElement).is('iframe') && window.frameElement.contentWindow) {
                                                contentHeight = Math.max(window.frameElement.contentWindow.document.documentElement.scrollHeight, window.frameElement.contentWindow.document.body.scrollHeight);
                                                $(window.frameElement).height(contentHeight);
                                            }
                                        }
                                    }
                                }
                            }

                            $('<iframe>', {
                                src: src,
                                frameborder: 'no',
                                marginheight: '10px',
                                width: '100%',
                                scrolling: 'no',
                                seamless: 'seamless'
                            }).bind({
                                'load': function () {
                                    iframeSelfAdaption(this);
                                }
                            }).appendTo($this);
                        }

                        $this.attr({'initialized': 'initialized'});
                    }
                    //当前页签显示
                    $(this).removeClass('hidden').addClass('show');
                });

                //当前节点添加active样式
                $(this).addClass('active');
            }
        });

        // 默认展示第一个页签
        if ($('li.active', $('.tabs')).length == 0) {
            $('li:first', $('.tabs')).click();
        }
    });
})(jQuery);
