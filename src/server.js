require("dotenv").config();
const express = require("express");
const configViewEngine = require('./config/viewEngine.js')
const webRouter = require('./routes/web.js')

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

configViewEngine(app);

// Khai báo route
app.use('/', webRouter)

app.listen(port,hostname, () => {
 console.log(`Example app listening on port ${port}`);
});
