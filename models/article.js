const mongoose =require('mongoose');
const slugify=require('slugify')
const blogSchema=new mongoose.Schema({
  companyDetails:{
    type:String
    
  },
  heading:{
    type:String
    
  },
   designation:{
    type:String
    
   },
   qualification:{
    type:String
    ,
   },
   ctc:{
     type:String
     
   },
   location:{
    type:String
   },
  title:{
      type:String
      
  },
  category:{
    type:String
    
  },
  description:{
    type:String
    
  },
  applyLink:{
    type:String
    ,
   },
   candidateShouldHave:{ 
     type:String
    ,
   },
  // writtenBy:{
  //   type:String
  //   
  // },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  slug:{
    type:String,
    required:true,
    unique:true
  }
  // },
  // img:  { 
  //   data: Buffer, 
  //   contentType: String
  // }
})
blogSchema.pre('validate',function(next){
  if(this.title)
  {
    this.slug=slugify(this.title,{
      lower:true,
      strict:true
    })
  }
  next()
})
const blog =mongoose.model('blog',blogSchema)
module.exports=blog