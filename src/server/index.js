var path = require('path')
var aylien = require("aylien_textapi")
var cors = require('cors');
var bodyParser = require('body-parser')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')

dotenv.config()

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

const app = express()

app.use(cors())
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Server listening on port 8080!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
});


app.post('/article', function(req, res) {
    textapi.sentiment({
        'url': req.body.text
    }, function(error, response) {
        if (error === null) {
            res.send(response);
        }
    });
})

module.exports = app;