var path = require("path");
var db = require("../models");
//ROUTES:

module.exports = function (app) {

    //  loads main page

    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        // res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
        res.render("index", { cars: res });
    });

    app.get("/api/all", function (req, res) {

        db.Lineups.findAll({}).then(function (data) {
            // var carObject = {
            //     cars: data
            // }
            console.log("data:");
            console.log(data);

            res.json(data);
        });
    });
}