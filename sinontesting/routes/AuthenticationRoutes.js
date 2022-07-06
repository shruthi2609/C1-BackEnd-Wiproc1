const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const UserModel=require("../models/UsersModel")
router.post("/signup",async (req,res)=>{
    const data=req.body
  /*  const salt=await bcrypt.genSalt(4)
    console.log(salt)
    const hashedpassword=await bcrypt.hash(data.password,salt)
    console.log(hashedpassword)*/
    const hashedpassword=await bcrypt.hash(data.password,4)
    console.log(hashedpassword)
    try{
      const result=  await UserModel.create({
        email:data.email,
        password:hashedpassword
      })
      res.status(201).send("signup successfull")
    }
    catch(err){
        res.status(404).send(err)
    }

})
module.exports=router