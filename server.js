/**
 * Created by guillermo on 07/05/2014.
 */
var mongoose = require("mongoose");
var express = require("express");

mongoose.connect('mongodb://localhost', function(err) {
    if (err) throw err;
    console.log('connected');
    var app = express();
    app.get('/', function(req, res) {
        res.send(200, 'hello mongoose blog');
    });
    app.listen(3000, function() {
        console.log('Listening on port 3000');
    });
});