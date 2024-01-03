const express = require('express');
const app = express();

app.use(express.json())
app.use(require("cors")())


app.use("/n/",require("./routes/none.js"))


app.listen(3000,()=>{console.log("the server is alive");})