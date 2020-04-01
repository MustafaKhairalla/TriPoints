var express = require("express");
// Set Handlebars.
const Handlebars = require('handlebars')
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
// Setting up port and requiring models for syncing


var PORT = process.env.PORT || 8080;

var db = require("./models");
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});