const mongoose=require("mongoose")

const roomSchema=mongoose.Schema({
    Name:{
        type:String,
        required: true
    }
    ,maxCount:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    }
    ,
    rentperday:{
        type:Number,
        required:true
    },
    imageurls:[],

    currentbookings:[],

    type:{
        type:String,
        required:true
    },

    description:{
       type:String
    }
},
    {
      timestamps:true
    }
)


const roomModel=mongoose.model('rooms',roomSchema)

module.exports =roomModel;