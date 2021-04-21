let express = require("express")
let router = express.Router();
let Watches = require('../model/Watches')

router.get('/', async(req, res)=>{
    try{
        let watchesupdate = await Watches.find();
        res.status(200).json(watchesupdate)
    }
    catch(err){
        console.log(err)
    }
})
router.post('/upload', async (req, res)=>{
    try{
        let newwatches = {watchname:req.body.name, price:req.body.price};
        let watches = Watches(newwatches);
        let response = await watches.save();
        res.status(200).json({msg:"posted successfully"})

    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;
