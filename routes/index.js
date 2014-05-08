/**
 * Created by guillermo on 07/05/2014.
 */
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home.jade');
    });
};