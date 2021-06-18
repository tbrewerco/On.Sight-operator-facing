require("dotenv").config();

// dependencies
const express = require("express");
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");

const app = express();
const mongoose = require("mongoose");
app.use(express.static(__dirname + `/public`));
// middleware

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

// functions (test)


// routes
// home route
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// middleware

app.use(express.urlencoded({ extended: false }));// body parser middleware
app.use(methodOverride("_method")); // method-override middleWare

// controllers
const gymsController = require("./controllers/gyms.js");
const Gym = require("./models/gym.js");
app.use("/gyms", gymsController);

// listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));