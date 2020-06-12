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

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    textapi.sentiment({
        'url': 'https://www.skillsyouneed.com/ips/dealing-with-criticism.html'
    }, function(error, response) {
        if (error === null) {
            res.send(response);
            console.log(response);
        }
    });

})