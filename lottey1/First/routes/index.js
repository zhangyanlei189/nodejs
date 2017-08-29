var express = require('express');
var router = express.Router();
var IndexModel = require("../model/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/index");
});
router.get('/index', function(req, res, next) {
  var indexModel = new IndexModel();
  indexModel.list(function(ret){
    console.log(ret);
    console.log(222222);
    Promise.all([ret]).then(function(){//由于nodejs的异步操作，所以使用延迟渲染
      if(ret.flag){
        console.log(ret);
        console.log("****************55555555555555");
        res.render('index', { title: '抽奖',data:ret.data});
      }else{
        res.render('index', { title: '抽奖',data:[]});
      }
    });

  });

});
module.exports = router;
