const express = require('express');
const app = express();
app.get('/', (utf=8), (req , rea)=>{
  res.json("hello")
    
})
app.listen(8000);