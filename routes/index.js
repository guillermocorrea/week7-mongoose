/**
 * Created by guillermo on 07/05/2014.
 */
var errors = require('./errors');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home.jade');
    });

    errors(app);
};