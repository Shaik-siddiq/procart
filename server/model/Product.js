const mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
    productname:{type: String, require:true},
    price:{type: Number, require:true}
})
let Product = mongoose.model("product",ProductSchema);
module.exports = Product
