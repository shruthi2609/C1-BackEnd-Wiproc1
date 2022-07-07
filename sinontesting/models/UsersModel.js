const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"email is empty please enter email"],
        unique:true
    },
    password:{
        type:String,
        required:true
       
    },
    role:{
      type:String,
      enum:["admin","trainer","trainee"]
    }
})
const UserModel=mongoose.model("UserModel",UserSchema)

module.exports=UserModel