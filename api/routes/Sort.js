var express = require("express");
var router = express.Router();
var formattedJSON = "JSON";
var count = 0;
var stocksandData = []

router.get("/*", function(req, res, next) {
    
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split('/'))[1].split(',')
    //Build the array
    reqtracker.map((Symbol, count) => {
        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['../yfinance/yfinance.py', Symbol]);
        
        console.log(Symbol)
        console.log(count)

        pyprog.stdout.on('data', function(data) {
            formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek').replace(/\"}\s/g, '\",'));
            
            console.log(formattedJSON)

            if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                try{
                    stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": formattedJSON})
                    console.log("tried")
                }
                catch{
                    stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": "{ \"longName\": \"Failed to Parse JSON String\" }"})
                    console.log("catched")
                }
            }
            else{
                stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": "{ \"longName\": \"Failed Input Validation, Check the Tracker Requested\" }"})
            }

            if((reqtracker.length - 1) === count){
                res.send(stocksandData)
            }
        });
    });

    //Sort the array


    //Return the array

});

module.exports = router;