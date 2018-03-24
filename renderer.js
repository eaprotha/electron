// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const request = require('request-promise')
const baseUrl = 'https://ws.shapr.net'
const {ipcRenderer} = window.require('electron');

exports.login = function (email, password) {
    return request.post({
        uri                    : baseUrl + '/acws/account/signin/',
        headers                : {
            'Content-Type': 'application/json'
        },
        method                 : "POST",
        json                   : true,
        body                   : {
            "username" : email,
            "password" : password
        },
        resolveWithFullResponse: true
    }).then(function (response) {
        if(response.body.status === "success") {
            ipcRenderer.send('home', response.body)
        } else {
            alert('Bad credentials');
        }
    }).catch(function (err) {
        // API call failed...
    });
}