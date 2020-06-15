const aylien = require("aylien_textapi");
const dotenv = require('dotenv');

dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

function handlePostRequest(req, res) {
    textapi.sentiment({
        'url': req.body.text
    }, function(error, response) {
        if (error === null) {
            res.send(response);
        }
    });
}

exports.handlePostRequest = handlePostRequest;