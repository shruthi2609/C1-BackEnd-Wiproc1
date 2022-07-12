const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"email is empty please enter email"],
        unique:true/*,
        validate:{
            validator:function(exp){
                return /\[a-zA-Z0-9]*@[a-zA-Z]+.[a-zA-Z]{2,3}/.test(exp)
            },
            message:"this is email is not valid"
        }*/
    },
    password:{
        type:String,
        required:true
    },
    role:{
      type:String,
      enum:{
        values:["admin","trainer","trainee"],
        message:`{VALUE} is not supported`
      }
    },
    country:{
        type:String,
        minlength:[5,"country length should be greater than 3 chars"],
        maxlength:[10,"country length should be less than 10 chars"],
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String
    },
    age:{
        type:Number,
        min:[18,"min age should be 18"],
        max:[50,'max age can be 50']
    },

})
UserSchema.methods.signUp=async function(){
    if(!this.address){
        this.address=this.country+"  "+this.pincode
    }
    await this.save()
}
const UserModel=mongoose.model("UserModel",UserSchema)

module.exports=UserModel