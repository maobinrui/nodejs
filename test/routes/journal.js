/*
* @Author: Marte
* @Date:   2018-03-09 19:58:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-10 16:32:36
*/

'use strict';


var express = require('express');
var router = express.Router();
var Diary = require('../model/diary');
router.get("/",function(req,res,next){
    if(req.session.kerwin){
        Diary.find({},function(error,info){
            if(!error){
                res.render("journal",{ who:req.session.kerwin.name,list:info });
            }
        })
        // res.render('journal',{who:req.session.kerwin.name});
    }else{

        res.redirect("/login");
    }
    // res.render("journal");
})






module.exports=router;

