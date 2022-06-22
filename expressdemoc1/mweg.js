const express=require("express")
const server=express()
const bp=require("body-parser")
const jsonparser=bp.json()
server.use(bp.json())
server.use(loggerfunction)
server.get("/",(req,res)=>{
    res.send("Home Page")
})

server.get("/service",(req,res)=>{
    res.send("servvices page")
})

server.post("/login",authorize,(req,res)=>{
res.send("succesfully loggedin")
})

function loggerfunction(req,res,next){
    console.log(`${new Date().toString()} - url : ${req.url}`)
    next()
}

function authorize(req,res,next){
  const data=req.body
  if(data.uname==="peter"&data.password==="admin123"){
    next()
    return 
  }
    res.send("invalid credentials")
  
}
server.listen(3001,()=>console.log("server started"))