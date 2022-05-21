const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtilis");

// GET route for retreving all the saved notes

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST route for the saved note

notes.post("/", (req, res) => {
  console.log(req.body);
  //{ title: 'asdas', text: 'adads' }
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      nodeID: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error("Error in adding tip");
  }
});

module.exports = notes;
