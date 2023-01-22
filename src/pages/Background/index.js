chrome.browserAction.onClicked.addListener(function(){
    chrome.windows.create({
        type:'panel',
        url:'../Panel/index.html',
        width:300,
        height:500
    });
})
