var express = require('express');
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


//var mediaStore = '/root/policeData/';
var mediaStore = '/home/ben/policeData/';


var app = express();

app.use(express.bodyParser());
app.use(express.static('../userApp'));



app.get('/home', function(req, res){
  res.send('Hello World');
});

app.post('/upload', function(req, res){

});

app.post('/savevideo', function(req, res){

});

app.post('/savephoto', function(req, res){

});

app.listen(3000);
console.log('User server on port 3000');


function getMetaData(url) {
  var child = exec("exiftool -json -n  "+url, function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    if (error !== null) {
       console.log('exec error: ' + error);
    }
  });
}

function saveItem(url) {


}


/*function savePhoto(data, callback) {

  var filePath = mediaStore+'/image/';

  fs.writeFile(filepath, data, function() {
    try {
    new ExifImage({ image : filepath }, function (error, exifData) {
        if (error){
            console.log('Error: '+error.message);
        }
        else {
            console.log(exifData); // Do something with your data!
        }
      });
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  });
	
}

function saveVideo(req, res) {
  var filePath = mediaStore+'/video/';
  fs.writeFile(filepath, data, function() {
    var metaObject = new Metalib('/path/to/your_movie.avi', function(metadata, err) {
      console.log(require('util').inspect(metadata, false, null));
    });
  });
   
}

function saveData(req, res) {

}

/*var metaObject = new Metalib(mediaStore+'IMG_0210.MOV', function(metadata, err) {
      console.log('Video metadata!!!');
      console.log(require('util').inspect(metadata, false, null));
    });

try {
    console.log('Picture metadata!!!');
    new ExifImage({ image :mediaStore+'IMG_0210.MOV' }, function (error, exifData) {
        if (error){
            console.log('Error: '+error.message);
        }
        else {
            console.log(exifData); // Do something with your data!
        }
      });
    } catch (error) {
      console.log('Error: ' + error.message);
    }

var child = exec("exiftool -json -n  ../../policeData/IMG_0210.MOV", function (error, stdout, stderr) {
sys.print('stdout: ' + stdout);
sys.print('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});*/
