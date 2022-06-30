// Set variables 
var express = require("express");
var path = require("path");
var fs = require("fs");

// Express app variables 
var app = express();
var PORT - process.env.PORT || 3001;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("puyblic"));