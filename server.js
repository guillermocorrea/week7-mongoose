/**
 * Created by guillermo on 07/05/2014.
 */
var mongoose = require("mongoose");
var express = require("express");
var routes = require('./routes');
var middleware = require('./middleware');

mongoose.connect('mongodb://localhost', function(err) {
    if (err) throw err;
    console.log('connected');
    var app = express();
    middleware(app);
    routes(app);

    app.listen(3000, function() {
        console.log('Listening on port 3000');
    });
});