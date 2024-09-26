import mongoose from "mongoose";

const reportschema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    degree:{
        type:String
    },
    level:{
        type:String,
    },
    coursetitle:{
        type:String,
    },
    lessons:[{
        type:String
    }],
    marks:[
         {
        type:String
    }],
    totalmarks:{
        type:String
    },
    report:{
        type:String
    },
    date:{
        type:Date,
        default:new Date().getUTCFullYear()
    }
},{timestamps:true})

const reportmodel=mongoose.model('Report',reportschema)

export default reportmodel

