const express = require('express');
const app = express();
app.put('/',  (req , res)=>{
 res("Hello world")
    
})
app.listen(8000 ,()=>{
    console.log("start on 8000)");
});