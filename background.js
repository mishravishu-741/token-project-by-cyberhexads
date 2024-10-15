chrome.runtime.onInstalled.addListener(() => {
    console.log('YouTube Token Extension installed');
  });
  
  chrome.storage.sync.get('token', (data) => {
    console.log('Token:', data.token);
  });
  