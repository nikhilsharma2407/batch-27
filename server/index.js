// import express from "express"; //ES6
const express = require('express'); // CJS
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');

dotenv.config();

const dbConnection = require('./dbConnection');
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const requestLogger = require("./utils/requestLogger");
const errorHandler = require("./utils/errorHandler");


const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: "/",
    credentials:true
}));

app.use(express.json());
app.use(cookieParser());

// used to static serve a directory
app.use('/',express.static('./build/'))

app.use(requestLogger);
app.use('/test-api',router);
app.use('/user',userRouter);

// used to handle react-routing
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'))
})
app.use(errorHandler)

app.listen(PORT, () => {
    console.clear();
    console.log("server started on port", PORT)
});
