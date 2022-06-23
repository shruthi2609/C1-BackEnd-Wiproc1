const express=require("express")
const server=express()
const hbs=require("hbs")
server.set("view engine","hbs")
server.set("views","./views")

server.get("/home",(req,res)=>{
    res.render("home",{username:"john",des:"admin"})
})

server.listen(3001,()=>console.log("setarted"))