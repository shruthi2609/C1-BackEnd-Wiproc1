const express=require("express")
const server=express()
const cookieParser=require("cookie-parser")
server.use(cookieParser())
const bp=require("body-parser")
const jsonparser=bp.json()
server.use(bp.json())
const cors=require("cors")
const corsOptions = {
    credentials: true,
    
  };
server.use(cors(corsOptions));
server.get("/signup",(req,res)=>{
    res.cookie('userdetails','someadded',{maxAge:900000,httpOnly:true})
    res.send("signup successfully")
})

server.get("/",(req,res)=>{
    console.log(req.cookies['userdetails'])
    res.send("home page")
})

server.listen(3001,()=>console.log("started"))