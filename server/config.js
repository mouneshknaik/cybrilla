var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ecart',
    max:20
});

exports.pool = pool;