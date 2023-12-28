const express = require('express');
const app = express();
app.get('/', (utf=8), (req , res)=>{
  res.json("hello")
    
})
app.listen(8000);