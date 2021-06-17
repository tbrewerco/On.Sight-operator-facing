const express = require("express");
const router = express.Router();
const Gym = require("../models/gym.js");

// define routes/controllers

router.get("/", (req, res) => {
    Gym.find({}, (err, foundAuthors) => {
        res.render("gyms/index.ejs", {
            gyms: foundAuthors
        });
    })
});

router.get('/new', (req, res) => { // define new controller
    res.render('gyms/new.ejs');
});

router.post("/", (req, res) => { // define create controller, create new gym with gym model
    Gym.create(req.body, (err, createdGym) => {
        res.redirect("/gyms"); // redirect to gyms index
    });
});

module.exports = router;