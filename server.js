const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.port || 8000

require("./src/db/config")

app.use(express.static(__dirname + '/src/public'))
app.use(express.json())
app.use(express.urlencoded({  extended:true}))
app.use(bodyparser.urlencoded({ limit:"10mb",extended:true}))
app.set('views',path.join(__dirname,'/src/views'))
app.set('view engine','hbs')




const route = require("./src/routes/router")
app.use("/",route)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



