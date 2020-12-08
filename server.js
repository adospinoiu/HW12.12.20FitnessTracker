// Establishes the various requirements/dependencies that must be npm_installed
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes.js")

// Establishes the localhost: 3000 to view the application in the client
const PORT = process.env.PORT || 3000;

const db = require("./models");

// Sets up Express to be used in the variable 'app'
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });



// Establish the paths to the three different HTML pages (index, exercise, stats)
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
  });

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
});

// app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});