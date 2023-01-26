const express=require('express');
const bodyParser=require('body-parser')


const app=express();
const port =9000;
const hostName="localhost";

app.use(bodyparser.urlencoded({extended:false}))

let data={
    id:1,
    name:"Anand Choubey",
    address:"Rishra "
}

let newRecords={

};


app.get('/',(req,res)=>{
    res.send(data);
})


app.post('/post',(req,res)=>{
    console.log("daknhkjhass", req.body)
    const records={
        id:Math.random().toString(),
        address:req.body.address,
    }
    newRecords[records.id]=records;
    res.send(newRecords);
})


app.listen(port,hostName,()=>{
    console.log(`Server is running on http://${hostName}:${port}`);
})