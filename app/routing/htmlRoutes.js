var path = require("path");

modulde.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    app.get("*", function (app) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}