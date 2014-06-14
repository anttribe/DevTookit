/**
 * Created by zhaoyong on 2014-6-14.
 * 用于页面上导航的处理
 */
(function($){
    $(document).ready(function(){
        $('.tabs').children('li').click(function(){
            // 所有兄弟li元素去除active样式
            $(this).siblings('li').removeClass('active');
            $('.tab-content').children().removeClass("show").addClass("hidden");

            // 取得a标签获得href属性值，得到需要显示的区域块id
            var href = $(this).children('a').attr('href');
            if(href){
                $('.tab-content').children('' + href + '').each(function(){
                    if(!$(this).attr('initialized')){
                        var src = $(this).attr('src');
                        if(src){
                            $('<iframe>', {
                                src: src,
                                frameborder: 'no',
                                height: '800',
                                width: '100%',
                                scrolling: 'no'
                            }).bind('resize', function(){
                                if(this.contentWindow){
                                    var contentHeight = Math.max(this.contentWindow.document.documentElement.scrollHeight, this.contentWindow.document.body.scrollHeight);
                                    if(contentHeight){
                                        alert(window);
                                        window.height = $(this).height = contentHeight;
                                    }
                                }
                            }).appendTo($(this));
                        }

                        $(this).attr({'initialized':'initialized'});
                    }
                    //当前页签显示
                    $(this).removeClass('hidden').addClass('show');
                });

                //当前节点添加active样式
                $(this).addClass('active');
            }
        });

        // 默认展示第一个页签
        if($('li.active', $('.tabs')).length == 0){
            $('li:first', $('.tabs')).click();
        }
    });
})(jQuery);
