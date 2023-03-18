// import express from "express"; //ES6
const express = require('express'); // CJS
const app = express();
const router = require("./routes/router");
// const userRouter = require("./routes/user");
// const adminRouter = require("./routes/admin");

const PORT = 4000;

app.use(express.json());

app.use('/test-api',router);
// app.use('/user',userRouter);
// app.use('/admin',adminRouter);

app.get('/', (req, res) => {
    res.send({ success: true, message: "Express server get request" });
});


app.listen(PORT, () => {
    console.clear();
    console.log("server started on port", PORT)
})
