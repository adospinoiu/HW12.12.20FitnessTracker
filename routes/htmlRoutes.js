// Dependencies
// =============================================================
var path = require("path");


// Establish the paths to the three different HTML pages (index, exercise, stats)
module.exports = function (app) {

    app.get("/index", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

};