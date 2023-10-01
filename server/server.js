const express = require('express');
const bodyParser = require('body-parser');

const json2csv = require('json2csv').parse;
const fs = require('fs');

var OLMModel = require("./olmmodel");

const port = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

/** 
 * Receives log data and saves it to a local CSV file
*/
app.post('/log', function(req, res, next) {
    const data = req.body; // log json data
    console.log(data);

    // Add to CSV file
    const fields = ["DateTime", "Activity", "Section", "QuestionID", "GivenAnswer", "Result"];
    var csv = '';

    const filename = '../ScaffoldingLoggedData.csv';
    fs.stat(filename, function(err, stat) {
        // File exists
        if (err == null) {
            // JSON to CSV with NO headers
            csv = json2csv(data, {fields, header: false}) + "\r\n"; // add newline
        } else {
            // JSON to CSV with headers
            csv = json2csv(data, {fields}) + "\r\n";
        }
        // Append to csv file, create file if doesn't exist
        fs.appendFile(filename, csv, function(err) {
            if (err) { console.log(err) };
        });
    });

    res.send({msg: "Data received!"});
});

/** 
 * Sends the current complete state of the OLM
*/
app.get('/olm', function(req, res, next) {
    res.json(OLMModel.getFullOLM());
});

/** 
 * Receives an update to the OLM
*/
app.post('/olm', function(req, res, next) {
    console.log(req.body);
    var updateResult = OLMModel.updateOLM(req.body);
    res.json(updateResult);
});

app.get('/', function(req, res, next) {
    res.send("<p>Server is ready for log post requests at http://localhost:3000/log and OLM get and post requests at http://localhost:3000/olm</p>");
});

app.listen(port, function() {
    console.log("Server is listening on port 3000!");
});

module.exports = app;
