var express = require("express");
var router = express.Router();

router.get("/*", function(req, res, next) {

    var formattedJSON = "JSON";
    var i = 0;
    var costRatio = 0;
    var stocksandData = []
    
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split('/'))[1].split(',')
    //Build the array
    reqtracker.map((Symbol, count) => {
        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['../yfinance/yfinance.py', Symbol]);

        pyprog.stdout.on('data', function(data) {
            formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek').replace(/\"}\s/g, '\",'));

            if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                try{
                    if(typeof JSON.parse(formattedJSON).analysis !== "undefined"){
                        costRatio = (((((1+(JSON.parse(formattedJSON).analysis.earningsTrend.trend[4].growth))** 5) * JSON.parse(formattedJSON).forwardEps * JSON.parse(formattedJSON).forwardPE)*0.5)/JSON.parse(formattedJSON).regularMarketPrice)
                    }
                    stocksandData.push({"tracker": Symbol, "percentageDiff": costRatio,"data": formattedJSON})
                }
                catch{
                    stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": "{ \"longName\": \"Failed to Parse JSON String\" }"})
                    console.log("catched")
                }
                i++
            }
            else{
                stocksandData.push({"tracker": Symbol, "percentageDiff": 0,"data": "{ \"longName\": \"Failed Input Validation, Check the Tracker Requested\" }"})
                i++
            }
            

            // Return the array
            if(reqtracker.length === i){
                sortedData = stocksandData.sort(compare);
                res.send(sortedData)
            }
        });
    });
});

module.exports = router;


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