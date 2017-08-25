/**
 * Created by zhangyanlei on 2017/5/12.
 */

var fs = require("fs");

function getData(){
    var d;
    d =fs.readFileSync("data/user.json");
    return JSON.parse(d);
}

exports.index = function(req,res){
    console.log(getData());
    res.render("index",{"name":getData()});
};
exports.form = function(req,res){
    console.log(req);
    res.render("form");
};
exports.add = function(req,res){
    console.log(req.param);
}
