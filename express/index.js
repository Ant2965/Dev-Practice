const express = require("express");
const app =express();


//console.dir(app);

let port =3200
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})


app.use((req,res)=>{
    console.log("request recieved")


    res.send({
        name: "appke",
        color: "red"
    });
});