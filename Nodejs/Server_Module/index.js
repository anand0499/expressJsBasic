const http=require('http');
const fs=require('fs');



const port =4003;
const hostName="localHost";
const home=fs.readFileSync('./index.html','utf-8');

const Server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/about"){
        res.end("You are on About Page");
    }
    if(req.url==="/home"){
        res.end(home);
    }
    if(req.url==="/"){
    res.end(home);
    }else{
        res.end("404 error")
    }
})


Server.listen(port,hostName,()=>{
    console.log(`server is working on http://${hostName}:${port}`);
})  

