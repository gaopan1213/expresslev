var express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
   res.render("post/index",{
       posts:[
           {
               title:"愉快的星期五",
               content:"非常愉快",
               date:"2019-09-09"
            },
            {
                title:"愉快的星期四",
                content:"非常愉快",
                date:"2019-09-09"
             },
             {
                title:"愉快的星期三",
                content:"非常愉快",
                date:"2019-09-09"
             }
    ],
    islogin:true
   });
});
module.exports=router;