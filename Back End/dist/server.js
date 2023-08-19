"use strict";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const mongoDB = "mongodb://localhost:27017/myDB";
// TODO
// users
//  check if they are at least 13 on sign up
//  hash password on sign up
//  Database Connection
// useNewUrlParser and useUnifiedTopology are true to avoid deprecation warnings
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    // On Resolved
    .then(() => {
    app.listen(port);
})
    // Error Handling
    .catch((err) => {
    console.error("Error connecting to database:", err);
});
