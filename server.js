const express = require('express')
const dotenv=require('dotenv')
const app = express()
// var expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000
const mongoose=require('mongoose');
const path=require('path')
app.use(express.static('public'))
// const connectDB =require('./config/db')
dotenv.config({path:'./config/config.env'})
// connectDB()
// HandleBars
app.set('view engine', 'ejs');

// app.use(expressLayouts);

// Routes
app.get('/',require('./routes/index'))
//MONGO_URI="mongodb+srv://InternFreak:InternFreak@cluster0.vgphq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})