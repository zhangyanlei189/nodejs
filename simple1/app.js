/**
 * Created by zhangyanlei on 2017/5/12.
 */
var express = require("express");
var routes = require("./routes");
var app = express();

app.set("view engine","ejs");    //默认的引擎被扩展使用
app.use(express.static(__dirname+"/static"));// 模板路径

app.get("/",routes.index);
app.get("/form",routes.form);
app.post("/add",routes.add);

app.listen("8081","127.0.0.1",function(){
    console.log("监听");
});