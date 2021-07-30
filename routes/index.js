const express=require("express");
const router=express.Router();

router.get('',(req,res)=>{
    res.render('inde');
})
router.get('/jobs',(req,res)=>{
    res.send('Jobs')
})

module.exports=router;