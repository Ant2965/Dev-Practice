const express =require('express');
const cors = require('cors');
const app = express();

let port =3200;

app.use(cors());

app.get("/",(req,res)=>{
    console.log("servere on")
    res.send("server ready")
})





app.get("/jobs",(req,res)=>{
    const job =[    {
        "id": 1,
        "type": "general",
        "setup": "Why did the scarecrow win an award?",
        "punchline": "Because he was outstanding in his field!"
      },
      {
        "id": 2,
        "type": "dad",
        "setup": "What do you call fake spaghetti?",
        "punchline": "An impasta!"
      },
      {
        "id": 3,
        "type": "programming",
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs!"
      },
      {
        "id": 4,
        "type": "knock-knock",
        "setup": "Knock, knock.",
        "punchline": "Who’s there? Atch. Atch who? Bless you!"
      },
      {
        "id": 5,
        "type": "animal",
        "setup": "Why don't oysters donate to charity?",
        "punchline": "Because they are shellfish!"
    }
  ]

  res.send(job);
})










app.listen(port,()=>{
    console.log(`port listening on ${port}`);
})


