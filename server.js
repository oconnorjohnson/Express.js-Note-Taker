// Set variables 
var express = require("express");
var path = require("path");
const apiRoutes = require("./api/notes")


// Express app variables 
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes)

// HTML Routes 

// Send user to AJAX page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


// Start server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });