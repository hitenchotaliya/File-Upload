const router = require("express").Router()
const StudentController = require("../controller/StudentController")
const uploadfile = require("../middleware/upload")
router.post("/CreateStudent",uploadfile.upload,StudentController.StudentCreate)

module.exports=router
