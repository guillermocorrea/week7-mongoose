/**
 * Created by guillermo on 07/05/2014.
 */
module.exports = function(app) {
    // 404
    app.use(function(req, res, next) {
        res.status(404);

        if (req.accepts('html')) {
            return res.send("<h2>I´m sorry, I couldn´t find that page.</h2>");
        }

        if (req.accepts('json')) {
            return res.json({error: 'Not found'});
        }

        // default message
        res.type('text');
        res.send('Hmm, couldn´t find that page');
    });

    // 500
    app.use(function (err, req, res, next) {
       console.error('error at %s\n', req.url, err);
        res.send(500, "Oops, we blew it off");
    });
};