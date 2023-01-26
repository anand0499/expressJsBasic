const path=require('path')

// const a=path.extname("/Path/app.js");
// const a=path.basename('anand@pop-os:~/Nodejs$ node "/home/anand/Nodejs/Path/app.js"');
const a=path.dirname('anand@pop-os:~/Nodejs$ node "/home/anand/Nodejs/Path/app.js"')
console.log(a);                                                                     

const b="6pp";
const c="google.com";
console.log(path.join(b+c));