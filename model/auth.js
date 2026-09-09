var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var unused=0;
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = $1 AND password = $2";

    return db.one(q, [username, password]);
}

module.exports = do_auth;
