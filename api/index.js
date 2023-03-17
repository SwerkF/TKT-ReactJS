const express=require("express");
const app=express();
const port=5500;

const config=require('./bdd.js');

app.use(express.json());
app.use(express.urlencoded({extended:true,}));

app.listen(port,()=>{
    console.log(`Server started:localhost:${port}`);
});



