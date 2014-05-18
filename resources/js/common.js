/**
 * Created by zhaoyong on 2014/5/13.
 */
(function($){
    /**
     * 阻止浏览器默认事件和冒泡
     * @param event
     */
    $.fn.preventDefault = function(event){
        event = event || window.event;
        if(event.preventDefault){
            event.preventDefault();
            event.stopPropagation();
        } else{
            event.cancelBubble = true;
            event.returnValue = false;
        }
    };
})(jQuery);
