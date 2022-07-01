const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ContactSchema=new Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    }
})
const ContactSinon=mongoose.model("ContactSinon",ContactSchema)

module.exports=ContactSinon