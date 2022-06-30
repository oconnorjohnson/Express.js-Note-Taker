const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require('./helper.js')
const fs = require("fs")

// GET Route for retrieving all the tips
notes.get("/notes", function (req,res) {
    fs.readFile("db/db.json", 'utf8', function (error, data) {
        if (error) {
            return console.log(error)
        }
        console.log("this is Notes", data)
        res.json(JSON.parse(data));
    });
});

notes.delete("/notes/:id", function (req, res) {
    const noteId = JSON.parse(req.params.id)
    console.log(noteId)
    fs.readFile("db/db.json", 'utf8', function (error, notes) {
        if (error) {
            return console.log(error)
        }
        notes = JSON.parse(notes)

        notes = notes.filter(val => val.id !== noteId) 

        fs.writeFile("db/db.json", JSON.stringify(notes), function (error, data) {
            if (error) {
                return error
            }
            res.json(notes)
        });
    });
});

notes.put("/notes/:id", function(req, res) {
    const noteId = Json.parse(req.params.id)
    console.log(noteId)
    fs.readFile("db/db.json", 'utf8', function(error, notes) {
        if (error ){
            return console.log(error)
        }
        notes.JSONparse(notes)

        notes = notes.filter(val => val.id !== noteId)

        fs.writeFile("db/db.json", JSON.stringify(notes), function (error, data) {
            if (error) {
              return error
            }
            res.json(notes)
        });
    });
});

module.exports = notes;





// 11-express data persitance
/**
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
>> GIVEN -- DONE
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column,
  plus empty fields to enter a new note title and the note’s text in the right-hand 
  column
>> NVM START HERE
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
>>
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the
  other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in
  the right-hand column
 */
// fb.get(

// )
// readFromFile('./').then((data) => resizeBy.json(JSON.parse(data)))

// tips.post('/',(req, res) => {

// })