const express = require('express')
const dotenv = require('dotenv').config();
const colors = require('colors')
const connectDB = require('./config/db')
const todolist = require('./routes/todoListRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 4000

connectDB()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/todolist', todolist)

app.listen(PORT, () => {
    console.log(`Start at PORT ${PORT}`);
})