fetch('https://youtube.googleapis.com/youtube/v3/channels?forUsername=rdcworld1&key=AIzaSyBGNJO9K3-LxX2cdwavUiWeX7qCjCFXSno')
    .then( res => {
        return res.json();
    })
    .then( data => {
        console.log(data);
    })