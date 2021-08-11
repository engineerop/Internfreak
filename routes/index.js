const express=require("express");
const router=express.Router();
const Article=require('./../models/article')
const path = require("path");
const app=express();
app.use(express.static(path.join(__dirname,"public")));
router.get('/',(req,res)=>{
    const articles=[{
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    },
    {
        title: 'Test Article',
        category:'Jobs',
        createAt:new Date(),
        description:'Test description',
        writtenBy:'Intern Freak'
    }]
    res.render('articles/inde',{articles:articles});
})
router.get('/new',(req,res)=>{
    res.render('articles/new',{article:new Article()})
})
router.post('/',async (req,res)=>{
   let article = new Article({
       title: req.body.title,
       category: req.body.category,
       description: req.body.description,
       writtenBy: req.body.writtenBy
   })
   try{
       console.log(article);
 article= await article.save();
 res.redirect(`/articles/${article.id}`)
   }
   catch(e){
       console.log(e);
    res.render('articles/new',{article:article})
   }
})

router.get('/:id',async (req,res)=>{
    try{
    const article=await Article.findById(req.params.id)
    if(article==null)
    res.redirect('/')
    res.render('articles/show',{article:article})
    }
    catch(e){
        console.log(e);
    }
})
<<<<<<< HEAD
module.exports=router;
=======
module.exports=router;
>>>>>>> 22d42511039a0f1d9579e411964de32bcbc97b91
