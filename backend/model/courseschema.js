import mongoose from "mongoose";

const lessonschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slides:[{
        title:{
            type:String,
        },
        content:[{
            subcontent:{
                type:String
            }
        }]
    }],
    test:[{
        question:{
            type:String
        },
        answer:{
            type:String
        },
        options:[{
            option:{
                type:String
            }
        }]
    }],
    result:{
      type:String
    },
    marks:{
        type:String
    }
},{timestamps:true})



const courseschema=new mongoose.Schema({
    name:{
        type:String,
    },
    Batch:{
        type:String
    }
    ,
    trainer:{
        type:String,
    },
    duration:{
        type:String
    },
    lesson:[lessonschema],
    report:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Report"
    }
},{timestamps:true})


const coursemodel = mongoose.model('Course',courseschema)
export default coursemodel