const express = require("express");
const path = require("path")

const app = express(); //app express
const port = 3000; //port

app.set("views", path.join(__dirname, './views/'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
 res.send("Hello World!");

});

app.get("/login", (req, res) => {
    res.render('example.ejs')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});