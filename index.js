import Module from "node:module";

const require = Module.createRequire(import.meta.url);

const express = require('express');
const {auth} = require('./auth.cjs');
const { sign } = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const { readFile, readCon, deleteCon } = require('./util.cjs');
import {handler} from "./build/handler.js"
require("dotenv").config()
process.env.TZ="Asia/Baghdad"
const app = express();


app.use(require("cors")({
  origin:true,credentials: true
}))



// require("argon2").verify("$argon2id$v=19$m=65536,t=3,p=4$WNdn1gV8zU6K11g6t+AMFw$+IJPh10qAOkS8EChloCNF424RVr5FiGc9/tdGfZ91w8","123123").then((e)=>{

//   console.log(e);
// })



var admin = require("firebase-admin");

var serviceAccount = require("./dentists-iq-firebase-adminsdk-mtl5z-1a880f2ce3.json");

const fbApp =admin.initializeApp({
  
  credential: admin.credential.cert(serviceAccount),
  
});



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// Initialize Firebase






let handle = (func)=>(req,res,next)=>{

try {
  console.log("trying things out");
  func(req,res,next)
} catch (error) {
  console.log('a massive error happened here');
  res.sendStatus(403);
}
}





app.use(require("cookie-parser")())
app.use(fileUpload())
app.use(express.json())


app.post("/api/mma",(req,res)=>{
  var da=(new Date());
  da.setFullYear(da.getFullYear()+1)

    res.cookie("token",
    
    sign({
            l:0,
            id:0,
        },"secret"), {httpOnly:true,expires:da}
        
    )

    res.send({

      e:0
    })
})

app.post("/api/aus",async(req,res)=>{

  console.log("INVOKED");
res.send({
  d:(await fbApp.firestore().collection("dentists").doc("about").get()).data().about
})
  
})
app.post("api/mmu",(req,res)=>{


  var da=(new Date());
  da.setFullYear(da.getFullYear()+1)
    res.cookie("token",
    
    sign({
            l:1,
            id:1,
        },"secret"), {httpOnly:true,expires:da}
    )

    res.send({

      e:0
    })
})

app.use("/api/n/",handle(require("./routes/none.cjs")))
app.use("/api/u/",handle(require("./routes/user.cjs")))

app.use("/api/a/",handle(require("./routes/admin.cjs")))



app.post("/delete/nots",(req,res)=>{

deleteCon("notifications",[['datediff(now(),exp)','>','3']]);

})
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



app.use(express.static('./build/'));


app.use(handler);



app.use((req,res)=>{

  console.log(req.url);
})



//  BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U 
// Define a route to handle file uploads

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q
// console.log(sign({
//     l:0
// },"secret"));
// auth(sign("hola","secret"))

console.log(process.cwd());
const serv = require("greenlock-express").init({
  cluster:false,
  packageRoot:process.cwd(),
  maintainerEmail:"alhmdanyb902@gmail.com"
}).serve(app)
// app.listen(3000,()=>{console.log("the server is alive");})