chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    let winecost = document.getElementById('ctl00_ContentPlaceHolder_Main_lblOwing').innerText;

    sendResponse({wine: winecost})
});
