chrome.contextMenus.create({"title": "Open Virgin Image", "contexts": ["image"], "onclick": parseImage});
function parseImage(info, tab) {
  var imgUrl = info.srcUrl;
  if (imgUrl) {
    var virginUrl = imgUrl.replace(/\.\d+x\d+/, "");
    console.log(virginUrl);
    chrome.tabs.create({ url: virginUrl });
  }
}