const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require("cors")
const user = require('./Routes/User')

const PORT = process.env.PORT || 4000
const mongo = async() => {
   try {
    await  mongoose.connect(process.env.CONNECTION )
    console.log("mongodb connected")
   } catch (error) {
    console.log(error)
   }
}
mongo()

app.use(cors())

app.use("/api",user )
app.listen(PORT, async() => {
    console.log("server is running on Port 3000")
})