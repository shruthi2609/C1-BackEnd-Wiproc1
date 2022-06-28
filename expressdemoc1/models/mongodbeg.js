const express=require("express")
const app=express()
let url="mongodb://localhost:27017"
let MongoClient=require("mongodb").MongoClient
app.get("/connect",(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err){
            throw err
        }
        else{
            console.log("connected successfull")
            const database=db.db("mernstack")
          
          database.createCollection("mernusers1",(err,result)=>{
                if(err){
                    console.log("err in creating collection")
                    throw err
                }
                else{
                    res.send("collection created")
                }
            })   
        }
    
    })
})

app.listen(3001,()=>console.log("server started"))