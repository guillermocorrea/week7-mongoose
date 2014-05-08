/**
 * Created by guillermo on 07/05/2014.
 */
var morgan         = require('morgan');
var cookieParser     = require('cookie-parser');
var bodyParser     = require('body-parser');
var sessionExpress = require('express-session');

module.exports = function (app) {
    var env = process.env.NODE_ENV || 'development';
    if ('development' == env) {
        app.use(morgan);
    }

    app.use(cookieParser);
    app.use(sessionExpress({secret: 'building a blog'}));
    app.use(bodyParser);

    // expose session to views
    app.use(function (req, res, nex) {
       res.locals.session = req.session;
        next();
    });
};