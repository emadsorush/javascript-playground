chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.download_url) {
        console.log([3, message.download_url])
        chrome.downloads.download({
            url: message.download_url,
            filename: message.filename,
            saveAs: false
        });
    }
});