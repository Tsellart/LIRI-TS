require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var request = require("request");

var spotify = require("node-spotify-api");

var command = process.argv[2];

var name = process.argv[3];

var divider = 
"\n----------------------------------------------------------\n\n";

function() {
    switch(command) {
        case "concert-this":
    }

    fs.appendFile("log.txt", name + divider, function(error) {
        if (error) {
            console.log(error);
        };
    });

    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

    request(queryURL, function (response, body) {
        var data = JSON.parse(body);

        for (var i = 0; i < data.length; i++) {
            console.log("Venue: " + data[i].venue.name);

            fs.appendFile("log.txt", "Venue: " + data[i].venue.name + "\n")
        };

        if (data[i].venue.region === "") {
            console.log("Venue Location: " + data[i].venue.city + ", " + data[i].venue.country);

            fs.appendFile("log.txt", "Location: " + data[i].venue.city + ", " + data[i].venue.country + "\n")
        }; 

        var date = data[i].datetime;

        date = moment(date).format("MM/DD/YYYY");
        console.log("Date: " + date);
        fs.appendFile("log.txt", "Date: " + date + divider);

    });

    break;

    switch(command) {

    
        case "spotify-this-song":

        if (!name) {

            name = "Ace of Bass";


        }

        fs.appendFile("log.txt", name + divider);

        spotify.search({ type: 'track', query: name }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        var info = data.tracks.items
        console.log(info);

        for (var j = 0; j < artistsInfo.length; j++) {
            console.log("Artist: " + artistsInfo[j].name);
            console.log("Song Name: " + trackName);
            console.log("Preview of Song: " + preview);
            console.log("Album Name: " + albumObject.name);
            consoe.log("-----------------");

            fs.appendFile("log.txt", "Artist: " + artistsInfo[j].name + "\nSong Name: " + trackName + "\nPreview of Song: " + preview + "\nAlbum Name: " + albumObject.name + divider);

        };
    }
}