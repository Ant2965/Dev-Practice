const express =require('express');
const app =express();

const path = require("path");
const port =8081;

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));


let posts =[{
    id: "1a",
    username : "Apna",
    content : "lov ec o"
},
{
    id: "2b",
    username:"Rahul",
    content:"rqmakck"
}
]

app.get("/posts",(req,res)=>{
    res.render("index",{posts})

})

app.get("/post/:id",(req,res)=>{
    let {id} =req.params;
    console.log(id)
    let post =post.find((p)=> id===p.id);
    console.log(post)
    res.send("id working")

})



app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})


app.post("/posts",(req,res)=>{
    let {username,content}=req.body;

    posts.push({username,content})  

    res.send('post request working')
    res.redirect("/posts")
})



app.listen(port,()=>{
    console.log("Listen to port 8081")  
})
// Redirect is used for connecting pages;
