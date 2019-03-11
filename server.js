// Your server.js file should require the basic npm packages we've used in class: express and path.

// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser'); 
const Joi = require('joi');
const path = require('path');

// INITIALIZATION/CONFIGURATION
var app = express();

var PORT = process.env.PORT || 7060;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });