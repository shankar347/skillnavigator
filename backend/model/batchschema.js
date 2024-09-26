import mongoose from "mongoose";


const batchschema=new mongoose.Schema({
    name:{
        type:String,
    },
    batchstudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    batchsize:{
        type:Number,
        default:0
    }
},{timestamps:true})

const batchmodel=mongoose.model('Batch',batchschema)

export default batchmodel