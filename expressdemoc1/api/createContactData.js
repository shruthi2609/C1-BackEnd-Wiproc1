const express=require("express")
const router=express.Router()
const contactModel=require("../models/mongooseeg")
router.post("/createcontact",(req,res)=>{
    const data=req.body
contactModel.create({
    fname:data.fname,
    email:data.email,
    phone:data.phone,
    backlogs:data.backlogs
}).then((success)=>res.send("data created")).catch((err)=>{console.log(err)
res.send("failed")})
})
module.exports=router