const Student = require("../model/student.model")
exports.StudentCreate = async(req,res)=>{
console.log("1");
    try {
        if(!req.files || req.files.length===0){
            return res.status(400).json({message:"No file Uploaded"})

        }
        const {name,email,dob,course}=req.body
        console.log(typeof(dob));
        const images = req.files.map(file=>{
            return {
                Imgurl:file.filename
            }
        })
        const newstudent = new Student({
            name,email,dob,course,img:images
        })
        const data = await newstudent.save()
        return res.status(201).json({message:"New student Inserted",
    data:data})
    } catch (error) {
        console.log(error);
    }
}

