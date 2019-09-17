const express=require("express");
const cookieparse=require("cookie-parser");
const app=express();
//中间件的使用
app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(cookieparse());
app.get("/",(req,res) =>{
    console.log(req.query);
   res.send("hello express");//write和end方法的结合，res原本没有send方法
});
app.post("/handlelogin",(req,res)=>{
    console.log(req.body);
    res.send("hello express");
})
app.get("/setcookie",(req,res)=>{
    res.cookie("username","zhangsan",{
        maxAge:1000*60*10,
    });
    res.send("cookie设置成功");
})
app.get("/getcookie",(req,res)=>{
   console.log(req.cookies);
   res.send("cookie获取成功");
})
app.get("/hello/:id",(req,res)=>{
    res.send("我来了");
    console.log(req.params);
})
app.get("/world/:name/:use",(req,res)=>{
    console.log("hello world");
    console.log(req.params);
    res.end("hello world");
})
app.listen(3000);