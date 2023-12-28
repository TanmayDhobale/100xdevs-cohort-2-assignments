const express = require('express');
const app = express();
app.p('/', (utf=8), (req , res)=>{
  res.json("hello")
    
})
app.listen(8000);