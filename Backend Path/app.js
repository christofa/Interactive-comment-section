const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT, () =>   console.log ("Connected to db")
)

// IMPORT ROUTES
const authRoute = require('./routes/auth')

// Middlewares
app.use(express.json())

// Route Middlewares
app.use('/api/user', authRoute)


app.listen(3000, ()=>{
    console.log("Server Up and running")
})