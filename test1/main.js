/**
 * Created by zhangyanlei on 2017/5/9.
 */


/*
    //阻塞代码
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


*/






//非阻塞代码
var fs = require("fs");

fs.readFile('input1.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
