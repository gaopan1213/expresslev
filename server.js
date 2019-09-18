const express=require("express");
const cookieparse=require("cookie-parser");
const app=express();
//中间件的使用
const  postRouter=require("./routers/post");
app.use("/posts",postRouter);//路由的实例化
app.set("views","views");//模板引擎
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("welcome",{
        name:"张三",
        str:"<button>我真好看呢</button>"
    });
});
app.listen(3000);

// app.use(express.json());
// app.use(express.urlencoded({extend:true}));
// app.use("/hello",cookieparse());
// app.use(express.static("public"));
// app.get("/",(req,res) =>{
//     console.log(req.query);
//    res.send("hello express");//write和end方法的结合，res原本没有send方法
// });
// app.post("/handlelogin",(req,res)=>{
//     console.log(req.body);
//     res.send("hello express");
// })
// app.get("/hello/setcookie",(req,res)=>{
//     res.cookie("username","zhangsan",{
//         maxAge:1000*60*10,
//     });
//     res.send("cookie设置成功");
// })
// app.get("/getcookie",(req,res)=>{
//    console.log(req.cookies);
//    res.send("cookie获取成功");
// })
// app.get("/hello/:id",(req,res)=>{
//     res.send();
//     // console.log(req.params);
// })
// app.get("/world/:name/:use",(req,res)=>{
//     console.log("hello world");
//     console.log(req.params);
//     res.end("hello world");
// })//定义一个req.requestTime的方法，实现自定义的中间件
// var myhello=type=>{
//    return (req,res,next)=>{
//        let time=new Date();
//        let year=time.getFullYear();
//        let month=time.getMonth()+1;
//        let date=time.getDate();
//        if(type==1){
//             req.requestTime=year;
//        }else if(type==2){
//             req.requestTime=month;
//        }else if(type==3){
//         req.requestTime=year;
//        }else{
//         req.requestTime=time;
//        }
//         next();
//     };
// }//闭包的方法
// // app.use(myhello(4));//自定义的方法不用加括号,中间件的调用
// app.get("/test",myhello(1),(req,res)=>{//针对某个路由的中间件
//    console.log( req.requestTime);
//    res.send("获取时间");
// })
// app.get("/test1",myhello(2),(req,res)=>{
//     console.log(req.requestTime);
//     res.send("获取时间");
// })
// app.listen(3000);