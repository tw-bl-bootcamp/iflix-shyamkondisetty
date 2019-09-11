const express=require('express');
const app=express();
const mongoose =require('mongoose')
const dbConfig = require('./config/database.config');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("database coconnected to project");    
}).catch(err => {
    console.log('failed to connect to database', err);
    process.exit();
});
app.listen(3000, () => {
    console.log('server is running on ',3000)
});
app.get('/',(req,res)=>{
    res.send("welcome to iflix");
})