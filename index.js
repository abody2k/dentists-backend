import Module from "node:module";

const require = Module.createRequire(import.meta.url);

const express = require('express');
const {auth} = require('./auth.cjs');
const { sign } = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const { readCon, deleteCon, default: util, updateCon, deleteConOR } = require('./util.cjs');
import {handler} from "./build/handler.js"
import { readdir } from "node:fs";
import { Random } from "random";
require("dotenv").config()
process.env.TZ="Asia/Baghdad"
const app = express();

                    
const request = require("supertest")





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




// 0 0 * * * curl -X POST http://localhost:8080/dan -H 'Cache-Control: no-cache' -H 'Content-Type: application/json'
// ~             



/*
0 0 * * * /path/to/your/command_or_script

In this crontab line:

The first field (0) represents the minute (0-59).
The second field (0) represents the hour (0-23).
The asterisks (*) in the remaining fields indicate that the task will run every day of the month, every month, and every day of the week



*/


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
app.use(express.json({limit:"50mb"}))


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
app.post("/api/mmu",(req,res)=>{



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
app.post("/api/dan",async (req,res)=>{



  res.sendStatus(200);
  if(!req.ip.includes("127.0.0.1"))
  return;

  await deleteCon("notifications",[['(datediff(now(),exp))','>','10']]);
  await deleteConOR("reset_p",[['(datediff(now(),expDate))','>=',0],['timediff(now(),expDate)','>',0]]);
//>0 or datediff(now(),expDate)>0
})

//ban all users that are expiered
app.post("/api/bau",async (req,res)=>{


  res.sendStatus(200);
  if(!req.ip.includes("127.0.0.1"))
  return;

  const subsc=await readCon("coursessubscription",['userID','courseID'],[['datediff(now(),expDate)','>=','0'],['status','>',-1]]);
  const subsf=await readCon("fellowshipssubscription",['userID','fellowshipID'],[[' datediff(now(),expDate)','>=','0'],['status','>',-1]]);
  if(subsc.length>0)
  await updateCon("coursessubscription",["status"],[-1],[['datediff(now(),expDate)','>=','0'],['status','>',-1]]);
  if(subsf.length>0)
  await updateCon("fellowshipssubscription",["status"],[-1],[['datediff(now(),expDate)','>=','0'],['status','>',-1]]);

  let sql = require("mysql2/promise");

  const conn =  await sql.createConnection({
    host:"dentists.cp22o2g04xb8.me-central-1.rds.amazonaws.com",
    user:"root",
    database:"dentists",
    password:"grabyOli0001",
    port:3306,
    timezone:"+03:00",

});

if(subsc.length>0)
await conn.query(`insert into banned (ID,userID,type) values ${subsc.map((e)=>`(${e.courseID},${e.userID},0)`).join(",")};`);
if(subsf.length>0)
await conn.query(`insert into banned (ID,userID,type) values ${subsf.map((e)=>`(${e.fellowshipID},${e.userID},1)`).join(",")};`);


await conn.end();

})
app.post("/api/aus",async(req,res)=>{

  console.log("INVOKED");
res.send({
  d:(await fbApp.firestore().collection("dentists").doc("about").get()).data().about
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

// console.log(process.cwd());
// const serv = require("greenlock-express").init({
//   cluster:false,
//   packageRoot:process.cwd(),
//   maintainerEmail:"alhmdanyb902@gmail.com"
// }).serve(app) 
app.listen(3000,()=>{
  
  
  console.log("the server is alive");


return;
const txt=`Vivamus egestas ipsum ut mauris tempus, vitae pharetra libero aliquet. Sed porttitor non dolor et fermentum. Suspendisse nulla ante, luctus in bibendum in, vulputate eget turpis.

Donec ac tincidunt ligula. Aliquam finibus porta ultricies. Aenean finibus arcu vitae odio suscipit, sed porttitor diam blandit.

Proin magna sem, elementum ut erat vel, sollicitudin scelerisque arcu. Aliquam lobortis felis vel diam volutpat, in mattis arcu consectetur. Nunc sodales semper nibh id venenatis.

Donec ac tincidunt ligula. Aliquam finibus porta ultricies. Aenean finibus arcu vitae odio suscipit, sed porttitor diam blandit.
Proin magna sem, elementum ut erat vel, sollicitudin scelerisque arcu. Aliquam lobortis felis vel diam volutpat, in mattis arcu consectetur. Nunc sodales semper nibh id venenatis.`;

return;
readdir("./courses",(e,d)=>{
  for (let i = 0; i <d.length; i++) {
    console.log(d[i]);
    

      // console.log(e);
      request(app).post("/api/a/nb").attach("files","courses/"+d[i]).field("body",JSON.stringify({"title":txt.slice(0,Math.floor(Math.random()*20))
      ,"bd":`Vivamus egestas ipsum ut mauris tempus, vitae pharetra libero aliquet. Sed porttitor non dolor et fermentum. Suspendisse nulla ante, luctus in bibendum in, vulputate eget turpis.

      Donec ac tincidunt ligula. Aliquam finibus porta ultricies. Aenean finibus arcu vitae odio suscipit, sed porttitor diam blandit.
      
      Proin magna sem, elementum ut erat vel, sollicitudin scelerisque arcu. Aliquam lobortis felis vel diam volutpat, in mattis arcu consectetur. Nunc sodales semper nibh id venenatis.
      
      Donec ac tincidunt ligula. Aliquam finibus porta ultricies. Aenean finibus arcu vitae odio suscipit, sed porttitor diam blandit.
      Proin magna sem, elementum ut erat vel, sollicitudin scelerisque arcu. Aliquam lobortis felis vel diam volutpat, in mattis arcu consectetur. Nunc sodales semper nibh id venenatis.` + txt.slice(0,Math.floor(Math.random()*100))})).expect(200).end((w,s)=>{
        // console.log(w);
        // console.log(s);
      
    })  
    
  }
  // d.length
})

})