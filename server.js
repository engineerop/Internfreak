const express = require("express");
const dotenv = require("dotenv");
const app = express();
const articleRouter=require('./routes/index')
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const path = require("path");

// Static Folder
app.use(express.static(path.join(__dirname,"public")));

// mongoose
const connectDB =require('./config/db')
dotenv.config({ path: "./config/config.env" });
connectDB()
// ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }))
// Routes
app.get("/", require("./routes/index"));
app.get("/new",function(req,res){
  res.render("articles/newpost")
})
app.use('/articles',articleRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});