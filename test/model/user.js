/*
* @Author: Marte
* @Date:   2018-03-08 14:13:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-08 14:33:31
*/

'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var obj = {
    email:String,
    name:String,
    password:String
}

var model = mongoose.model("user",new Schema(obj));

module.exports = model;
