const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    marks:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model("Student",studentSchema)