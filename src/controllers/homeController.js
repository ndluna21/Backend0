const getHomepage = (req, res) => {
    // process data
    // call model
    res.send("Hello World! My name is Luan");
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getHaianhem = (req, res) => {
    res.render("example.ejs")
}

module.exports = {
    getHomepage, getABC, getHaianhem
}