console.log("Hello Javascript");

//Example 1:(File Based Module)
// const a=400;
// module.exports=a;

//Example 2:
// const func={
//     averge:(a,b)=>{
//         // console.log((a+b)/2);
//         return (a+b)/2;
//     },
//     percent:(a,b)=>{
//         return (a/b)*100;
//     }
// }

// module.exports=a; 
// module.exports=func;


//Example 3:(Build In Modules)
const fs=require('fs');
// console.log(fs);


// const {readFile}=require('fs');
// fs.readFile('./Sample.txt',"utf-8",(err,data)=>{
//     if(err){
//         // return err;
//         throw err;
//     }
//     console.log(data);
// })

// const file=fs.readFileSync('./Sample.txt',"utf-8")
// console.log(file)


const text="My name is Anand CHoubey";
fs.writeFile("./ReadText.txt",text,(err,data)=>{
    console.log("written");
})

fs.readFile("./ReadText.txt","utf-8",(err,data)=>{
    console.log(data);
})