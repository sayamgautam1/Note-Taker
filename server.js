// import express module
const express = require("express");
const path = require("path");

// import middleware
const { clog } = require("./middleware/clog");

// import index.js inside routes folder
const api = require("./routes/index.js");

// specify port for heroku and local device

const PORT = process.env.PORT || 3001;

const app = express();
