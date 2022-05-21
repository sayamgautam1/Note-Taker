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
});

module.exports = notes;
