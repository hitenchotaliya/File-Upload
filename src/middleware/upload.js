var multer = require("multer")
const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"./src/public")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.filename)
    }
})

exports.upload = multer({
    storage:storage,
    limits:{filesize:6000000},
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="image/jpg" || file.mimetype=="image/jpeg",file.mimetype=="image/png"){
            cb(null,true)
        }
        else{
            cb(null,true)
            return cb(new Error("Only jpeg,png and jpg file are allow"))
        }
    }
}).array('img',5)