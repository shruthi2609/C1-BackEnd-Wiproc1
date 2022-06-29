const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/june29").then((res)=>console.log("db connected")).catch((err)=>console.log(err))
const schema=mongoose.Schema
const contactschema=new schema({
    fname:String,
    email:String,
    backlogs:Boolean,
    phone:Number
})
const contactModel=mongoose.model("contact",contactschema)
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




