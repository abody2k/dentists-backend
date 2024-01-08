const express = require('express');
const {auth} = require('./auth.js');
const { sign } = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
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
app.use("/a/",require("./routes/admin.js"))



// Define a route to handle file uploads
app.post('/upload', (req, res) => {


    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    const aws = require('aws-sdk');


// Configure AWS
const s3 = new aws.S3({
  accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
  secretAccessKey: '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',
  region: 'us-east-1',
});

    
    const file = req.files[Object.keys(req.files)[0]];
    console.log("reading filees");
    console.log(file);
    const params = {
      Bucket: 'dentists-iq',
      Key: Date.now().toString() + '-' + file.name,
      Body: file.data,
      ACL: 'public-read', // Set the ACL permissions as needed
    };
  
    // Upload the file to S3
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err.message);
      }
  
      res.send('File uploaded successfully!');
    });
  });
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q
// console.log(sign({
//     l:0
// },"secret"));
// auth(sign("hola","secret"))

app.listen(3000,()=>{console.log("the server is alive");})