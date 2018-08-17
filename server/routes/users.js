var express = require('express');
var router = express.Router();

var User = require('./../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/*登录*/
router.post('/login', function (req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function (err, doc) {
    if (err) {
      res.join({
        status: '1',
        msg: err.message
      })
    } else {
      if(doc){
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        // req.session.user = doc;
        res.json({
          status:'0',
          msg:'',
          result:{
            /*doc._doc是什么鬼？*/
            userName:doc._doc.userName
          }
        })
      }
    }
  })
});

/*登出*/
router.post('/logout',function (req,res,next) {
  res.cookie('userId','',{
    path:'/',
    maxAge:-1
  });
  res.json({
    status:'0',
    msg:'',
    result:''
  })
})

module.exports = router;
