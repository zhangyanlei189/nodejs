/**
 * Created by zhangyanlei on 2017/8/25.
 */
var express = require('express');
var app = express();
var routes = require('./routes')(app);
app.listen(3000);