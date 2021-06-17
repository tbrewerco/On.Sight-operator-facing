const express = require("express");
const Gym = require("../models/gyms.js");
const router = express.Router();
const Author = require("../models/gyms.js");

router.get("/", (req, res) => { // define index controller
    Gym.find({}, (err, foundGyms) => {
        res.render("gyms/index.ejs")
            gyms: foundGyms
    });
});

router.get('/gyms/new', (req, res) => { // define new controller
    res.render('gyms/new.ejs');
});

router.post("/", (req, res) => { // define create controller
    Gym.create(req.body, (err, createdGym) => {
        res.redirect("/gyms"); // redirect to gyms index
    });
});

module.exports = router;