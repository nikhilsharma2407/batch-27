// import express from "express"; //ES6
const express = require('express'); // CJS
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const dbConnection = require('./dbConnection');
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const requestLogger = require("./utils/requestLogger");
const errorHandler = require("./utils/errorHandler");


const PORT = 4000;
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);
app.use('/test-api',router);
app.use('/user',userRouter);
app.use(errorHandler)

app.listen(PORT, () => {
    console.clear();
    console.log("server started on port", PORT)
});
