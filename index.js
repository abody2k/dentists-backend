const express = require('express');
const {auth} = require('./auth.js');
const { sign } = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const { readFile } = require('./util.js');
const app = express();
app.use(require("cookie-parser")())
app.use(fileUpload())
app.use(express.json())
app.use(require("cors")())

app.post("/mma",(req,res)=>{


    res.cookie("token",
    
    sign({
            l:0,
            id:0,
        },"secret"), {httpOnly:true,maxAge:900000}
        
    )

    res.sendStatus(200)
})

app.post("/mmu",(req,res)=>{


    res.cookie("token",
    
    sign({
            l:1,
            id:1,
        },"secret"), {httpOnly:true,maxAge:900000}
    )

    res.sendStatus(200)
})

app.use("/n/",require("./routes/none.js"))
app.use("/u/",require("./routes/user.js"))

app.use("/a/",require("./routes/admin.js"))

app.get("/img/:t/:id/",(req,res)=>{
  
console.log(typeof(req.params.id));
  switch (req.params.t) {
    case "b":
      readFile(req.params.id.toString(),"blogs",res);
      break;
      case "c":
        readFile(req.params.id.toString(),"courses",res);
      
      break;
      case "f":
        readFile(req.params.id.toString(),"fellowships",res);
      
      break;
      case "p":
        readFile(req.params.id.toString(),"products",res);
    
    default:

    res.sendStatus(403);
      break;
  }

})

// Define a route to handle file uploads

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q
// console.log(sign({
//     l:0
// },"secret"));
// auth(sign("hola","secret"))

app.listen(3000,()=>{console.log("the server is alive");})