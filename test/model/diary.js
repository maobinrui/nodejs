/*
* @Author: Marte
* @Date:   2018-03-09 21:35:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-10 17:24:36
*/

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var obj = {
    author:String,
    title:String,
    content:String,
    date: { type: Date, default: Date.now }
}

var model = mongoose.model("diary",new Schema(obj));

module.exports = model;