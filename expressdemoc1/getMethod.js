const express=require("express")
const server=express()
const memberData=[
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
server.get("/search",(req,res)=>{
    const search=req.query
    const result=memberData.filter((item)=>item.country===search.country&&item.place===search.place)
    console.log(result)
    if(result){
        res.send(JSON.stringify(result))
    }
    else{
        res.send(JSON.stringify({msg:"user not found"}))
    }
   
})



server.get("/user/:username/:place",(req,res)=>{
    const searchdata=req.params
    const result=memberData.filter((item)=>item.fname===searchdata.username&&item.place===searchdata.place)
    if(result.length>0){
        res.send(JSON.stringify(result))
    }
    else{
        res.send(JSON.stringify({msg:"user not found"}))
    }
   
})

server.get("/user/routev2",(req,res)=>{
    res.send("route clash")
})





server.listen(3001,()=>console.log("sever started at port no 3001"))