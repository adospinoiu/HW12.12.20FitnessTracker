// Establishes the various requirements/dependencies that must be npm_installed
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

// Establishes the Express App and localhost: 3000 to view the application in the client
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ?????
app.use(logger("dev"));

app.use(express.static("./public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FitnessTracker", 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});