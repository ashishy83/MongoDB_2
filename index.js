const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const studentRouter = require('./routes/studentRoutes');

app.use('/', studentRouter);

app.listen(6000, ()=>{
    console.log("Server is listening at port 6000");
})