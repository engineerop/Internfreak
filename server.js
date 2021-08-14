const express = require("express");
const dotenv = require("dotenv");
const app = express();
const articleRouter=require('./routes/index')
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const path = require("path");
const Article=require('./models/article')
// const expressLayouts=require('express-ejs-layouts')
// Static Folder

app.use(express.static(path.join(__dirname,"public")));
// mongoose
const connectDB =require('./config/db')
dotenv.config({ path: "./config/config.env" });
connectDB()
// ejs
app.set("view engine", "ejs");
app.set('views',__dirname+'/views')
// app.set('layout','layouts/layout')
app.use(express.urlencoded({ extended: false }))
// app.use(expressLayouts)
app.use(express.static("public"));
// Routes
app.get("/", require("./routes/index"));
// app.get("/new",function(req,res){
//   res.render("articles/newpost")
// })
app.use('/articles',articleRouter)
// app.use('/',articleRouter)
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});