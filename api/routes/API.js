var express = require("express");
var router = express.Router();

router.get("/*", function(req, res, next) {
    
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split("/"))[1]

    // Some Input Validation
    var regex = new RegExp("^[a-zA-Z0-9.]+$");
    if(!regex.test(reqtracker)){
        res.send(JSON.parse("{ \"longName\": \"Failed Input Validation, Check the Tracker Requested\" }"));
    }
    else{
        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['../yfinance/yfinance.py', reqtracker]);
    
        pyprog.stdout.on('data', function(data) {
            var formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek').replace(/\"}\s/g, '\",'));
            if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                try{
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
                    res.send(dataObject);
                }
                catch{}
            }
            else{
                res.send(JSON.parse("{\"longName\": \"JSON Fomatting Failure\"}"));
            }
        });
    }
});

module.exports = router;