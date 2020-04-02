var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
//ROUTES:

module.exports = function (app) {

    //  LOAD MAIN PAGE
    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        res.render("index", { cars: res });
    });


    app.get("/signup", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        res.render("SignUp");
    });
    app.get("/login", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        res.render("Login");
    });

    //GET CAR INFO FOR A DROPDOWN
    app.get("/api/all", function (req, res) {

        db.Lineups.findAll({}).then(function (data) {

            res.json(data);
        });
    });

    // GET DEALERS INFO
    app.get("/api/dealers", function (req, res) {
        db.Dealers.findAll({}).then(function (data2) {
            console.log("dilers :");
            console.log(data2);
            // res.render("index", { dealers: data2 });
            res.json(data2);
        })
    });

    // GET  CHOSEN  MODEL INFO 
    app.get("/api/posts/:id", function (req, res) {
        db.Lineups.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    //  LOAD compare page
    app.get("/compare", isAuthenticated, function (req, res) {

        res.render("compare");
    });


}