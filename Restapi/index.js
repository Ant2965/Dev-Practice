const express =require('express');
const app =express();

const path = require("path");
const port =8081;

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));








app.get("/",(req,res)=>{
    res.send("server on")

})



app.listen(port,()=>{
    console.log("Listen to port 8081")
})