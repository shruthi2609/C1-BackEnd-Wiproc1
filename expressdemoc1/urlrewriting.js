const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
let memberData=[
    {
        fname:"peter",
        country:"india",
        place:"delhi"
    },
    {
        fname:"john",
        country:"australia",
        place:"mel"
    },
    {
        fname:"henry",
        country:"india",
        place:"chennai"
    },
]
server.get("/getInfo",(req,res,next)=>{
    req.url="/getDetails"
    next()
})
server.get("/getDetails",(req,res)=>{
    console.log("url is hit",req.url)
    res.send(JSON.stringify(memberData))
})

server.get("/getUser/:fname",(req,res,next)=>{
req.url=`/showUser/${req.params.fname}`
next()
})

server.get("/showUser/:fname",(req,res)=>{
    const userdata=req.params.fname
    const result=memberData.find((item)=>item.fname===userdata)
    res.send(JSON.stringify(result))
})

server.get("/getCountry",(req,res,next)=>{
req.url=`/showCountry?country=${req.query.country}`
next()
})

server.get("/showCountry",(req,res)=>{
    const userdata=req.query.country
    const result=memberData.filter((item)=>item.country===userdata)
    res.send(JSON.stringify(result))
})

server.post("/insertUser",(req,res,next)=>{
    console.log("url is")
    req.url="/create"
    next()
})
server.post("/create",(req,res)=>{
    console.log(req.body)
    res.send("dummy")
})


server.get('/test/:name([a-zA-Z]+)',(req,res)=>{
    res.send( 'Route match for User ID: ' + req.params.name );
} );

server.listen(3001,()=>console.log("server started"))