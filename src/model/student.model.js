const mongoose = require("mongoose")
const StudentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    dob:{
        type:Date
    },
    course:{
        type:String
    },
    img:[{
        Imgurl:{
            type:String
        }
    }]
})

module.exports=mongoose.model("StudentDetails",StudentSchema)