/**
 * Created by zhaoyong on 2014/5/12.
 */
var dev_toolkit_uuid = null;

function dispayIndex(tab) {
    if(dev_toolkit_uuid){
        chrome.tabs.update(dev_toolkit_uuid, {
            active: true
        });
    } else{
        chrome.tabs.create({
            url: chrome.extension.getURL("../../popup.html")
        }, function(tab){
            dev_toolkit_uuid = tab.id;
        });
    }
};

chrome.browserAction.onClicked.addListener(function(tab){
    dispayIndex(tab);
});

chrome.tabs.onRemoved.addListener(function(tabId){
    if(tabId == dev_toolkit_uuid){
        dev_toolkit_uuid = null;
    }
});