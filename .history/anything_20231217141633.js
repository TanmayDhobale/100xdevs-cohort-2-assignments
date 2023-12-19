const express = require("express");
const zod = require("zod") 
const app = express();
app.use(express.json());

const Schema = zod.array(zod.number()) 

app.get("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = Schema.safeParse()
  const kidneyId = req.query.kidneyId;

  // if (username != "tanmay" || password != "pass") {
  //   res.status(400).json({"msg": "Somethings up with your username or password"})
  //   return
  // }

  // if (kidneyId != 1 && kidneyId != 2) {
  //   res.status(400).json({"msg": "Somethings up with your ionputs"})
  //   return
  // }
  // // do something with kidney here
  // res.json({
  //   msg: "Your kidney is fine!"
  // })

  
});

app.listen(4000)