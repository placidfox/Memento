chrome.action.onClicked.addListener(tab => {

    chrome.tabs.create({url:chrome.runtime.getURL('notepad.html'),active:true});

  });
