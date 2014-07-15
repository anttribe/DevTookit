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
        {name:'FlexJson', url:'http://tool.oschina.net/uploads/apidocs/flexjson'},
        {name:'Go语言', url:'http://tool.oschina.net/uploads/apidocs/go-lang/effective_go.html'},
        {name:'GCC4.7手册', url:'http://tool.oschina.net/uploads/apidocs/gcc-4.7.1-manual'},
        {name:'glib', url:'http://tool.oschina.net/uploads/apidocs/glib'},
        {name:'GNU-gsl参考手册', url:'http://tool.oschina.net/uploads/apidocs/gsl'},
        {name:'GNU-libc手册', url:'http://tool.oschina.net/uploads/apidocs/gnu-libc-manual'},
        {name:'GNU-libstdc++手册', url:'http://tool.oschina.net/uploads/apidocs/libstdcpp-manual'},
        {name:'Grails', url:'http://tool.oschina.net/uploads/apidocs/grails'},
        {name:'Gson2.2.2', url:'http://tool.oschina.net/uploads/apidocs/gson2.2.2'},
        {name:'Gtk+', url:'http://tool.oschina.net/uploads/apidocs/gtk+/'},
        {name:'guava', url:'http://tool.oschina.net/uploads/apidocs/guava'},
        {name:'Hadoop', url:'http://tool.oschina.net/uploads/apidocs/hadoop'},
        {name:'Hibernate 3.6', url:'http://tool.oschina.net/uploads/apidocs/hibernate-3.6.10'},
        {name:'Hibernate 4.1', url:'http://tool.oschina.net/uploads/apidocs/hibernate-4.1.4'},
        {name:'HTMLParser', url:'http://tool.oschina.net/uploads/apidocs/HTMLParser'},
        {name:'HttpComponents/HttpClient', url:'http://tool.oschina.net/uploads/apidocs/httpcomponents'},
        {name:'IKAnalyzer', url:'http://tool.oschina.net/uploads/apidocs/ikanalyzer'},
        {name:'IK-Expression', url:'http://tool.oschina.net/uploads/apidocs/ikexpression'},
        {name:'Jackson文档', url:'http://tool.oschina.net/uploads/apidocs/jackson-1.9.9'},
        {name:'JDK 1.6', url:'http://tool.oschina.net/uploads/apidocs/jdk_6u30'},
        {name:'JActor 4.5.0', url:'http://tool.oschina.net/uploads/apidocs/jactor-4.5.0'},
        {name:'JASocket 1.1.0', url:'http://tool.oschina.net/uploads/apidocs/jasocket-1.1.0'},
        {name:'J2EE 5.0', url:'http://tool.oschina.net/uploads/apidocs/javaEE5'},
        {name:'J2EE 6.0', url:'http://tool.oschina.net/uploads/apidocs/javaEE6'},
        {name:'JDK 7', url:'http://tool.oschina.net/uploads/apidocs/jdk_7u4'},
        {name:'JDK 中文版', url:'http://tool.oschina.net/uploads/apidocs/jdk-zh'},
        {name:'Jedis2.1.0', url:'http://tool.oschina.net/uploads/apidocs/jedis-2.1.0'},
        {name:'Jetty8', url:'http://tool.oschina.net/uploads/apidocs/jetty8.1.5'},
        {name:'JFinal', url:'http://tool.oschina.net/uploads/apidocs/jfinal'},
        {name:'JFreeChart', url:'http://tool.oschina.net/uploads/apidocs/jfreechart'},
        {name:'JMathLib', url:'http://tool.oschina.net/uploads/apidocs/jmathlib'},
        {name:'JQuery', url:'http://tool.oschina.net/uploads/apidocs/jquery'},
        {name:'JQuery Mobile', url:'http://tool.oschina.net/uploads/apidocs/jquery-mobile'},
        {name:'Json-lib', url:'http://tool.oschina.net/uploads/apidocs/json-lib2.4'},
        {name:'Jsoup 1.6', url:'http://tool.oschina.net/uploads/apidocs/jsoup-1.6.3'},
        {name:'Junit4', url:'http://tool.oschina.net/uploads/apidocs/junit-4.10'},
        {name:'Karaf', url:'http://tool.oschina.net/uploads/apidocs/karaf'},
        {name:'Kyro-2.21', url:'http://tool.oschina.net/uploads/apidocs/kyro-2.21'},
        {name:'LiftWeb-2.3', url:'http://tool.oschina.net/uploads/apidocs/liftweb-2.3'},
        {name:'Log4j-1.2', url:'http://tool.oschina.net/uploads/apidocs/log4j-1.2.16'},
        {name:'Lua', url:'http://tool.oschina.net/uploads/apidocs/lua'},
        {name:'Lucene 3.6', url:'http://tool.oschina.net/uploads/apidocs/lucene-3.6.0'},
        {name:'Lucene 4.0', url:'http://tool.oschina.net/uploads/apidocs/lucene-4.0.0'},
        {name:'make手册', url:'http://tool.oschina.net/uploads/apidocs/make-manual'},
        {name:'Mybatis 3.1.1', url:'http://tool.oschina.net/uploads/apidocs/mybatis-3.1.1'},
        {name:'Maven手册', url:'http://tool.oschina.net/uploads/apidocs/maven-3.0.4/guides'},
        {name:'MINA 2.0', url:'http://tool.oschina.net/uploads/apidocs/mina'},
        {name:'MySQL英文文档', url:'http://tool.oschina.net/uploads/apidocs/mysql-5.5-en'},
        {name:'MySQL中文文档', url:'http://tool.oschina.net/uploads/apidocs/mysql-5.1-zh'},
        {name:'Nutch2.0', url:'http://tool.oschina.net/uploads/apidocs/nutch2.0'},
        {name:'Netty', url:'http://tool.oschina.net/uploads/apidocs/netty'},
        {name:'Nginx中文文档', url:'http://tool.oschina.net/uploads/apidocs/nginx-zh'},
        {name:'Node.js', url:'http://tool.oschina.net/uploads/apidocs/nodejs/api'},
        {name:'Nutz', url:'http://tool.oschina.net/uploads/apidocs/nutz-1.b.44'},
        {name:'OGRE 3D', url:'http://tool.oschina.net/uploads/apidocs/ogre3d/api/html'},
        {name:'OpenFire', url:'http://tool.oschina.net/uploads/apidocs/openfire'},
        {name:'OpenJPA', url:'http://tool.oschina.net/uploads/apidocs/openjpa'},
        {name:'Php中文文档', url:'http://tool.oschina.net/uploads/apidocs/php-zh'},
        {name:'Php英文文档', url:'http://tool.oschina.net/uploads/apidocs/php-en'},
        {name:'PhoneGap1.9', url:'http://tool.oschina.net/uploads/apidocs/phonegap1.9'},
        {name:'Play1.2.5', url:'http://tool.oschina.net/uploads/apidocs/play1.2.5'},
        {name:'Play2_Java', url:'http://tool.oschina.net/uploads/apidocs/play2.0.2_java'},
        {name:'Play2_Scala', url:'http://tool.oschina.net/uploads/apidocs/play2.0.2_scala'},
        {name:'PostgreSQL9.1', url:'http://tool.oschina.net/uploads/apidocs/postgresql9.1'},
        {name:'POI-apache', url:'http://tool.oschina.net/uploads/apidocs/apache-POI'},
        {name:'Python3', url:'http://tool.oschina.net/uploads/apidocs/Python/reference'},
        {name:'Python2.7', url:'http://tool.oschina.net/uploads/apidocs/python2.7.3'},
        {name:'Qt4', url:'http://tool.oschina.net/uploads/apidocs/qt'},
        {name:'QuickServer', url:'http://tool.oschina.net/uploads/apidocs/quickserver'},
        {name:'Rails', url:'http://tool.oschina.net/uploads/apidocs/rails'},
        {name:'Rhino', url:'http://tool.oschina.net/uploads/apidocs/rhino'},
        {name:'Ruby-1.9', url:'http://tool.oschina.net/uploads/apidocs/ruby-1.9.3-core'},
        {name:'Ruby-library', url:'http://tool.oschina.net/uploads/apidocs/ruby-library'},
        {name:'', url:''},
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
