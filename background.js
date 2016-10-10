/* When the browser-action button is clicked... */
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
        $('#status').html('changed data in page');
        console.log('success');
    });
});