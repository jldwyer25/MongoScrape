var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

var routes= require("./controllers/routes.js");


// Use morgan logger for logging requests
app.use(logger("dev"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines4";

mongoose.connect(MONGODB_URI);



// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


