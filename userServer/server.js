var express = require('express');
var fs = require('fs');
var exif = require('exif');
var ffmpeg = require('fluent-ffmpeg');


var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.post('/savePhoto', function(req, res){

});

app.post('/saveVideo', function(req, res){

});

app.post('/saveData', function(req, res){

});

app.listen(3000);
console.log('Listening on port 3000');


function savePhoto(req, res) {

}

function saveVideo(req, res) {

}

function saveData(req, res) {

}
