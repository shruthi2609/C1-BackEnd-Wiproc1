const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/june29").then((res)=>console.log("db connected")).catch((err)=>console.log(err))
const schema=mongoose.Schema
const contactschema=new schema({
    userid:Number,
    fname:String,
    email:String,
    phone:Number
})
const contactModel=mongoose.model("contact",contactschema)
/*const data1=new contactModel({
    userid:1,
    fname:"john",
    email:"john@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))
const data2=new contactModel({
    userid:2,
    fname:"peter",
    email:"peter@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))

const data3=new contactModel({
    userid:3,
    fname:"henry",
    email:"henry@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))*/

/*contactModel.find().then((response)=>console.log(response)).catch((err)=>console.log(err))

async function getDetails(){
const result=await contactModel.find()
console.log(result)
}
getDetails()

contactModel.findById("62bd8e1e56b63bc486e21cf9").then((response)=>console.log(response)).catch((err)=>console.log(err))

contactModel.find({fname:"john",email:"john@gmail.com"}).then((response)=>console.log(response)).catch((err)=>console.log(err))*/
/*const data1=new contactModel({
    userid:1,
    fname:"john",
    email:"john@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))
const data2=new contactModel({
    userid:2,
    fname:"peter",
    email:"peter@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))*/

/*const data3=new contactModel({
    userid:4,
    fname:"henry",
    email:"henry12@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))
contactModel.find({fname:"henry"}).then((response)=>console.log(response)).catch((err)=>console.log(err))

contactModel.findOne({fname:"henry"}).then((response)=>console.log(response)).catch((err)=>console.log(err))

contactModel.findOneAndUpdate({fname:"henry"},{email:"henrie@gmail.com",phone:"283820938"}).then((response)=>console.log(response))

contactModel.updateMany({fname:"henry"},{email:"duplicate@gmail.com"}).then((response)=>console.log(response))

contactModel.findByIdAndUpdate("62bd9120db121efeb4406ded",{email:"pete@gmail.com"}).then((response)=>console.log(response))

contactModel.deleteMany({fname:"henry"}).then((res)=>console.log(res))

contactModel.deleteOne({fname:"peter"}).then((res)=>console.log(res))

contactModel.findByIdAndDelete("62bd9120db121efeb4406dec").then((res)=>console.log(res))*/



module.exports=contactModel

//create the data

/*const data1=new contactModel({
    fname:"john",
    email:"john@gmail.com",
    phone:299389283
}).save().then((res)=>console.log("inserted record")).catch((Err)=>console.log("error in insert"))*/

//using create method



/*mongoose.model("contact",{
    fname:String,
    email:String,
    phone:Number
})*/




