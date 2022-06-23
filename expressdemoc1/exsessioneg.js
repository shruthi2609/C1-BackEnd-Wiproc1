const express=require("express")
const server=express()
const sessions=require("express-session")
const cookieParser=require("cookie-parser")
server.use(cookieParser())
server.use(sessions(
{
    secret:"jamesbond",
    saveUninitialized:true,
    cookie:{maxAge:90000},
    resave:true
}))
let session;
server.get("/signup/:username",(req,res)=>{
    const data=req.params.username
    if(data==="admin"){
       session=req.session
       session.userid=data
       console.log(req.session)
        res.send("valid")
    }
    else{
        res.send("invalid")
    }
})
server.get("/search",(req,res)=>{
    console.log(req.cookies['connect.sid'])
    res.send("search")
})

server.listen(3001,()=>console.log("server satrted"))




