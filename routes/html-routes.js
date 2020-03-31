var path = require("path");
var db = require("../models");
//ROUTES:

module.exports = function (app) {

    //  LOAD MAIN PAGE

    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        res.render("index", { cars: res });
    });

    //GET CAR INFO
    app.get("/api/all", function (req, res) {

        db.Lineups.findAll({}).then(function (data) {
            // var carObject = {
            //     cars: data
            // }
            // console.log("data:");
            // console.log(data);

            res.json(data);
        });
    });

    // GET DEALERS INFO
    app.get("/api/dealers", function (req, res) {
        db.Dealers.findAll({}).then(function (data2) {
            console.log("dilers :");
            console.log(data2);
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
    // app.get("/api/posts", async function (req, res) {

    //     const modelChosen = await db.Lineups.findOne({ where: { id: req.params.id } }).then(function (dbLineups) {

    //         res.json(dbLineups);
    //     });
    //     console.log(modelChosen);
    // })
}