var express = require("express");
var router = express.Router();
var database = "VI-APP";
var collection = "scraped";

router.get('/*', function(req, res, next) {
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split("/"))[1]

    GetQuery(reqtracker, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});
  
function GetQuery(reqtracker, cb) {
    var regex = new RegExp("^[a-zA-Z0-9.]+$");
    if(!regex.test(reqtracker)){
        cb(err, { longName: "Failed Input Validation, Check the Tracker Requested" });
    }
    else{

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db) {
            var dbo = db.db(database);
            dbo.collection(collection).findOne({Tracker: reqtracker}, function(err, data) {
                if(err) throw err;
            
                if(data === null){
                    cb(err, {longName: "Data Not Available: Check the Tracker has been scraped to the DB"});
                }
                else{
                    if(data.data === "undefined"){
                        cb(err, { longName: "No item listed in Database" });
                    }
                    else{
                        cb(err, data.data);
                    }
                } 
            });             
        });
    }
}

module.exports = router;
