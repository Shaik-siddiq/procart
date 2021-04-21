const mongoose = require("mongoose")

let LaptopSchema = new mongoose.Schema({
    laptopname:{type: String, require:true},
    price:{type: Number, require:true}
})
let Laptop = mongoose.model("laptop",LaptopSchema)

module.exports = Laptop;