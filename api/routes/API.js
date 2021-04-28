var express = require("express");
var router = express.Router();

router.get("/*", function(req, res, next) {
    
    reqparams = router.stack
    reqtracker = (reqparams[0].path.toString().split("/"))[1]

    // Some Input Validation
    var regex = new RegExp("^[a-zA-Z.]+$");
    if(!regex.test(reqtracker)){
        res.send(JSON.parse("{ \"longName\": \"Failed Input Validation\" }"));
    }
    else{
        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['../yfinance/yfinance.py', reqtracker]);
    
        pyprog.stdout.on('data', function(data) {
            var formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek'));
            
            //JSON Check with RegEX - Adds warning to Stocks name if there is an error
            if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                res.send(JSON.parse(formattedJSON));
            }
            else{
                res.send(JSON.parse("{ \"longName\": \"JSON Formatting Failure\" }"));
            }
        });
    }
});

module.exports = router;