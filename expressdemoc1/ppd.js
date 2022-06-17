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
server.put("/update",(req,res)=>{
    const newdata=req.body
    memberData=memberData.filter((item)=>item.fname!==newdata.fname)
    memberData.push(newdata)
    res.send(JSON.stringify(memberData))
})

server.delete("/deleteuser",(req,res)=>{
    const newdata=req.body
    memberData=memberData.filter((item)=>item.fname!==newdata.fname)
    res.send(JSON.stringify(memberData))
})

server.listen(3001,()=>console.log("server started"))