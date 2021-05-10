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
                        dataObject = JSON.parse(formattedJSON)
                        dataObject = {
                            earningsQuarterlyGrowth: dataObject.earningsQuarterlyGrowth,
                            fiveYearAvgDividendYield: dataObject.fiveYearAvgDividendYield,
                            longBusinessSummary: dataObject.longBusinessSummary,
                            longName: dataObject.longName,
                            trailingPE: dataObject.trailingPE,
                            forwardPE: dataObject.forwardPE,
                            pegRatio: dataObject.pegRatio,
                            trailingEps: dataObject.trailingEps,
                            forwardEps: dataObject.forwardEps,
                            logo_url: dataObject.logo_url,
                            industry: dataObject.industry,
                            sector: dataObject.sector,
                            country: dataObject.country,
                            address: dataObject.address,
                            state: dataObject.state,
                            phone: dataObject.phone,
                            website: dataObject.website,
                            regularMarketPrice: dataObject.regularMarketPrice,
                            regularMarketDayHigh: dataObject.regularMarketDayHigh,
                            open: dataObject.open,
                            previousClose: dataObject.previousClose,
                            debtToEquity: dataObject.analysis.financialData.debtToEquity,
                            returnOnEquity: dataObject.analysis.financialData.returnOnEquity,
                            growthRate: dataObject.analysis.earningsTrend.trend[4].growth,
                            rec0mperiod: dataObject.analysis.recommendationTrend.trend[0].period,
                            rec0mstrongbuy: dataObject.analysis.recommendationTrend.trend[0].strongBuy,
                            rec0mbuy: dataObject.analysis.recommendationTrend.trend[0].buy,
                            rec0mhold: dataObject.analysis.recommendationTrend.trend[0].hold,
                            rec0msell: dataObject.analysis.recommendationTrend.trend[0].sell,
                            rec0mstrongsell: dataObject.analysis.recommendationTrend.trend[0].sell,
                            rec1mperiod: dataObject.analysis.recommendationTrend.trend[1].period,
                            rec1mstrongbuy: dataObject.analysis.recommendationTrend.trend[1].strongBuy,
                            rec1mbuy: dataObject.analysis.recommendationTrend.trend[1].buy ,
                            rec1mhold: dataObject.analysis.recommendationTrend.trend[1].hold ,
                            rec1msell: dataObject.analysis.recommendationTrend.trend[1].sell ,
                            rec1mstrongsell: dataObject.analysis.recommendationTrend.trend[1].sell ,
                            rec2mperiod: dataObject.analysis.recommendationTrend.trend[2].period ,
                            rec2mstrongbuy: dataObject.analysis.recommendationTrend.trend[2].strongBuy ,
                            rec2mbuy: dataObject.analysis.recommendationTrend.trend[2].buy ,
                            rec2mhold: dataObject.analysis.recommendationTrend.trend[2].hold ,
                            rec2msell: dataObject.analysis.recommendationTrend.trend[2].sell ,
                            rec2mstrongsell: dataObject.analysis.recommendationTrend.trend[2].sell ,
                            rec3mperiod: dataObject.analysis.recommendationTrend.trend[3].period ,
                            rec3mstrongbuy: dataObject.analysis.recommendationTrend.trend[3].strongBuy ,
                            rec3mbuy: dataObject.analysis.recommendationTrend.trend[3].buy ,
                            rec3mhold: dataObject.analysis.recommendationTrend.trend[3].hold ,
                            rec3msell: dataObject.analysis.recommendationTrend.trend[3].sell,
                            rec3mstrongsell: dataObject.analysis.recommendationTrend.trend[3].sell,
                        }
                    }
                    stocksandData.push({"tracker": Symbol, "percentageDiff": costRatio,"data": dataObject})
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