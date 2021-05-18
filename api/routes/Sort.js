var express = require("express");
var router = express.Router();
var database = "VI-APP";
var collection = "scraped";

router.get("/*", function(req, res, next) {
    reqparams = router.stack
    reqtrackers = (reqparams[0].path.toString().split('/'))[1].split(',')

    GetQuery(reqtrackers, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});

function GetQuery(reqtrackers, cb) {
    var i = 0;
    var costRatio = 0;
    var stocksandData = []

    //Build the array
    reqtrackers.map((Symbol, count) => {
        var regex = new RegExp("^[a-zA-Z0-9.]+$");
        if(!regex.test(Symbol)){
            stocksandData.push({"tracker": Symbol, "percentageDiff": 0, "data": { longName: "Failed Input Validation, Check the Tracker Requested" }});
            i++
        }
        else{
            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";
    
            MongoClient.connect(url, function(err, db) {
                var dbo = db.db(database);
                dbo.collection(collection).findOne({Tracker: Symbol}, function(err, data) {
                    if(err) throw err;
                    try{
                        if(data !== null){
                            costRatio = (((((1+(data.data.growthRate))** 5) * data.data.forwardEps * data.data.forwardPE)*0.5)/data.data.regularMarketPrice)
                            stocksandData.push({"tracker": Symbol, "percentageDiff": costRatio, "data": data.data})
                            i++
                        }
                        else{ i++ }
                    }
                    catch{
                        stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": "{ \"longName\": \"Failed to Parse JSON String\" }"})
                        i++
                    }
                
                    // Return the array
                    if(reqtrackers.length === i){
                        sortedData = stocksandData.sort(compare);
                        cb(err, sortedData)
                    }
                });
            });
        }
    });
}

//Comparison function for sorting the array
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const diffA = a.percentageDiff
    const diffB = b.percentageDiff
  
    let comparison = 0;
    if (diffA > diffB) {
        comparison = 1;
    } else if (diffA < diffB) {
        comparison = -1;
    }
    return comparison;
}

module.exports = router;