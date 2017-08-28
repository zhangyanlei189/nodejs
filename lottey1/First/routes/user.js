var express = require('express');
var router = express.Router();
var userModel = require("../model/user");
var uM = new userModel();
/* GET users listing. */

//员工列表渲染
router.get('/uIndex', function(req, res, next) {
  uM.list(function(ret){
    Promise.all([ret]).then(function(){//由于nodejs的异步操作，所以使用延迟渲染
      res.render("user",{title:"员工",data:ret.data});
    });
  });
});
//新增员工
router.post("/uAdd",function(req,res,next){
  var params = req.body;
  uM.add(params.uNo,params.uName,function(result){
    res.send(result);
  });
});

//修改员工
router.post("/uEdit/:id",function(req,res,next){
  var params = {id:req["params"]["id"],name:req["body"]["name"],no:req["body"]["no"]};
  uM.edit(params,function(ret){
    Promise.all([ret]).then(function(ret){//由于nodejs的异步操作，所以使用延迟渲染
      res.send(ret[0]);
    });
  });
});
//删除员工
router.get("/uDel/:id",function(req,res,next){
  var id = req["params"]["id"];
  uM.del(id,function(ret){
    Promise.all([ret]).then(function(ret){//由于nodejs的异步操作，所以使用延迟渲染
      res.send(ret[0]);
    });
  });
});

module.exports = router;
