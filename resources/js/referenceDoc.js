/**
 * Created by zhaoyong on 2014-6-19.
 * 参考文档界面处理
 */
(function($){
    'use strict';
    var referenceDocData = [
        {name:'JDK 1.6', url:'http://tool.oschina.net/uploads/apidocs/jdk_6u30'},
        {name:'CSS3参考文档', url:'http://tool.oschina.net/uploads/apidocs/css3'},
        {name:'CSS2参考文档', url:'http://tool.oschina.net/uploads/apidocs/css2'}
    ];
    $(document).ready(function(){
        if(referenceDocData && referenceDocData.length>0){
            var dataObject = {};
            // 然后将数据构造成 {'A':[], 'B' :[], ...]的数据格式
            $.each(referenceDocData, function(i, item){
                var name = item['name'];
                if(name){
                    var aleph = name.substring(0, 1);
                    aleph = aleph.toUpperCase();

                    var tempArray = dataObject[aleph];
                    if(!tempArray){
                        tempArray = [];
                    }
                    if(tempArray && $.isArray(tempArray)){
                        tempArray.push(item);

                        dataObject[aleph] = tempArray;
                    }
                }
            });

            // 数组排序方法
            var arraySort = function(key){
                return function(item1, item2){
                    if(item1 && item2){
                        var k1 = item1, k2 = item2;
                        if(key){
                            k1 = item1[key];
                            k2 = item2[key];
                        }
                        if(!k1 || !k2){
                            return 0;
                        } else{
                            return k2 - k1;
                        }
                    }
                };
            };
            var keys = [];
            // 将数组按照a-z排序, 将key按照a-z排序
            for(var prop in dataObject){
                var tempArray = dataObject[prop];
                if(tempArray && $.isArray(tempArray)){
                    tempArray.sort(arraySort('name'));
                }
                keys.push(prop);
            }
            keys.sort(arraySort());

            alert(keys);
            // 构造页面
            $.each(keys, function(i, item){
                //字母表添加可点击元素
                $('<a>', {
                    'class': 'btn',
                    html: '' + item
                }).appendTo($('.nav-Alphabet'));
            });
        }
    });
})(jQuery);
