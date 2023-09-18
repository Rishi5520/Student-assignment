import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    // age:{
    //     type:String,
    // },
    password:{
        type:String,
        required:true,
        select:false 
    },
    name:{
        type:String,
        required:true
    },
    avatar:{
        publicId:String,
        url:String
    },
    StudentAssign:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Assigment'
        }
    ],
})
const usermodel=mongoose.model('User',UserSchema);
export default usermodel;