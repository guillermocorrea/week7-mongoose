/**
 * Created by guillermo on 07/05/2014.
 */
var mongoose = require("mongoose");
var express = require("express");
var routes = require('./routes');

mongoose.connect('mongodb://localhost', function(err) {
    if (err) throw err;
    console.log('connected');
    var app = express();
    routes(app);

    app.listen(3000, function() {
        console.log('Listening on port 3000');
    });
});