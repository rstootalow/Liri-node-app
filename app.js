require('dotenv').config();

//create variables/constants for app functionality
const fs = require('fs');
const keys = require('./keys.js');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
// const bands = new bands(keys.bandsKey);
const moment = require('moment');
const axios = require('axios');
const request = require('request');


var liriRequest = process.argv[2]
var userInput = process.argv.slice(3).join(" ");
var omdbKey = 'd6b764ec';


//switches for liriRequest
switch(liriRequest) {
   case 'movie-this':
       movieRequest();
       break;
   case 'spotify-this-song':
       spotifyRequest();
       break;
   case 'concert-this':
       concertRequest();
       break;
    case 'do-what-it-says':
        doWhatItSays();
        break;

   // instructions for entering in information
   default: console.log('type any of the following commands after node app.js to start the application:' + '\n' +
       'movie-this' + ' {Enter Movie Name}' + '\n' +
       'spotify-this-song' + ' {Enter Artist Name}' + '\n' +
       'concert-this' + ' {Enter Name of Band}' + '\n' +
       'do-what-it-says' + ' {Leave This Blank}' + '\n'
       );
       break;
}

// create functions to the respective apis

// OMDB function
function movieRequest() {
   // user input is worked in to the axios api call
   var movieURL = ('http://www.omdbapi.com/?apikey=' + omdbKey + '&t=' + userInput);

    axios.get(movieURL)
        .then(function(response) {
        console.log(response.data.Year)
        console.log(response.data.imdbRating);
        console.log(response.data.tomatoRating);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
        }
    )}

function spotifyRequest() {
    
}

function concertRequest() {
    var concertURL = ('https://rest.bandsintown.com/artists/' + userInput + '/events?app_id=codingbootcamp');
    console.log("******** " + "You are searching for: " + userInput +  " ********")
    //axios get call
    axios.get(concertURL)
        .then(function(response) {
            var concertData = response.data;
            console.log("This concert is being held at: " + concertData[0].venue.name);
            console.log("The venue is located in: " + (concertData[0].venue.city) + ", " +  concertData[0].venue.region);
            console.log("This event is happening on " + concertData[0].datetime);

            
        
        })
}


function doWhatItSays() {

}

