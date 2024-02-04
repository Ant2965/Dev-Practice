// const express = require("express");
// const app =express();


// //console.dir(app);

// let port =3200
// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`)
// })


// // app.use((req,res)=>{
// //     console.log("request recieved")
// //     res.send({
// //         name: "appke",
// //         color: "red"
// //     });
// // });

//  app.get("/",(req,res)=>{
//    res.send("home")
//   })


// app.get("/:user/:id",(req,res)=>{
// let {user, id}= req.params;
// res.send(`Welcome to the page of @${user}.`)
// })


// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     res.send(`tsearch rrsults for query : ${q}`);
// })

// app.get("/apple",(req,res)=>{
//     res.send("you are le path")
// })



// app.get("/search",(req,res)=>{
//     res.send("yosearch here")
// })

// function person(name,age){
//   const per ={
//     name: name,
//     age: age,

//     talk(){
//       console.Log(`hi my name si ${this.name}`);
//     }
//   }
//   return per;

// }





//constructor -- no return start with cap
function Person(name,age){
  this.name =name;
  this.age=age;

}


let p1 =new Person("ant",25);
let p2 =new Person("ant",25);