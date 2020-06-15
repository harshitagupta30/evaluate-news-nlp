var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const requestPost = require('./handleRequest');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Server listening on port 8081!');
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});

app.post('/article', requestPost.handlePostRequest);

module.exports = app;