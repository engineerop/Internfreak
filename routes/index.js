const express=require("express");
const router=express.Router();
const Article=require('./../models/article')
router.get('/',(req,res)=>{
    const articles=[{
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Ayush'
    }]
    res.render('articles/inde',{articles:articles});
})
router.get('/:id',(req,res)=>{
    res.render('articles/new')
})
router.post('/',async (req,res)=>{
   let article =new Article({
       title: req.body.title,
       category: req.body.category,
       createAt: req.body.createdAt,
       description: req.body.description,
       writtenBy: req.body.writtenBy
   })
   try{
 article= await article.save();
 res.redirect(`/${article.id}`)
   }
   catch(e){
       console.log(e);
    res.render('articles/new',{article:article})
   }
})
router.get('/new',(req,res)=>{
    res.render('articles/new',{article})
})

module.exports=router;