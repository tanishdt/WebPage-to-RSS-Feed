chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'convert') {
        fetch(`YOUR_CONVERTER_API_URL?url=${encodeURIComponent(message.url)}`)
            .then(response => response.text())
            .then(rss => {
                // Display the RSS feed or handle it as needed
                console.log(rss);
            })
            .catch(error => {
                console.error(error);
            });
    }
});
