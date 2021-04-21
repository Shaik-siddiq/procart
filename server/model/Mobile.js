let mongoose = require("mongoose");
let mobiledata = new mongoose.Schema({
    mobilename:{type:String, require:true},
    price:{type:Number, require:true}
});
let Mobile = mongoose.model('mobile', mobiledata);
module.exports = Mobile;