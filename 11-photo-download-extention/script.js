    function downloadURL(url, filename) {
        chrome.runtime.sendMessage({
            download_url: url,
            filename: filename
        })
    }
    var i = 0;
    $("*").each(function () {
        if ($(this).is('img')) {
            console.log($(this).attr('src'));
            downloadURL($(this).attr('src'), 'img-' + (i++) + '.jpg');
        }
    })



    
