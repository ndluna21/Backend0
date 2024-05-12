const express = require('express')
const router = express.Router();
router.get("/", (req, res) => {
 res.send("Hello World! My name is Luan");
});

router.get("/login", (req, res) => {
 res.render("example.ejs");
});

module.exports = router 