const express=require("express")
const server=express()
const path=require("path")
const data=require("./data")
const bp=require("body-parser")
const jsonparser=bp.json() //apply on second arg of any post or put or patch method
server.use(bp.json())
server.use("/index",express.static(path.join(__dirname,"public")))

server.get("/employeeDetails",(req,res)=>{
res.send(JSON.stringify(data))
})

server.post("/employeeDetails",(req,res)=>{
    const reqdata=req.body
    
    data.push(reqdata)
    res.send("created")
})

server.get("/",(req,res)=>{
   res.send("dummy")
})
server.listen(3001,()=>console.log("server started"))