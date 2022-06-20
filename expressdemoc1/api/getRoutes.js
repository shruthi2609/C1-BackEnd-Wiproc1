const express=require("express")
const router=express.Router()

router.get("/search",(req,res)=>{
    res.send("dummy")
})

router.get("/country",(req,res)=>{
    res.send("country details found")
})

module.exports=router

