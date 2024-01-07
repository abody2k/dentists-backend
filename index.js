const express = require('express');
const {auth} = require('./auth.js');
const { sign } = require('jsonwebtoken');
const app = express();
app.use(require("cookie-parser")())
app.use(express.json())
app.use(require("cors")())


app.use("/n/",require("./routes/none.js"))
app.use("/a/",require("./routes/admin.js"))
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q
// console.log(sign({
//     l:0
// },"secret"));
// auth(sign("hola","secret"))

app.listen(3000,()=>{console.log("the server is alive");})