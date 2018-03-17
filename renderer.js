// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const express = require("express");
const app = express();
const domain = 'https://ws.shapr.net';

app.post('/login', function (req, res) {
    return request.post({
        uri                    : domain,
        headers                : {
            'Accept-Language': 'fr_FR'
        },
        method                 : "GET",
        json                   : true,
        body                   : null,
        resolveWithFullResponse: true
    });
});