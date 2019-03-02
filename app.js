require('dotenv').config();

//create variables for app functionality
var fs = require('fs');
var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var inquirer = require('inquirer');
var moment = require('moment');
var axios = require('axios');
var liriRequest = process.argv[2]
var userInput = process.argv[3];
var omdbKey = 'd6b764ec';

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
   default: console.log('type any of the following commands after node app.js to start the application:' + '\n' +
       'movies' + '\n' +
       'artists' + '\n' +
       'bands' + '\n');
       break;
}

// create functions to the respective apis

// OMDB function
function movieRequest() {
   // user input is worked in to the axios api call
   var movieURL = axios.get('http://www.omdbapi.com/?apikey=' + omdbKey + '&t=' + userInput + '').then(function(response){
       console.log(response.data.Year)
       console.log(response.data.imdbRating);
       console.log(response.data.tomatoRating);
       console.log(response.data.Country);
       console.log(response.data.Language);
       console.log(response.data.Plot);
       console.log(response.data.Actors);
   })

   // response is then populated back to the console
}

function spotifyRequest() {

}

function bandsRequest() {

}

