const express=require("express")
const server=express()
const bp=require("body-parser")
const jsonparser=bp.json() //apply on second arg of any post or put or patch method
server.use(bp.json()) // apply on all the post req-  use  method
server.use(bp.text())
//req.url===="/home" req.method===get
server.get("/home",(req,res)=>{
console.log(req)
res.status(200).send("hello express js")
})

server.get("/",(req,res)=>{
    console.log(req)
    res.status(200).send("home page")
})

server.get("/contact",(req,res)=>{
    const userdata={
        fname:"john",
        email:"john@gmail.com"
    }
    //res.status(200).send(JSON.stringify(userdata))
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(userdata))
})


//post request
server.post("/contact",(req,res)=>{
    const reqdata=req.body
    console.log(reqdata)
    res.send("set contact")
})

server.post("/setdetails",(req,res)=>{
    console.log(req.body)
    res.send("set details")
})

server.all("*",(req,res)=>{
    res.status(400).send("page not found")
})

const app=server.listen(3001,()=>{
  // console.log(app.address().address)
    console.log(`server started at ${app.address().port}`)
})
