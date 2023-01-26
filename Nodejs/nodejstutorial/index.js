const fs=require("fs");
const http=require('http');


const port=4002;
const hostName="localHost";
const home=fs.readFileSync('./index.html','utf-8');



const Server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(home)
    }
})


Server.listen(port,hostName,()=>{
    console.log(`Server is working http://${hostName}:${port}`);
})