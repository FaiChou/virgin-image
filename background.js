chrome.contextMenus.create({"title": "Open Virgin Image", "contexts": ["image"], "onclick": parseImage});

function parseImage(info, tab) {
  var imgUrl = info.srcUrl;
  if (imgUrl) {
    var virginUrl = imgUrl.replace(/\.\d+x\d+/, "");
    var activeTab = getCurrentTabIndex(function(index) {
      chrome.tabs.create({ url: virginUrl, index: index + 1 });  
    });
  }
}

function getCurrentTabIndex(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var index = tab.index;
    callback(index);
  });
}
