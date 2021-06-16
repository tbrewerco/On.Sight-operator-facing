// dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// database configuration
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// database connection error/success notices
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + "mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// middleware
// body parser middleware
app.use(express.urlencoded({ extended: false}));

// listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));