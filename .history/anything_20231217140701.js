const express = require("express");
const zod = require("zod") 
const app = express();

const Schema = zod.array(zod.number) 
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "tanmay" || password != "pass") {
    res.status(400).json({"msg": "Somethings up with your username or password"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })

  
});

app.listen(4000)