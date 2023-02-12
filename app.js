const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/AlienDBex";
//starting and initializing express framework
const app = express();

// connecting to mongoDB DataBase
mongoose.connect(url);

const con = mongoose.connection;
app.use(express.json())
con.on("open",  () => {
  console.log("connected.....");
});

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('server started')
});
