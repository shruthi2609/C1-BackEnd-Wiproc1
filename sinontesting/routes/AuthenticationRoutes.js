const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const UserModel=require("../models/UsersModel")
router.post("/signup",async (req,res)=>{
    const data=req.body
    if(data.role==="admin"||data.roles==="trainer"||data.roles==="trainee")
    {
  /*  const salt=await bcrypt.genSalt(4)
    console.log(salt)
    const hashedpassword=await bcrypt.hash(data.password,salt)
    console.log(hashedpassword)*/
    const user=await UserModel.findOne({email:data.email}
    )
    if(user){
      res.status(400).send({msg:"email exists already",status:false})
    }
    else{
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
  }
}
else{
  res.send("role is not supported")
}
})

router.post("/signin",async (req,res)=>{
  const data=req.body
  try{
  const user=await UserModel.findOne({email:data.email})
  if(user){
  const comparison=await bcrypt.compare(data.password,user.password)
  if(comparison){
    res.status(200).send({msg:"login successfull",status:true})
  }
  else{
    res.status(404).send({msg:"login is not successfull , please check your password",status:false})
  }
  }
  else{
    res.status(404).send({msg:"email does not exists, please check your email",status:false})
  }
  }
  catch(err){
    res.status(404).send(err)
  } 
})
module.exports=router