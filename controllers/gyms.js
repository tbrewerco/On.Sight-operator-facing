const express = require("express");
const Gym = require("../models/gyms.js");
const router = express.Router();
const Author = require("../models/gyms.js");

router.get("/", (req, res) => { // home route
    res.render("gyms/index.ejs");
});

router.get('/gyms/new', (req, res) => { // new route
    res.render('gyms/new.ejs');
});

router.post("/", (req, res) => { // create route
    Gym.create(req.body, (err, createdGym) => {
        res.redirect("/gyms"); // redirect to gyms index
    });
});

module.exports = router;