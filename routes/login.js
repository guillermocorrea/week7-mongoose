/**
 * Created by guillermo on 07/05/2014.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

var cleanString = require('../helpers/cleanString');
var hash = require('../helpers/hash');
var crypto = require('crypto');

module.exports = function(app) {
    app.get('/login', function(req, res) {
        res.render('login.jade');
    });
    app.get('/signup', function(req, res) {
        res.render('signup.jade');
    });
    // create new account
    app.post('/signup', function(req, res, next) {
        var email = cleanString(req.param('email'));
        var pass = cleanString(req.param('pass'));
        if (!(email && pass)) {
            return invalid();
        }

        User.findById(email, function(err, user) {
            if (err) return next(err);
            if (user) {
                return res.render('signup.jade', {exists: true});
            }

            crypto.randomBytes(16, function(err, bytes) {
                if (err) return next(err);
                var user = {_id: email};
                user.salt = bytes.toString('utf8');
                user.hash = hash(pass, user.salt);
            });
        });

        function invalid() {
            return res.render('signup.jade', {invalid: true});
        }
    });
};