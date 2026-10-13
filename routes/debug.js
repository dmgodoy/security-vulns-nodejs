var express = require('express');
var child_process = require('child_process');
var router = express.Router();

// Hardcoded credential (Sonar S6418/S2068)
var ADMIN_API_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";

// Command injection (S2076): user input flows into a shell command
router.get('/debug/ping', function(req, res) {
    child_process.exec('ping -c 1 ' + req.query.host, function(err, stdout) {
        res.send(stdout);
    });
});

// Code injection (S1523): user input passed to eval
router.get('/debug/calc', function(req, res) {
    res.send(String(eval(req.query.expr)));
});

module.exports = router;
