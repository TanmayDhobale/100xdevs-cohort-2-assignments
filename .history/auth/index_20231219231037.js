const express = require('express');
const app = express();
app.get('/',  (req , res)=>{

 res.json("Hello world"),
 res.json("Hello world")

    
})
app.listen(8000 ,()=>{
    console.log("start on 8000)");
});