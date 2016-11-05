//-----------------------------------------------------------------------------------------------
//Set up
//-----------------------------------------------------------------------------------------------
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var appRoutes = require('./app/routes/routes');
var multer = require('multer');
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');

var port = process.env.PORT || 3000;
//-----------------------------------------------------------------------------------------------
//Configuration
//-----------------------------------------------------------------------------------------------
var database = require('./config/database');
mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Successfully connected to the database!");
});
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//-----------------------------------------------------------------------------------------------
//Configuring multer for file uploads
//-----------------------------------------------------------------------------------------------
/** API path that will upload the files */
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        if(err){
        	console.log('ERROR');
        	console.log(err);
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    })
});
//-----------------------------------------------------------------------------------------------
//Load the routes
//-----------------------------------------------------------------------------------------------
app.use('/api', appRoutes);
//-----------------------------------------------------------------------------------------------
//listen (start app with node server.js)
//-----------------------------------------------------------------------------------------------
app.listen(port, function (){
    console.log("Portfolio App listening on port " + port);
});
