const mongoose =require('mongoose');

const blogSchema=new mongoose.Schema({
  title:{
      type:String,
      required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  writtenBy:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
  // img:  { 
  //   data: Buffer, 
  //   contentType: String
  // }
})
module.exports=mongoose.model('blog',blogSchema)