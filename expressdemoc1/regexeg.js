const express=require("express")
const server=express()

server.get(/\/get/,(req,res)=>{
    res.send("first route")
})

server.get(/\/user|users|member|members/,(req,res)=>{
    res.send("user data is fetched")
})

server.get(/\/[a-zA-Z&]{3,6}car$/,(req,res)=>{
    res.send("car routes is executed")
})

server.get(/\/*car$/,(req,res)=>{
    res.send("start and end")
})

server.get(/\/[a-zA-Z0-9]*@[a-zA-Z]+.[a-zA-Z]{2,3}$/,(req,res)=>{
    res.send("valid email")
})

server.get("/cake/:cakename([a-z]{4,7})",(req,res)=>{
    res.send(req.params.cakename)
})

server.get("/country/:countryname([a-z]{3,})/:pincode([0-9]{6})",(req,res)=>{
    res.send(req.params.countryname)
})

server.listen(3001,()=>console.log("server started"))