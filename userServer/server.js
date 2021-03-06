var express = require('express');
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var formidable = require('formidable');



//var mediaStore = '/root/policeData/';
var mediaStore = '/home/ben/policeData/';


var app = express();


app.use(express.bodyParser());
app.use(express.static('../userApp'));



app.get('/home', function(req, res){
  res.send('Hello World');
});

app.post('/upload', function(req, res){ 

  fs.readFile(req.files.image.path, function (err, data) {

  var newPath = "/home/ben/policeData/"+req.files.image.originalFilename;
  fs.writeFile(newPath, data, function (err) {
    getMetaData(newPath, req.body);
  });
  res.send('Thanks');
});


});


app.listen(3000);
console.log('User server on port 3000');


function getMetaData(url, body) {
  var child = exec("exiftool -json -n  "+url, function (error, stdout, stderr) {
    console.log(stdout);
    var uploadPhoto = new photo({url: url, long: body.long, latitude: body.lat, date: new Date(body.date), direction: stdout.gpsdirection});
    uploadPhoto.save();
  });
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});


var photoSchema = mongoose.Schema({url: String, long: Number, latitude: Number, date: Date, direction: Number});
var photo = mongoose.model('photo', photoSchema);






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
    } catch (error) {
      });
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
