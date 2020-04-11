var express = require("express");
const Handlebars = require('handlebars')
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
var compression = require("compression");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')



var PORT = process.env.PORT || 8080;

var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

// Initialize Passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// START SERVER
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});
