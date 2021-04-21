let express = require("express");
let router = express.Router();
let Mobile = require("../model/Mobile");

router.get('/', async (req,res)=>{
    try{
        let updatedMobile = await Mobile.find()
        res.status(200).json(updatedMobile)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/upload', async (req, res)=>{
    try{
        let newMobiles = {mobilename:req.body.name, price:req.body.price};
        let mobiles = Mobile(newMobiles)
        let response = await mobiles.save()
        res.status(200).json({msg:"posted successfully"})
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router