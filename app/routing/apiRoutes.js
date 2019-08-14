var frinendsData = require("../data/friends")

module.exports = function(app) {

// Making a GET route

    app.get("/api/friends", function(req, res) {
        res.json(frinendsData)
    })

// Making a POST route

    app.post("/api/friends", function(req, res) {

        req

    })

}
