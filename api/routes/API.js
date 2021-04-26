var express = require("express");
var router = express.Router();

router.get("/*", function(req, res, next) {
    
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split("/"))[1]

    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['../yfinance/yfinance.py', reqtracker]);

    pyprog.stdout.on('data', function(data) {
        var formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1'));
        
        //JSON Check with RegEX - Adds warning to Stocks name if there is an error
        if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            res.send(JSON.parse(formattedJSON));
        }
        else{
            res.send(JSON.parse("{ \"longName\": \"JSON Formatting Failure\" }"));
        }
    });
});

router.get("/WES", function(req, res, next) {
    res.send( {
        "Symbol": "WES",
        "AssetType": "Common Stock",
        "Name": "Western Midstream Partners, LP",
        "Description": "Western Midstream Partners, LP, together with its subsidiaries, acquire, own, develop, and operate midstream assets primarily in the United States. It is involved in gathering, compressing, treating, processing, and transporting of natural gas; gathering, stabilizing, and transporting of condensate, natural gas liquids, and crude oil; and gathering and disposing of produced water. The company also buys and sells natural gas, NGLs, and condensate. Western Midstream Holdings, LLC operates as the general partner of the company. The company was formerly known as Western Gas Equity Partners, LP and changed its name to Western Midstream Partners, LP in February 2019. The company was founded in 2007 and is headquartered in The Woodlands, Texas. Western Midstream Partners, LP operates as a subsidiary of Occidental Petroleum Corporation.",
        "CIK": "1423902",
        "Exchange": "NYSE",
        "Currency": "USD",
        "Country": "USA",
        "Sector": "Energy",
        "Industry": "Oil & Gas Midstream",
        "Address": "9950 Woodloch Forest Drive, The Woodlands, TX, United States, 77380",
        "FullTimeEmployees": "1045",
        "FiscalYearEnd": "December",
        "LatestQuarter": "2020-12-31",
        "MarketCapitalization": "7939051520",
        "EBITDA": "1794590976",
        "PERatio": "16.2331",
        "PEGRatio": "5.48",
        "BookValue": "6.714",
        "DividendPerShare": "1.244",
        "DividendYield": "0.0651",
        "EPS": "1.184",
        "RevenuePerShareTTM": "6.366",
        "ProfitMargin": "0.1861",
        "OperatingMarginTTM": "0.4647",
        "ReturnOnAssetsTTM": "0.0666",
        "ReturnOnEquityTTM": "0.1656",
        "RevenueTTM": "2772592128",
        "GrossProfitTTM": "2003630000",
        "DilutedEPSTTM": "1.184",
        "QuarterlyEarningsGrowthYOY": "-0.002",
        "QuarterlyRevenueGrowthYOY": "-0.105",
        "AnalystTargetPrice": "21.87",
        "TrailingPE": "16.2331",
        "ForwardPE": "7.57",
        "PriceToSalesRatioTTM": "3.0146",
        "PriceToBookRatio": "2.8708",
        "EVToRevenue": "5.5314",
        "EVToEBITDA": "11.1094",
        "Beta": "3.8671",
        "52WeekHigh": "20.9",
        "52WeekLow": "5.7729",
        "50DayMovingAverage": "18.9289",
        "200DayMovingAverage": "14.6653",
        "SharesOutstanding": "413062016",
        "SharesFloat": "210069523",
        "SharesShort": "4488089",
        "SharesShortPriorMonth": "3337916",
        "ShortRatio": "1.7",
        "ShortPercentOutstanding": "0.01",
        "ShortPercentFloat": "0.0226",
        "PercentInsiders": "49.342",
        "PercentInstitutions": "38.946",
        "ForwardAnnualDividendRate": "1.24",
        "ForwardAnnualDividendYield": "0.0651",
        "PayoutRatio": "0.484",
        "DividendDate": "2021-02-12",
        "ExDividendDate": "2021-01-29",
        "LastSplitFactor": "10:9",
        "LastSplitDate": "2014-11-26"
    } );
});

module.exports = router;