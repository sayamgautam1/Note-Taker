const express = require("express");

// import notes.js route

const notesRouter = require("./notes");
const app = express();

app.use("/notes", notesRouter);

module.exports = app;
