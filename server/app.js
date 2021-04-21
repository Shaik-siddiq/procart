const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRouter')
const laptopRouter = require("./Routes/LaptopRouter")
const watchesRouter = require("./Routes/WatchesRouter")
const mobileRouter = require("./Routes/MobileRouter")
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path:"./config/config.env"});

app.use(morgan("dev"));
app.get("/", (req, res)=>{
    res.send(`<h1> Cart Application </h1>`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/product", productRouter);
app.use("/laptop", laptopRouter);
app.use("/watches",watchesRouter);
app.use("/mobile", mobileRouter)

app.listen(process.env.PORT,(err)=>{
    if (err) throw err;
    console.log(`server Running on Port Number ${process.env.PORT}`)
});
mongoose.connect(process.env.DATABASEURL,{
     useNewUrlParser: true,
     useUnifiedTopology: true })
 .then(()=>{
     console.log('mongodb connection successfull')
 })
 .catch((err)=>{
    console.log(err)
 })