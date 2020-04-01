var db = require("../models");
var axios = require("axios");
var authentication = require("../config/middleware/authentication.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.json(req);
    });

    // app.get("/login", /*passport login command?*/, function(req, res){
    //     // sign in method 
    // }); 

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

    app.get("/api/get_price/:q", async function (req, res) {
        var q = req.params.q
        var gasPrice = 0; 
        console.log("got " +q );
       

        config = { 
            "headers": {
                "content-type": "appliaction/json",
                "authorization": "apikey 49PSi9LIungoODV0eCgFY1:6kRdisGS8DTmy0S8uTesMe"
            },
            
        }
        var result = await axios.get(`http://api.collectapi.com/gasPrice/stateUsaPrice?state=${q}`, config); 
        console.log(JSON.stringify(result.data, null, 2)); 

        gasPrice = result.data.result.state.premium; 
        console.log("Gas price: "+gasPrice);
        res.json(gasPrice);
    })
}