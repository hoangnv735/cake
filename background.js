const cake = () => {
  const onUpdateListener = (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      browser.tabs.onUpdated.removeListener(onUpdateListener);
      browser.tabs.toggleReaderMode(tabId);
    }
  }
  browser.tabs.onUpdated.addListener(onUpdateListener);
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => tabs[0]).then((tab) => {
    // console.log(tab);
    var cacheURL = `http://webcache.googleusercontent.com/search?q=cache:${tab.url}&strip=1`;
    // cacheURL = `about:reader?url=${encodeURIComponent(cacheURL)}`;
    browser.tabs.update({ url: cacheURL });
  });
};
browser.browserAction.onClicked.addListener(cake);

// Add Keyboard shortcuts
browser.commands.onCommand.addListener((command) => {
    switch (command) {
        case 'cake':
            cake();
    }
});

