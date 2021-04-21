const express = require("express");
const router = express.Router();
const Laptop = require("../model/Laptop")

router.get('/',async (req,res)=>{
    try{
        let laptopdata = await Laptop.find()
        res.status(200).json(laptopdata)
    }
    catch(err){
        res.status(500).json({msg:err})
        console.log(err)
    }
})
router.post('/upload',async(req,res)=>{
    try{
        let newlaptop = {laptopname:req.body.name, price:req.body.price}
        let laptop =  Laptop(newlaptop)
        let response = await laptop.save()
        res.status(200).json({"msg":"posted sucessfully"})
    }
    catch(err){
        cosnole.log(err)
    }
})
module.exports = router;