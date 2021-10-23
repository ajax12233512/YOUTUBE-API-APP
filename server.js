const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, (err) =>{
    if(err) console.log("Error in server setup")
    console.log(`Server  listening on Port: ${PORT}`);
})
