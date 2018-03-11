/*
* @Author: Marte
* @Date:   2018-03-08 15:14:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-09 13:36:52
*/

'use strict';


var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
router.get('/',function(req,res){
    res.render('login', { isshowerror:false });
})


router.post('/',function(req,res){
    UserModel.find({
        email:req.body.email,
        password:req.body.password
    },function(error,info){
        if(!error){
            if(info.length>0){
                req.session.kerwin = info[0];
                res.redirect("/");
            }else{
                res.render("login",{isshowerror:true });
            }
        }
    })


})
module.exports = router;
