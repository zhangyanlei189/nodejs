/**
 * Created by zhangyanlei on 2017/5/12.
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'world',
});

connection.connect();

var  sql = 'SELECT * FROM country where name = "china"';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});