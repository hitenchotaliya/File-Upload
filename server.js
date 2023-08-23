const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const port = process.env.port || 8000

require("./src/db/config")

app.use(bodyparser.urlencoded({
    limit:"10mb",
    extended:true
}))

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const route = require("./src/routes/router")
app.use("/Student",route)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



