const express = require('express');
const mongoose=require('mongoose');
const app = express();
const port = 3000;
const mongoDB = "mongodb://localhost:27017/myDB";

// I am using a local database 
// useNewUrlParser and useUnifiedTopology are true to avoid deprecation warnings
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    // On Resolved
    .then(() => {
        app.listen(port);
    })
    
    // Error Handling
    .catch((err: any) => {
        console.error("Error connecting to database:", err);
    });
