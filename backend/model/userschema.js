import mongoose from "mongoose";


const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    language:{
        type:String,
    },
    degree:{
        type:String,
    },
    sepcialization:{
        type:String,
    },
    internship:{
        type:String,
    },
    file:{
        type:String,
    },
    isadmin:{
        type:Boolean,
        default:false
    },
    istrainer:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


const User=mongoose.model('User',userschema)

export default User