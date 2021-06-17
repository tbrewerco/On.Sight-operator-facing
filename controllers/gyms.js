const express = require("express");
const router = express.Router();
const Gym = require("../models/gym.js");

// define routes/controllers

// gyms index 
router.get("/", (req, res) => {
    Gym.find({}, (err, foundGyms) => {
        res.render("gyms/index.ejs", {
            gyms: foundGyms
        });
    });
});

// new page
router.get('/new', (req, res) => { // define new controller
    res.render('gyms/new.ejs');
});

// new - post to database
router.post("/", (req, res) => {
    Gym.create(req.body, (err, createdGym) => {
        res.redirect("/gyms"); // redirect to gyms index
    });
});

// show page
router.get('/:id', (req, res) => {
    Gym.findById(req.params.id, (err, foundGym) => {
        res.render('gyms/show.ejs', {
            gym: foundGym
        });
    });
});

module.exports = router;