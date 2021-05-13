const schedule = require('node-schedule');

var express = require("express");
const { Console } = require('console');
var router = express.Router();
var database = "VI-APP"

// Used to update the Cron Jobs (Update this to get and set jobs from the Document DB)
router.get("/update", function(req, res, next) {
    reqparams = router.stack

    const job = schedule.scheduleJob('42 * * * *', function(){
        console.log('The answer to life, the universe, and everything!');
        // Scrape a Segment
        // Do DB Updates and Writes
    });
    res.send("Updated Jobs")
      
});

//Call the API to Run a Manual Scrape
router.get("/scrape", function(req, res, next) {
    reqparams = router.stack

    res.send("Running Scrape")
    
    items = loadfromDB({"Name": "EntireASX"}, "stocklists", database)
    
});

async function iterateTrackers(stocks) {

    var stocklist = stocks[0].trackers
    let sleep = require('util').promisify(setTimeout);
    var count = 1;
    for(i = 0; stocklist.length >= i; i= i+8 ){
        stocksgroup = [stocklist[i],stocklist[i+1],stocklist[i+2],stocklist[i+3],stocklist[i+4],stocklist[i+5],stocklist[i+6],stocklist[i+7]]
        await sleep(15000).then(stocksgroup.map((tracker) => scrapedata(tracker)))
        console.log(stocksgroup)
    }
    
}

function scrapedata(tracker) {

    console.log("Scraping: " + tracker);
    
    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['../yfinance/yfinance.py', tracker]);

    pyprog.stdout.on('data', function(data) {
        var formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek').replace(/\"}\s/g, '\",'));
        if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            try{
                dataObject = JSON.parse(formattedJSON)
                dataObject = {
                    tracker: tracker,
                    longName: dataObject.longName,
                    earningsQuarterlyGrowth: dataObject.earningsQuarterlyGrowth,
                    fiveYearAvgDividendYield: dataObject.fiveYearAvgDividendYield,
                    longBusinessSummary: dataObject.longBusinessSummary,
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
                console.log("Attempting to Save... " +tracker);
                savetoDB( {Tracker: tracker, Time: Date.now().toString(), data: dataObject}, "scraped", database);
            }
            catch{
                console.log("Error Occurred: " + tracker);
                savetoDB( {Name: tracker, error: "Error Occurred"}, "scrape-failures", database);
            }
        }
        else{
            console.log("Failed Validation: " + tracker);
            savetoDB( {Name: tracker, error: "Failed Validation"}, "scrape-failures", database);
        }
    });
}

function savetoDB(data, collection, database) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var myobj = data;
        dbo.collection(collection).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function loadfromDB(query, collection, database) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var items

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        dbo.collection(collection, function (err, dbcollection) {
                dbcollection.find(query).toArray(function(err, items) {
                if(err) throw err;
                console.log(items);
                iterateTrackers(items);
            });
            
        });             
    });
}

module.exports = router;