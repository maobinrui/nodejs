/*
* @Author: Marte
* @Date:   2018-03-08 09:23:50
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-08 15:05:11
*/

'use strict';

var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
router.get('/',function(req,res){
    res.render('register', { title: 'register' });
})


router.post('/',function(req,res){
    // req.body
    // console.log(req.body);
    UserModel.create({
        email:req.body.email,
        name:req.body.username,
        password:req.body.password
    },function(error,info){
        if(!error){
            res.redirect("/");
        }
    })
})
module.exports = router;
