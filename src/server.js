require("./db/connection")
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
//const {helloWorld} = require("./controllers")
const helloRouter = require("./routes")

app.use(express.json())
app.use(cors())

//app.get("/hello", helloWorld)
app.use(helloRouter)

app.listen(5000, () => {
    console.log("Listening on port 5000")
})