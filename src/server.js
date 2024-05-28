require("dotenv").config();
const express = require("express");
const configViewEngine = require('./config/viewEngine.js')
const webRouter = require('./routes/web.js')

const connection = require('./config/database.js')

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

configViewEngine(app);

// Khai báo route
app.use('/', webRouter)

// Test connection

// A simple SELECT query

// connection.query(
//   'select * FROM Users u',
//   function (err, results, fields) {
//     console.log(">>>>>results= ", results); // results contains rows returned by server
//     //console.log(">>>>>fields= ", fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port,hostname, () => {
 console.log(`Example app listening on port ${port}`);
});
