/**
 * Created by zhangyanlei on 2017/5/10.
 */
var server = require("./server");
var router = require("./router");
server.start(router.route);