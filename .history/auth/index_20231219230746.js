const express = require('express');
const app = express();
app.put('/', (utf=8), (req , res)=>{
  res.json("hello")
    
})
app.listen(8000 ,()=>{
    console.log("start on 8000)
});