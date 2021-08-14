const express=require("express");
const router=express.Router();
const Article=require('./../models/article')
const path = require("path");
const app=express();
// const multer = require('multer');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static( __dirname + "/public"));
// // Set EJS as templating engine
// app.set("view engine", "ejs");

 

// upload(req,res,(err)=>{
//     if(!req.file)
//     return res.json({error: 'All fields are required'})
//     if(err)
//     return res.status(500).send({error:err.message});
// })
app.use(express.static(path.join(__dirname,"public")));
router.get('/',async (req,res)=>{
    const articles=await Article.find().sort({
        createdAt:'desc'
    })
            res.render('articles/inde',{articles:articles});
        
})

router.get('/new',(req,res)=>{
    res.render('articles/new',{article:new Article()})
})
router.post('/',async (req,res)=>{
   let article = new Article({
    //    console.log(req.body)
       title: req.body.title,
       category: req.body.category,
       description: req.body.description,
       companyDetails:req.body.companyDetails,
       heading:req.body.heading,
       designation:req.body.designation,
       qualification:req.body.qualification,
       ctc:req.body.ctc,
       location:req.body.location,
       applyLink:req.body.applyLink,
       candidateShouldHave:req.body.candidateShouldHave

    //    img: {
    //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //     contentType: 'image/png'
    // }
   })
   
   try{
       console.log(article);
 article= await article.save();
 res.redirect(`/articles/${article.slug}`)
   }
   catch(e){
       console.log(e);
    res.render('articles/new',{article:article})
   }
})
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// let upload = multer({ storage,
//     limit:{fileSize:100000*100},
//     }).single('articles/new');
router.get('/:slug',async (req,res)=>{
    try{
    const article=await Article.findOne({slug:req.params.slug})
    if(article==null)
    res.redirect('/')
    const articles=await Article.find().sort({
        createdAt:'desc'
    })
    res.render('articles/newpost',{articles:articles,article:article})
    // res.render('articles/newpost',{article:article})
    
    }
    catch(e){
        console.log(e);
    }
})

module.exports=router;
