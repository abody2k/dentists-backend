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

var serviceAccount = require("./dentists-iq-firebase-adminsdk-mtl5z-855807e5a3.json");

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



  // res.sendStatus(200);
  // if(!req.ip.includes("127.0.0.1"))
  // return;
  if((req.ip.includes("127.0.0.1")|| req.ip.includes("localhost"))&&req.body.p=="NOoneDento"){
    await deleteCon("notifications",[['(datediff(now(),exp))','>','10']]);
    await deleteConOR("reset_p",[['(datediff(now(),expDate))','>=',0]]);
    res.sendStatus(200);
  }else{
    res.sendStatus(403);
  }


//>0 or datediff(now(),expDate)>0
})

app.post("/api/rmexg",async (req,res)=>{


  
  if((req.ip.includes("127.0.0.1")|| req.ip.includes("localhost"))&&req.body.p=="NOoneDento"){
    await deleteConOR("courseschapterresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("coursesfinalresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("coursesperodicresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("coursesstageresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("fellowshipschapterresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("fellowshipsfinalresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("fellowshipsperodicresults",[['(datediff(now(),submissionDate))','>=',0]]);
    await deleteConOR("fellowshipsstageresults",[['(datediff(now(),submissionDate))','>=',0]]);
    res.sendStatus(200);
  }else{
    res.sendStatus(403);
  }


  // res.sendStatus(200);
  // if(!req.ip.includes("127.0.0.1"))
  // return;


//>0 or datediff(now(),expDate)>0
})

//ban all users that are expiered
app.post("/api/bau",async (req,res)=>{


  res.sendStatus(200);
  if(!req.ip.includes("127.0.0.1"))
  return;

  const subsc=await readCon("coursessubscription",['userID','courseID'],[['datediff(now(),expDate)','>=','0'],['status','=',0]]);
  const subsf=await readCon("fellowshipssubscription",['userID','fellowshipID'],[[' datediff(now(),expDate)','>=','0'],['status','=',0]]);
  if(subsc.length>0)
  await updateCon("coursessubscription",["status"],[-1],[['datediff(now(),expDate)','>=','0'],['status','=',0]]);
  if(subsf.length>0)
  await updateCon("fellowshipssubscription",["status"],[-1],[['datediff(now(),expDate)','>=','0'],['status','=',0]]);

  let sql = require("mysql2/promise");

  const conn =  await sql.createConnection({
    host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
    user:"root",
    database:"dentists",
    password:"grabyOli0001",
    port:3306,connectTimeout:90000,

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
  d:(await fbApp.firestore().collection("dentists").doc("about").get()).data().about,
  pn:(await fbApp.firestore().collection("dentists").doc("about").get()).data().phoneNumber,
  e:(await fbApp.firestore().collection("dentists").doc("about").get()).data().email,
  n:(await fbApp.firestore().collection("dentists").doc("about").get()).data().name,
  s:(await fbApp.firestore().collection("dentists").doc("about").get()).data().social,
  l:(await fbApp.firestore().collection("dentists").doc("about").get()).data().location,

})
  
})
app.post("/api/aaus",async(req,res)=>{

  console.log("INVOKED");
res.send({
  d:(await fbApp.firestore().collection("dentists").doc("about").get()).data().about,
  pn:(await fbApp.firestore().collection("dentists").doc("about").get()).data().phoneNumber,
  e:(await fbApp.firestore().collection("dentists").doc("about").get()).data().email,
  n:(await fbApp.firestore().collection("dentists").doc("about").get()).data().name,
  s:(await fbApp.firestore().collection("dentists").doc("about").get()).data().social,
  l:(await fbApp.firestore().collection("dentists").doc("about").get()).data().location,
  em:(await readCon("login",['email as e','level as l'],[['level','!=',1]]))

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
app.listen(3000,async()=>{
  
  
  console.log("the server is alive");

 

  return;
  let tokens = await readCon('login', ['notToken','userID'], [
    ['userID', '=', 1]
]);

tokens = tokens.reduce((res, current) => {
  return res.concat(Array(1634).fill(current));
}, []);

//send notifications to all of them
//check if the number is more then 500 if it's more than this then group them



if ((tokens).length > 500) {


    for (let index = 0; index < Math.ceil((tokens.length) / 500.0); index++) {
        let currentTokens = [];

        for (let j = index * 500; j < (index + 1) * 500; j++) {
            if (tokens.length <= j) {

                currentTokens=currentTokens.filter((s)=>s.notToken!=null);
                if(currentTokens.length<=0){
                    continue;
                }


                console.log("we are out at " + j);
                console.log("sending nots to these ppl");
                console.log(currentTokens.length);

                break;
                //send notification from here
                app().messaging().sendEach(


                    currentTokens.map(token => (Object({
                        notification: {
                            title: "Update!",
                            body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video "${video.name}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                        },
                        token: token.notToken
                    })))
                );

                break;
            } else {
                currentTokens.push(tokens[j])
            }

            if (j + 1 == (index + 1) * 500) { // send the current 500 tokens

                currentTokens=currentTokens.filter((s)=>s.notToken!=null);
                if(currentTokens.length<=0){
                    continue;
                }

       console.log("sending tokesn to these dudes");

                console.log(currentTokens.length);
       break;
                await app().messaging().sendEach(


                    currentTokens.map(token => (Object({
                        notification: {
                            title: "Update!",
                            body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video has "${video.name}" been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                        },
                        token: token.notToken
                    })))
                );

                currentTokens = [];
            }
        }

    }

} else {

    if(tokens.map((e)=>e.notToken).filter((s)=>s!=null).length<=0){
        return;

    }

    console.log("sending notificS TO THOSEE");
    console.log(tokens);
return;
   console.log((await apps[0].messaging().sendEach(

    tokens.map(token => (Object({
        notification: {
            title: "Update!",
            body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video "${video.name}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
        },
        token: token.notToken,
 webpush:{
    "fcm_options": {
        "link": `http://3.29.235.228:3000/${acourse? "courses":"fellowships"}/${courseID}`
      }     }
    })))
)).responses[0].error);

    
}

})