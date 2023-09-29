// Listen for clicks on the browser action icon
browser.browserAction.onClicked.addListener(function (tab) {
  // Get the current tab's URL
  browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentURL = tabs[0].url;
    const cacheURL = `http://webcache.googleusercontent.com/search?q=cache:${currentURL}`;
    browser.tabs.update({ url: cacheURL });
    console.log('Hello');
  });
});

