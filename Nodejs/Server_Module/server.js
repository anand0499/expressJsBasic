const http=require('http');
const port =8000;
const hostName="localHost";


const Server=http.createServer((req,res)=>{
    if(req.url==='/'){
       return res.end("<h1>Hello Nodejs </h1>")
    }
    if(req.url==="/about"){
      return  res.end(`<h2>Abount page </h2>`);
    }else{
       return res.end("<h4>404 error page not found </h4>")
    }
})


Server.listen(port,hostName,(req,res)=>{
    console.log(`server is working on http://${hostName}:${port}`);
})