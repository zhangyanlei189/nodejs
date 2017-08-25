/**
 * Created by zhangyanlei on 2017/5/12.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'city'
});

connection.connect();
module.exports = connection;