const express = require("express");
const dotenv = require("dotenv").config();

const dataBaseConnection = require("./config/dataBaseConnection");

const app = express();



// database connection
dataBaseConnection()


// console.log(process.env);

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
} );
