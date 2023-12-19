const express = require("express");
const zod = require("zod") 
const app = express();

app.use(express.json());

const Schema = zod.array(zod.number()) 
const Schema2 = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: (zod.literal("us")),

}) 
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const varfiy = req.body.varfiy;
  const response = Schema.safeParse(kidneys)
  const response1 = Schema2.safeParse(varfiy)
  res.send({
    response:response ,
    response1: response1
  });
  
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