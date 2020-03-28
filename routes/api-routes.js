var db = require("../models");

var authentication = require("../config/middleware/authentication.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.json(req);
    });

    // app.get("/login", /*passport login command?*/, function(req, res){
    //     // sign in method 
    // }); 

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    app.get("/api/signup", function (req, res) {
        // sign up method 
    });
    app.get("/logout", function (req, res) {
        //logout and send to home page
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            //send back empty response if no login is active 
            res.json({});
        } else {
            res.json({
                // display saved searches 
            });
        }
    });
}