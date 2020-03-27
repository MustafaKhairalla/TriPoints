var path = require("path");

//ROUTES:

module.exports = function (app) {

    //  loads main page

    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        // res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
        res.render("index");
    });

    // app.get("/", function (req, res) {
    //     db.all(function (data) {
    //       var hbsObject = {
    //         cats: data
    //       };
    //       console.log(hbsObject);
    //       res.render("index", hbsObject);
    //     });
    //   });
}