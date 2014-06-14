/**
 * Created by zhaoyong on 2014/5/13.
 */
(function($){
    /**
     * 动态导入静态资源文件js/css
     */
    $import = function(){
        return function(){
            var argLength = arguments.length;
            if(argLength > 0){
                var files = [];
                for(var i=0; i<argLength; i++){
                    var resource = arguments[i];
                    if(resource && 'string' == typeof resource){
                        var sType = resource.substring(resource.lastIndexOf('.') + 1);
                        // 支持js/css
                        if(sType && ('js' == sType || 'css' == sType)){
                            files.push({'sType':sType, 'resource': resource});
                        }
                    }
                }

                if(files && files.length>0){
                    $.each(files, function(i, item){
                        var isScript = item['sType'] == 'js';
                        var tag = isScript ? 'script' : 'link';
                        var attrs = isScript ? {
                            'type':'text/javascript',
                            'src':'' + item['resource']
                        } : {
                            'type':'text/css',
                            'rel':'stylesheet',
                            'href':'' + item['resource']
                        };

                        //构造元素
                        $('<' + tag + '>', attrs).appendTo($('head'));
                    });
                }
            }
        };
    }();


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