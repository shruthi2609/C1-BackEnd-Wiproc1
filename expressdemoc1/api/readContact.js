const express=require("express")
const router=express.Router()
const contactModel=require("../models/mongooseeg")
router.get("/getcontacts",async (req,res)=>{
const result=await contactModel.find()
res.send(result)
})

router.get("/getuser/:userid",async (req,res)=>{
    const reqid=req.params.userid
    const result=await contactModel.find({userid:reqid})
    res.send(result)
    })

module.exports=router