const express=require("express")
const server=express()
const fs=require("fs")
const testcol=require("./models/dummymon")
server.get("/create",(req,res)=>{
fs.readFile("./data.json",(err,data)=>{
    const users=JSON.parse(data)
    console.log(users.contact)
    users.contact.push({
        fname:"peter",
        email:"peter@gmail.com"
    })
    fs.writeFile("./data.json",JSON.stringify(users),(err)=>{
        if(err){
            res.send("error")
        }
        else{
            res.send("write successfull")
        }
    })
})
})

server.get("/cr",(req,res)=>{
testcol.create({name:"testtt",email:"test@gmail.com"}).then((r)=>res.send("success"))
})

server.listen(3001,()=>console.log("server started"))