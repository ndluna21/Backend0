const express = require("express");
const path = require("path");
require("dotenv").config();

// import express from 'express'


const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// Config template engine
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

// Config static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Khai báo route
app.get("/", (req, res) => {
 res.send("Hello World! My name is Luan");
});

app.get("/login", (req, res) => {
    res.render('example.ejs')
})

app.listen(port,hostname, () => {
 console.log(`Example app listening on port ${port}`);
});
