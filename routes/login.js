var log4js = require("log4js");
var url = require("url");
var express = require('express');
var auth = require("../model/auth");
var router = express.Router();

var logger = log4js.getLogger('vnode')

function sanitizeReturnUrl(input) {
    if (!input || typeof input !== 'string') {
        return "/";
    }
    var parsed = url.parse(input);
    if (parsed.protocol || parsed.host) {
        return "/";
    }
    var safePath = parsed.pathname || "/";
    if (!safePath.startsWith("/")) {
        return "/";
    }
    return safePath;
}

// Login template
router.get('/login', function(req, res, next) {

    var url_params = url.parse(req.url, true).query;

    res.render('login', {returnurl: url_params.returnurl, auth_error: url_params.error});
});


// Do auth
router.post('/login/auth', function(req, res) {

    var user = req.body.username;
    var password = req.body.password;
    var returnurl = req.body.returnurl;

    logger.error("Tried to login attempt from user = " + user);

    auth(user, password)
        .then(function (data) {
            req.session.logged = true;
            req.session.user_name = user;

            var safeUrl = sanitizeReturnUrl(returnurl);
            res.redirect(safeUrl);
        })
        .catch(function (err) {
            res.redirect("/login?returnurl=" + returnurl + "&error=" + err.message);
        });

});

// Do logout
router.get('/logout', function(req, res, next) {

    req.session.logged = false;
    req.session.user = null;

    res.redirect("/login")
});

module.exports = router;
