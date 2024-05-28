const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render("home.ejs")
};

const getABC = (req, res) => {
 res.send("check ABC");
};

const getHaianhem = (req, res) => {
 res.render("example.ejs");
};

module.exports = {
 getHomepage,
 getABC,
 getHaianhem,
};
