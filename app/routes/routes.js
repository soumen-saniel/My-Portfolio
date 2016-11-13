var express = require('express');
var multer = require('multer');
var model = require('../models/dbmodel'); // load the portfolio model
var router = express.Router();
var fs = require('fs-extra');
//-----------------------------------------------------------------------------------------------
//Generic functions
//-----------------------------------------------------------------------------------------------
function deleteFile(file){
    fs.stat('./public/'+file, function (err, stats) {
        console.log(stats);//here we got all information of file in stats variable

        if (err) {
            return console.error(err);
        }

        fs.unlink('./public/'+file,function(err){
            if(err) 
                return console.log(err);
            console.log('file deleted successfully');
        });  
    });
}
function deleteUnrequiredResources(files, path){
    fs.readdir(path, function (err, result){
        newPath = path.split("./public");
        newPath = newPath[1];
        result.forEach(function (val, key){
            var exists = false;
            for(var i = 0; i < files.length; i++){
                if(val.toUpperCase() === files[i].toUpperCase()){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                deleteFile(newPath+val);
            }
        });
    });
}
function createDirectory (dir) {
    fs.stat('./public/img/project/'+dir, function (err, stats){

        if(err){
            fs.mkdirs('./public/img/project/'+dir, function(err){
                if (err) return console.error(err);

                console.log("New directory created")
            });
        }
    });
}
function deleteDirectory (dir) {
    fs.stat('./public/img/project/'+dir, function (err, stats){
        if(err){}
        else{
            fs.remove('./public/img/project/'+dir, function(err){
              if (err) return console.error(err);
              
              console.log("Directory removed successfully");
            });
        }
    });
}
function deleteUnrequiredFolders(files, path){
    fs.readdir(path, function (err, result){
        result.forEach(function (val, key){
            var exists = false;
            for(var i = 0; i < files.length; i++){
                if(val.toUpperCase() === files[i].toUpperCase()){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                fs.remove(path + val, function(err){
                    if (err) return console.error(err);
                    console.log("Directory removed successfully");
                });
            }
        });
    });
}
function copy () {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);
    readStream.on('close', function () {
        fs.unlink(oldPath, callback);
    });
    readStream.pipe(writeStream);
}
function move (oldPath, newPath, dir, callback) {
    fs.stat('./public/img/project/'+dir, function (err, stats){
        if(err){
            fs.mkdirs('./public/img/project/'+dir, function(err){
                if (err) return console.error(err);

                fs.rename(oldPath, newPath, function (err) {
                    if (err) {
                        if (err.code === 'EXDEV') {
                            copy();
                        } else {
                            callback(err);
                        }
                        return;
                    }
                    callback();
                });  
            });
        }else{
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    if (err.code === 'EXDEV') {
                        copy();
                    } else {
                        callback(err);
                    }
                    return;
                }
                callback();
            });
        }
    });
}
//-----------------------------------------------------------------------------------------------
//Routes for Hero section
//-----------------------------------------------------------------------------------------------
router.route('/hero')
    .get(function(req, res) {
        // use mongoose to get all portfolio details in the database
        model.hero.find(function (err, result) {

            if (err)
                res.send(err);
            res.json(result);
        });
    })
    .post(function (req, res) {
    
        model.hero.create({
            image : req.body.image,
            text : req.body.text
        }, function (err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.hero.find(function (err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
        });
    })
    .put(function (req, res){
        var query = {_id : req.body._id};
        model.hero.update(query,{
            image : req.body.image,
            text : req.body.text
        },{
            multi : false
        }, function (err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.hero.find(function (err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
        })
    })
    .delete(function (req, res) {
        model.hero.remove({
            _id : req.body._id
        }, function (err, result) {
            if(err)
                res.send(err);
             model.hero.find(function (err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
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
    .post( function (req, res) {
        uploadHero(req,res,function (err){
            if(err){
                console.log(err);
                res.json({error_code:1,err_desc:err});
                return;
            }
            res.json({error_code:0,err_desc:null});
        })
    })
    .delete( function (req, res) {
        if(Array.isArray(req.body.file)){
            var files = req.body.file;
            deleteUnrequiredResources(files, './public/img/landing/');
        }else{
            deleteFile(req.body.file);
        }
    });
//-----------------------------------------------------------------------------------------------
//Routes for portfolio section
//-----------------------------------------------------------------------------------------------
router.route('/portfolio/main')
    .get(function (req, res){
        model.portfolioMain.find(function (err, result) {
            if (err)
                res.send(err);
            res.json(result);
        });
    })
    .post(function (req, res){
        model.portfolioMain.create({
            name : req.body.name,
            overview : req.body.overview,
            technology : req.body.technology,
            url : req.body.url,
            category : req.body.category,
            client : req.body.client,
            role : req.body.role,
            complete : req.body.complete,
            image : req.body.image

        }, function (err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.portfolioMain.find(function (err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
        });
    })
    .put(function (req, res){
        var query = {_id : req.body._id};
        model.portfolioMain.update(query,{
            overview : req.body.overview,
            technology : req.body.technology,
            url : req.body.url,
            category : req.body.category,
            client : req.body.client,
            role : req.body.role,
            complete : req.body.complete,
            image : req.body.image
        },{
            multi : false
        }, function (err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.portfolioMain.find(function (err, result) {
                if (err)
                    res.send(err);
                
                res.json(result);
            });
        })
    })
    .delete(function (req, res){
        deleteDirectory (req.body.name);
        model.portfolioMain.remove({
            _id : req.body._id
        }, function (err, result) {
            if(err)
                res.send(err);
             model.portfolioMain.find(function (err, result) {
                if (err)
                    res.send(err);
                res.json(result);
            });
        })
    });
router.route('/portfolio/sub/:id')
    .get(function (req, res){
        console.log(req.params.id);
        model.portfolioSub.find({'key' : req.params.id}, function (err, result) {
            if (err)
                res.send(err);
            res.json(result);
        });
    })
router.route('/portfolio/sub')
    .post(function (req, res){
        model.portfolioSub.create({
            image : req.body.image,
            key : req.body.key,
            name : req.body.name,
            description : req.body.description
        }, function (err, result) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            model.portfolioSub.find({'key' : req.body.key}, function (err, result) {
                if (err)
                    res.send(err);
                res.json(result);
            });
        });
    })
    .put(function (req, res){
        if(req.body.oldImage){
            // Delete the image file from directory
            deleteFile(req.body.oldImage);
        }
        var query = {_id : req.body._id};
        model.portfolioSub.update(query,{
            image : req.body.image,
            key : req.body.key,
            description : req.body.description
        },{
            multi : false
        }, function (err, result) {
            if (err)
                res.send(err);

            model.portfolioSub.find({'key' : req.body.key}, function (err, result) {
                if (err)
                    res.send(err);
                res.json(result);
            });
        })
    })
    .delete(function (req, res){
        deleteFile(req.body.image);
        model.portfolioSub.remove({
            _id : req.body._id
        }, function (err, result) {
            if(err)
                res.send(err);
            model.portfolioSub.find({'key' : req.body.key}, function (err, result) {
                if (err)
                    res.send(err);
                res.json(result);
            });
        })
    });

var storageProject = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, './public/img/temp')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname);
    }
});
var uploadProject = multer({ 
    storage: storageProject
}).single('file');
router.route('/portfolio/img')
    .post( function (req, res) {
        uploadProject(req,res,function (err){
            if(err){
                console.log('ERROR');
                console.log(err);
                res.json({error_code:1,err_desc:err});
                return;
            }
            console.log(req.body);
            var oldPath = './public/img/temp/' + req.body.name,
                newPath = './public/img/project/' +req.body.dir+'/'+ req.body.name,
                dir = req.body.dir;
            move(oldPath, newPath, dir, function (err){
                if(err){
                    console.log(err);
                }else{
                    console.log("successfully moved")
                }
            });
            res.json({error_code:0,err_desc:null});
        })
    })
    .delete( function (req, res) {
        if(Array.isArray(req.body.file)){
            var files = req.body.file;
            var path = req.body.path;
            if(req.body.folder){
	            deleteUnrequiredFolders(files, path);
	        }else{
	        	console.log(path);
	        	deleteUnrequiredResources(files, path);
	        }
        }else{
            deleteFile(req.body.file);
        }
    });
//-----------------------------------------------------------------------------------------------
//expose the routes to our app with module.exports
//-----------------------------------------------------------------------------------------------
module.exports = router; 
