const mongoose = require('mongooose');

const localDB = YOUR_DB
 const connetDB = async ()=> {
    await mongoose.connect(localDB),{
        userNewUrlparser: true,
        userNewUrlparser: false
    }
 }