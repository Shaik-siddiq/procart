const express = require('express')
const router = express.Router()
const Product = require('../model/Product')

router.get("/", async(req, res)=>{
    try{
        let productdata = await Product.find()
        res.status(200).json(productdata)
    }
    catch(err){
        res.status(500).json({msg:err})
        console.log(err)
    }
})
router.post("/upload",async(req,res)=>{
    try{
        let newproduct = {productname:req.body.name, price:req.body.price}
        let product = Product(newproduct)
        console.log(product)
        let response = await product.save();
        res.status(200).json({msg:'posted sucessfully'})
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;