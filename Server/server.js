const express=require('express');
const app=express();
app.listen(3000, () => {
    console.log('server is running on ',3000)
});
app.get('/',(req,res)=>{
    res.send("welcome to iflix");
})