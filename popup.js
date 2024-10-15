document.getElementById('save').addEventListener('click', () => {
    const token = document.getElementById('token').value;
    chrome.storage.sync.set({ token }, () => {
        console.log('Token saved:', token);
    });
});

document.getElementById('use').addEventListener('click', () => {
    chrome.storage.sync.get('token', (data) => {
        if (data.token) {
            // Replace with your API call
            console.log('Using token:', data.token);
            // Example: Fetch data from YouTube API
            // fetch(`https://www.googleapis.com/youtube/v3/someEndpoint?access_token=${data.token}`)
            //     .then(response => response.json())
            //     .then(data => console.log(data));
        } else {
            console.log('No token found');
        }
    });
});
