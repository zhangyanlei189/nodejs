var express = require('express');
var router = express.Router();
var IndexModel = require("../model/index");
var indexModel = new IndexModel();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/index/index");
});
router.get('/index', function(req, res, next) {
  indexModel.list(function(ret){
    Promise.all([ret]).then(function(){//由于nodejs的异步操作，所以使用延迟渲染
      if(ret.flag){
        res.render('index', { title: '抽奖',data:ret.data});
      }else{
        res.render('index', { title: '抽奖',data:[]});
      }
    });

  });

});
router.get("/lottey",function(req, res, next){
  indexModel.lottey(function(ret){
    Promise.all([ret]).then(function() {
      indexModel.setRate(ret["data"],function(param){
        Promise.all([param]).then(function() {
          console.log(param);
          if(param.flag){
            res.send({flag:param.flag,data:ret["data"]});
          }else{
            res.send(param);
          }
        });
      });
    });
  });
});
module.exports = router;
