const express = require('express');
const connection = require('./config/Mongoo');
const cors =require("cors");
const dotenv = require('dotenv');
// const dotenv = require('dotenv').config();
const router = require('./router/Router');
const app = express();

connection();
app.use(express.json());
dotenv.config();
app.use(cors());


app.use('/',router)


const port  = 4000

app.listen(port,console.log(`server is running on ${port}`));