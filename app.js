require('dotenv').config();

//create variables for app functionality
var fs = require('fs');
var keys = require('./keys.js');
var spotify = require('node-spotify.api');
var inquirer = require('inquirer.js');
var moment = require('moment.js');
var axios = require('axios.js');
var liriRequest = process.argv[2]
var userInput = process.argv[3];

//switches for liriRequest
switch(liriRequest) {
    case 'movies':
        movieRequest();
        break;
    case 'artists':
        spotifyRequest();
        break;
    case 'bands':
        bandsRequest();
        break;

    // instructions for entering in information
    default: console.log('type any of the following commands after node add.js to start the application:' + '\n' + 
        'movies' + '\n' +
        'artists' + '\n' +
        'bands' + '\n');
}

// create functions to the respective apis

// OMDB function
function movieRequest() {
    var nodeArgs = process.argv
}

function spotifyRequest() {

}

function bandsRequest() {

}

