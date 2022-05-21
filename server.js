// import express module
const exp = require("constants");
const express = require("express");
const { dirname } = require("path");
const path = require("path");

// import middleware
const { clog } = require("./middleware/clog");

// import index.js inside routes folder
const api = require("./routes/index.js");

// specify port for heroku and local device

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

// declare public folder

app.use(express.static("public"));

// GET route for home page

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET route for notes page

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// set wild card to be index.html for unkown path

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// listen to the port when server is loaded
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
