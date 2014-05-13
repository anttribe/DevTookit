/**
 * Created by zhaoyong on 2014/5/13.
 */
(function($){
    var menus = {
        "index":{
            tabbed: false,
            items:[
                {id:"index", "name":"", "action":"introduce.html"}
            ]
        },
        "comparison":{
            tabbed:true,
            items:[
            ]
        },
        "code":{
            tabbed:true,
            items:[
                {id:"json", "name":"Json格式化", "action":"toolkit/code/jsonFormatter.html"}
            ]
        },
        "webTool":{
            tabbed:true,
            items:[
            ]
        }
    };
    $(document).ready(function(){
        $(".nav").children("li").click(function(){
            // 所有兄弟li元素去除active样式
            $(this).siblings("li").removeClass("active");
            $("#content").children().removeClass("show").addClass("hidden");

            if(!$(this).hasClass("active")){
                // 自身加上active样式
                $(this).toggleClass("active");

                var action = $(this).attr("action");
                if(action){
                    var menu = menus[action];
                    if(menu){
                        var tabbedId = "#" + action;
                        var tabbed = $(tabbedId);
                        if(tabbed.length == 0){
                            tabbed = $("<div>", {
                                id: "" + action
                            }).appendTo($("#content"));
                        }
                        $(tabbed).removeClass("hidden").addClass("show");

                        var isTabbed = menu["tabbed"];
                        if(isTabbed){
                            var items = menu["items"];
                            if(items && items.length>0) {
                                var tabsId = action + "-tabs";
                                var tabContentId = action + "-tabContent";
                                if($("#" + tabsId, $(tabbed)).length == 0){
                                    $("<ul>", {
                                        id: tabsId,
                                        class: "nav nav-tabs"
                                    }).appendTo($(tabbed));
                                }
                                if($("#" + tabContentId, $(tabbed)).length == 0){
                                    $("<div>", {
                                        id: tabContentId,
                                        class: "tab-content"
                                    }).appendTo($(tabbed));
                                }

                                for (var i = 0; i < items.length; i++) {
                                    var subMenu = items[i];
                                    var subMenuId = action + "-" + subMenu["id"];
                                    if($("#" + subMenuId).length != 0){
                                        continue;
                                    }

                                    $("<li>", {
                                        id: subMenuId,
                                        html: "<a href='#" + subMenu["id"] + "' data-toggle='tab'>" + subMenu["name"] + "</a>"
                                    }).appendTo($("#" + tabsId));
                                    $("<div>", {
                                        id: subMenu["id"],
                                        class: "tab-pane",
                                        html: "<iframe src='" + subMenu["action"] + "' frameborder='no' height='" + $(document).height() + "' width='100%' scrolling='no'></iframe>"
                                    }).appendTo($("#" + tabContentId));
                                }

                                //默认选中第一个tab
                                if($(".active", $("#" + tabsId)).length==0){
                                    $("a:first", $("#" + tabsId)).click();
                                }
                            }
                        } else{
                            var items = menu["items"];
                            if(items && items.length>0){
                                for(var i=0; i<items.length; i++){
                                    var subMenu = items[i];
                                    var subMenuId = action + "-" + subMenu["id"];
                                    if($("#" + subMenuId).length != 0){
                                        continue;
                                    }

                                    $("<div>", {
                                        id: action + "-" + subMenu["id"],
                                        html: "<iframe src='" + subMenu["action"] + "' frameborder='no' height='100%' width='100%' scrolling='auto'></iframe>"
                                    }).appendTo($(tabbed));
                                }
                            }
                        }
                    }
                }
            }
        });

        //默认展示第一个nav
        if($("li.active", $(".nav")).length == 0){
            $("li:first", $(".nav")).click();
        }
    });
})(jQuery);
