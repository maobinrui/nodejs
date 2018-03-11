/*
* @Author: Marte
* @Date:   2018-03-11 15:15:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-11 16:42:01
*/

'use strict';

var express = require('express');
var router = express.Router();
var Diary = require('../model/diary');

router.get("/:id",function(req,res){
    // console.log(req.params);
    //
    if(req.session.kerwin){
        Diary.find({

            _id:req.params.id
        },function(error,info){
            if(!error){
                // console.log(info);
                res.render("detail",{info:info[0]});
            }
        })



    }else{
        res.redirect("/login");
    }

})








module.exports =router;