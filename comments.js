// Create web server

// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Comment = require("./models/comment");

// Create web server
const app = express();
app.use(bodyParser.json());
