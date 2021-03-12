const express = require("express")
const PORT = process.env.PORT || 3002
const mongoose = require("mongoose")
const app = express()
const path = require("path")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

let MONGODB = "mongodb://localhost/board-game-mern"

mongoose.connect(MONGODB)



app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});