const express=require("express")
const server=express()

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
   
    res.send(JSON.stringify(userdata))

})

server.all("*",(req,res)=>{
    res.status(400).send("page not found")
})

const app=server.listen(3001,()=>{
  // console.log(app.address().address)
    console.log(`server started at ${app.address().port}`)
})
