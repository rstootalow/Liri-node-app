require("dotenv").config();

//create variables/constants for app functionality
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
// const bands = new bands(keys.bandsKey);
const moment = require("moment");
const axios = require("axios");
const request = require("request");


var liriRequest = process.argv[2]
var userInput = process.argv.slice(3).join(" ");
var omdbKey = "d6b764ec";


//switches for liriRequest
switch(liriRequest) {
   case "movie-this":
       movieRequest();
       break;
   case "spotify-this-song":
       spotifyRequest();
       break;
   case "concert-this":
       concertRequest();
       break;
    case "do-what-it-says":
        doWhatItSays();
        break;

   // instructions for entering in information
   default: console.log("**********" + "INSTRUCTIONS FOR USE" + "**********" + "type any of the following commands after node app.js to start the application: " + "\n" +
       "movie-this" + " {Enter Movie Name}" + "\n" +
       "spotify-this-song" + " {Enter Artist Name}" + '\n' +
       "concert-this" + " {Enter Name of Band}" + "\n" +
       "do-what-it-says" + " {Leave This Blank}" + "\n"
       );
       break;
}

// create functions to the respective apis

// OMDB function
function movieRequest() {
    if (!userInput) {
        userInput = "Mr nobody";
    }
   // user input is worked in to the axios api call
   var movieURL = ("http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + userInput);
    
    axios.get(movieURL)
         .then(function(response) {
            console.log("\n");
            console.log("********** SEARCHING FOR " + userInput + " **********");
            console.log("\n");
            // limit search to 3 movies in case of overlap
                var results = 
                "********************" +
                "\n" +
                "\n - Title: " + response.data.Title +
                "\n - Year Released: " + response.data.Year +
                "\n - IMDB Rating: " + response.data.imdbRating +
                "\n - Rotten Tomatoes Score: " + response.data.Ratings[1].Value +
                "\n - Country of Origin: " + response.data.Country +
                "\n - Language: " + response.data.Language +
                "\n - Plot: " + response.data.Plot +
                "\n - Cast Members: " + response.data.Actors + 
                "\n" + 
                "\n**********************" +
                "\n";
                console.log(results);
        });
}
 

function spotifyRequest() {
    if (!userInput) {
        userInput = "The Sign";
    }
    spotify
        .search({type: "track", query: userInput})
            .then(function(response) {
                console.log("  ");
                console.log("********** SEARCHING FOR " + userInput + " *********" );
                console.log("  ");
                // limit search results to 3 songs
                for (var i = 0; i < 3; i++) {
                    var results = 
                    "********************" +
                    "\nArtists: " + response.tracks.items[i].artists[0].name +
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nLink To Preview: " + response.tracks.items[i].preview_url;

                    console.log(results);
                }
            })
}

function concertRequest() {
    var concertURL = ("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp");
    //add logic to come up with error statement if no concerts are availeable.
    console.log("******** " + "You are searching for: " + userInput +  " ********")
    //axios get call
    axios.get(concertURL)
        .then(function(response) {
                var concertData = response.data;
                const convertedDate = moment(concertData[0].datetime).format("MM/DD/YYYY");
                // var converted
                console.log("This concert is being held at: " + concertData[0].venue.name);
                console.log("The venue is located in: " + (concertData[0].venue.city) + ", " +  concertData[0].venue.region);
                console.log("This event is happening on " + convertedDate
                );
                
        })
}

 function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        } else {
            //split read me file in to an array
            var dataArr = data.split(",");
            // console.log(dataArr);
            // if first index of array is spotify command
            if (dataArr[0] === "spotify-this-song") {
                // assign second index to userInput
                userInput = dataArr[1];
                //then run spotify function
                spotifyRequest();
             }
        }
        
    })
 }