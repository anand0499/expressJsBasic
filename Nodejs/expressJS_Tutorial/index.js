const express=require('express');
const path=require('path');
const bodyParser=require('body-parser')

const app=express();
const port=8000;
const hostName="localHost";
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    // console.log(path.join(__dirname+"/index.html"))
    res.sendFile(path.join(__dirname+"/index.html"));
})

app.post('/',(req,res)=>{
    // const userName=req.body.name;
    // const email=req.body.email;
    console.log(req.body);
    res.send(`<h3>Done name is ${req.body.name}</h3>`)
})



app.listen(port,hostName,()=>{
    console.log(`Server is Working on http://${hostName}:${port}`);
})
