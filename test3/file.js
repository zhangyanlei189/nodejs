/**
 * Created by zhangyanlei on 2017/5/10.
 */

var fs = require("fs");

/*
// 异步读取
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");*/


/*

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
});*/


/*

//读取文件


var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});*/




/*

//截取文件

var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("截取10字节后的文件内容。");

    // 截取文件
    fs.ftruncate(fd, 20, function(err){
        if (err){
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        });
    });
});*/



/*

//删除文件



fs.unlink("input.txt", function(){

})
*/


var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("../test2/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});



































