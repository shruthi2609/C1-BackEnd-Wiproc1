const MongoClient=require("mongodb").MongoClient
const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

async function mongoOperations(){
await client.connect()//connect
const db=client.db("mernstack")//select the db
const collection=db.collection("merusers")

app.get("/getusers",async (req,res)=>{
  const result=  await collection.find({}).toArray()
  res.send(result)
})

app.post("/createuser",async (req,res)=>{
    const reqdata=req.body
    const insertedvalue=await collection.insertOne(reqdata)
    if(insertedvalue){
        res.send("inserted sucessfully")
    }
    else{
        res.send("not inserted sucessfully")
    }
    
})


console.log("connected")
}
mongoOperations().then((res)=>{}).catch((err)=>console.log(err))

app.listen(3001,()=>console.log("started"))

