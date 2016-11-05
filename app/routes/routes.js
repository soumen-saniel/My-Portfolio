var express = require('express');
var multer = require('multer');
var model = require('../models/dbmodel'); // load the portfolio model
var router = express.Router();
router.route('/hero')
    .get(function(req, res) {
        // use mongoose to get all portfolio details in the database
        model.portfolio.find(function(err, result) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            console.log("result");
            console.log(result);
            res.json(result); // return all todos in JSON format
        });
    });

// expose the routes to our app with module.exports
module.exports = router; 
