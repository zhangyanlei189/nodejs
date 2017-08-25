var express = require('express');
var router = express.Router();
console.log("user");
/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.render("user",{title:"员工"});
});

module.exports = router;
