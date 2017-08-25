var express = require('express');
var router = express.Router();
var model = require("../model/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/index");
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: '抽奖' });
});
router.get('/user', function(req, res, next) {
  res.redirect("/user/user");
});
module.exports = router;
