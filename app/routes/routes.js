var express = require('express');
var multer = require('multer');
var model = require('../models/dbmodel'); // load the portfolio model
var router = express.Router();
//-----------------------------------------------------------------------------------------------
//Routes for Hero section
//-----------------------------------------------------------------------------------------------
router.route('/hero')
    .get(function(req, res) {
        // use mongoose to get all portfolio details in the database
        model.hero.find(function(err, result) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            console.log("result");
            console.log(result);
            res.json(result); // return all todos in JSON format
        });
    })
    .post(function(req, res) {
        // create a todo, information comes from AJAX request from Angular
        console.log('POST object (req.body):', req.body);
    
        model.hero.create({
            image : req.body.image,
            text : req.body.text
        }, function(err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.hero.find(function(err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
        });
    })
    .delete(function(req, res) {
        console.log('DELETE object (req.body):', req.body);

        model.hero.remove({
            _id : req.body._id
        }, function(err, result) {
            if(err)
                res.send(err);
            res.json(result);
        })
    });

var storageHero = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, './public/img/landing')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        // cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        cb(null, file.originalname);
    }
});
var uploadHero = multer({ 
    storage: storageHero
}).single('file');

router.route('/hero/img')
    .post( function(req, res) {
        uploadHero(req,res,function(err){
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
//Configuration
//-----------------------------------------------------------------------------------------------

// expose the routes to our app with module.exports
module.exports = router; 
