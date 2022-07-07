function getTime() {
    if (document.getElementById("time") != null) {
        var time = document.getElementById("time").innerHTML;
    }
    return time;
};
var t = getTime();
console.log(t);
  

chrome.contextMenus.onClicked.addListener(() => {
chrome.tabs.sendMessage(document.getElementById("time").innerHTML);
});