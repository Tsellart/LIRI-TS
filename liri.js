require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var request = require("request");

var spotify = require("node-spotify-api");

var spotify = new spotify(keys.spotify);

var liriSearch = process.argv[2];

var name = process.argv[3];

switch (liriSearch) {
    
    case 'spotify.this':
    spotify(search);
    break;


}