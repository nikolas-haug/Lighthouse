require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local");
const passport = require('passport');
const User = require('./models/User');
const cors = require('cors');
const index = require('./routes/index');
const entry = require('./routes/entry');
const comments = require('./routes/comments');

const api = require('./routes/api');


// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cors());
// Serve files created by create-react-app.
app.use(express.static("../client/build"));

//PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "coding is the real bomb!",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Track the current user
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//Set up app to use routes
app.use(index);
app.use(entry);
app.use(comments);
app.use(api);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/lighthouse_test";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});