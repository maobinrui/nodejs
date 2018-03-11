/*
* @Author: Marte
* @Date:   2018-03-09 20:11:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-11 19:08:56
*/

'use strict';
var express = require('express');
var router = express.Router();

var Diary = require('../model/diary');
router.get("/",function(req,res){
    if(req.session.kerwin){
        res.render('writing',{isnew:true});
    }else{
        res.redirect("/journal");
    }

})
router.post("/",function(req,res){
    Diary.create({
        author:req.session.kerwin.name,
        title:req.body.title,
        content:req.body.content
    },function(error,info){
        if(!error){
            res.redirect("/journal");
        }

    })
})


router.get("/del/:id",function(req,res){

    Diary.findByIdAndRemove(req.params.id,function(error,info){
        console.log(111);
        if (!error){
            console.log(222);
            // res.json({})
            res.redirect("/journal");
        }

    })
})




router.get("/update/:id",function(req,res){
    Diary.find({
                _id:req.params.id
            },function(error,info){
                if(!error){
                    // console.log(info);
                    res.render("writing",{isnew:false,info:info[0]});
                }
            })
})

router.post("/update",function(req,res){

    console.log("update post",req.body);

    Diary.findByIdAndUpdate(req.body.id,{$set:{
        title:req.body.title,
        content:req.body.content
    }},function(error,info){
        if(!error){
            res.redirect("/journal");
        }
    })
})


module.exports= router;