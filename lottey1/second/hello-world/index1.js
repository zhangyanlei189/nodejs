/**
 * Created by zhangyanlei on 2017/8/25.
 */
//多个路由
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});
app.get('/customer', function(req, res){
    res.send('customer page');
});
app.get('/admin', function(req, res){
    res.send('admin page');
});

app.listen(3000);
