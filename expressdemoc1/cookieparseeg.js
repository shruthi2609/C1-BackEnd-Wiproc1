const express=require("express")
const server=express()
const cookieParser=require("cookie-parser")
server.use(cookieParser())
const bp=require("body-parser")
const jsonparser=bp.json()
server.use(bp.json())

server.post("/signup",(req,res)=>{
    const value=req.body.uname
    res.cookie('userdetails','someadded',{maxAge:900000})
    res.send("signup successfully")
})

server.get("/",(req,res)=>{
    console.log(req.cookies['userdetails'])
    res.send("home page")
})

server.listen(3001,()=>console.log("started"))