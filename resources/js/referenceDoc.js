/**
 * Created by zhaoyong on 2014-6-19.
 * 参考文档界面处理
 */
(function($){
    'use strict';
    var referenceDocData = [
        {name:'Ace', url:'http://tool.oschina.net/uploads/apidocs/ace'},
        {name:'akka2.0.2', url:'http://tool.oschina.net/uploads/apidocs/akka2.0.2/api/#package'},
        {name:'Android', url:'http://tool.oschina.net/uploads/apidocs/android/reference/packages.html'},
        {name:'Ant', url:'http://tool.oschina.net/uploads/apidocs/ant-1.8.4'},
        {name:'Apache CXF', url:'http://tool.oschina.net/uploads/apidocs/cxf'},
        {name:'Axis 1.6.2', url:'http://tool.oschina.net/uploads/apidocs/axis-1.6.2'},
        {name:'Apache HTTP服务器', url:'http://tool.oschina.net/uploads/apidocs/apache'},
        {name:'ASM字节码操作', url:'http://tool.oschina.net/uploads/apidocs/asm'},
        {name:'AutoConf手册', url:'http://tool.oschina.net/uploads/apidocs/autoconf'},
        {name:'AutoMake手册', url:'http://tool.oschina.net/uploads/apidocs/automake'},
        {name:'Bash手册', url:'http://tool.oschina.net/uploads/apidocs/bash-manual'},
        {name:'BoneCP', url:'http://tool.oschina.net/uploads/apidocs/bonecp'},
        {name:'Boost 1.50.0', url:'http://tool.oschina.net/uploads/apidocs/boost/boost_1_50_0'},
        {name:'Bootstrap', url:'http://tool.oschina.net/uploads/apidocs/bootstrap'},
        {name:'Cacheonix', url:'http://tool.oschina.net/uploads/apidocs/cacheonix'},
        {name:'C3P0连接池', url:'http://tool.oschina.net/uploads/apidocs/c3p0'},
        {name:'Commons-Beanutils', url:'http://tool.oschina.net/uploads/apidocs/commons-beanutils'},
        {name:'Commons-cli', url:'http://tool.oschina.net/uploads/apidocs/commons-cli'},
        {name:'Commons-codec', url:'http://tool.oschina.net/uploads/apidocs/commons-codec'},
        {name:'Commons-Collections', url:'http://tool.oschina.net/uploads/apidocs/commons-collections'},
        {name:'Commons-Dbutils', url:'http://tool.oschina.net/uploads/apidocs/commons-dbutils'},
        {name:'Commons-Digetster2.1', url:'http://tool.oschina.net/uploads/apidocs/commons-digester-2.1'},
        {name:'Commons-Digester3', url:'http://tool.oschina.net/uploads/apidocs/commons-digester'},
        {name:'Commons-el', url:'http://tool.oschina.net/uploads/apidocs/commons-el'},
        {name:'Commons-Fileupload', url:'http://tool.oschina.net/uploads/apidocs/commons-fileupload'},
        {name:'Commons-IO', url:'http://tool.oschina.net/uploads/apidocs/commons-io'},
        {name:'Commons-Lang', url:'http://tool.oschina.net/uploads/apidocs/commons-lang'},
        {name:'Commons-Logging', url:'http://tool.oschina.net/uploads/apidocs/commons-logging'},
        {name:'Commons-Net', url:'http://tool.oschina.net/uploads/apidocs/commons-net-3.2'},
        {name:'cos文件上传', url:'http://tool.oschina.net/uploads/apidocs/cos'},
        {name:'cURL7.26', url:'http://tool.oschina.net/uploads/apidocs/curl7.26'},
        {name:'C语言参考文档', url:'http://tool.oschina.net/uploads/apidocs/cpp/en/c.html'},
        {name:'C++语言参考文档', url:'http://tool.oschina.net/uploads/apidocs/cpp/en/cpp.html'},
        {name:'CSS3参考文档', url:'http://tool.oschina.net/uploads/apidocs/css3'},
        {name:'CSS2参考文档', url:'http://tool.oschina.net/uploads/apidocs/css2'},
        {name:'DBCP连接池', url:'http://tool.oschina.net/uploads/apidocs/dbcp'},
        {name:'Django文档', url:'http://tool.oschina.net/uploads/apidocs/django1.4'},
        {name:'Dom4j', url:'http://tool.oschina.net/uploads/apidocs/dom4j1.6.1/apidocs'},
        {name:'Druid数据库连接池', url:'http://tool.oschina.net/uploads/apidocs/druid0.26'},
        {name:'EhCache', url:'http://tool.oschina.net/uploads/apidocs/ehcache2.5.2'},
        {name:'ExtJS4.1', url:'http://tool.oschina.net/uploads/apidocs/extjs4.1/docs/index.html#!/api'},
        {name:'Freemarker 2.3.19', url:'http://tool.oschina.net/uploads/apidocs/freemarker'},
        {name:'JDK 1.6', url:'http://tool.oschina.net/uploads/apidocs/jdk_6u30'},
        {name:'Mybatis 3.1.1', url:'http://tool.oschina.net/uploads/apidocs/mybatis-3.1.1'},
        {name:'Go语言', url:'http://tool.oschina.net/uploads/apidocs/go-lang/effective_go.html'},
        {name:'IKExpression', url:'http://tool.oschina.net/uploads/apidocs/ikexpression'},
        {name:'Velocity 1.7', url:'http://tool.oschina.net/uploads/apidocs/velocity-1.7'}
    ];

    // 数组排序方法
    var arraySort = function(key){
        return function(item1, item2){
            if(item1 && item2){
                var k1 = item1 || '', k2 = item2 || '';
                if(key){
                    k1 = item1[key];
                    k2 = item2[key];
                }

                if(k1 || k2){
                    return k1.toString().localeCompare(k2.toString());
                } else{
                    return 0;
                }
            }
        };
    };

    $(document).ready(function(){
        if(referenceDocData && referenceDocData.length>0){
            var dataObject = {};
            // 然后将数据构造成 {'A':[], 'B' :[], ...]的数据格式
            for(var i= 0, length = referenceDocData.length; i<length; i++){
                var item = referenceDocData[i];
                if(item){
                    var name = item['name'];
                    if(name){
                        var aleph = name.substring(0, 1).toUpperCase();
                        var tempArray = dataObject[aleph];
                        if(!tempArray){
                            tempArray = [];
                        }
                        if(tempArray && $.isArray(tempArray)){
                            tempArray.push(item);
                            dataObject[aleph] = tempArray;
                        }
                    }
                }
            }
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

            // 构造页面
            for(var i= 0, length = keys.length; i<length; i++){
                var key = keys[i];
                if($('.btn-group', $('.nav-Alphabet-Index')).length <= 0){
                    $('<div>', {
                        'class': 'btn-group'
                    }).appendTo($('.nav-Alphabet-Index'));
                }
                //字母表添加可点击元素
                $('<a>', {
                    'class': 'btn btn-default',
                    'href': '#' + key,
                    html: '' + key
                }).click(function(event){
                }).appendTo($('.btn-group'));

                //将内容插入页面
                var data = dataObject[key];
                if(data && $.isArray(data)){
                    var ul = $('<ul>', {
                        'class': 'list-inline'
                    }).appendTo($('<div>', {
                        //name: '' + key,
                        html:[
                            $('<a>', { id: '' + key, name: '' + key }),
                            $('<strong>', { html: '' + key })
                        ]
                    }).appendTo('.nav-Alphabet-Source'));
                    for(var j= 0, leng = data.length; j<leng; j++){
                        var doc = data[j];
                        $('<li>', {
                            html:'<a target=\"_blank\" href=\"' + doc.url + '\">' + doc.name + '</a>'
                        }).appendTo($(ul));
                    }
                }
            }
        }
    });
})(jQuery);
