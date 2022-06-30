// Set variables 
var express = require("express");
var path = require("path");
var fs = require("fs");

// Express app variables 
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML Routes 

// Send user to AJAX page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    fs.readFile(__direname + "/db/db.json", 'utf-8', function (error, notes) {
        if (error) {
            return console.log(error)
        }
        notes = JSON.parse(notes)

        var id = notes[notes.length - 1].id + 1
        var newNote = { title: req.body.title, text: req.body.tet, id: id}
        var activeNote = notes.concat(newNote)

        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(activeNote), function (error, data) {
        if (error) {
          return error
        }
        console.log(activeNote)
        res.json(activeNote);
        });
    });
});