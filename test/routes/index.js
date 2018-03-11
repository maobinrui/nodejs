var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.kerwin){
        res.render('index',{who:req.session.kerwin.name});
    }else{

        res.redirect("/login");
    }

  res.render('index');
});

router.get("/logout",function(req,res){  //退出登录
    req.session.destroy(function(error){
        if(!error){
            res.redirect("/login");
        }
    })
})

module.exports = router;
