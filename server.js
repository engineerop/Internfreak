const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const path = require("path");
app.use(express.static("public"));
// mongoose
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({extended:false}))
// const connectDB =require('./config/db')
dotenv.config({ path: "./config/config.env" });
// connectDB()
// HandleBars
app.set("view engine", "ejs");

// Routes
app.get("/", require("./routes/index"));
app.get("/new", require("./routes/index"));
//MONGO_URI="mongodb+srv://InternFreak:InternFreak@cluster0.vgphq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
