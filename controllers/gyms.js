const express = require("express");
const router = express.Router();
const Gym = require("../models/gym");

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
    res.render('gyms/new.ejs', {
        gym: Gym
    })
});

// delete 
router.delete("/:id", (req, res) => {
    Gym.findByIdAndRemove(req.params.id, () => {
        res.redirect("/gyms");
    });
});

// update
router.put("/:id", (req, res) => {
    Gym.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/gyms");
    });
});

// create
router.post("/", (req, res) => {
    Gym.create(req.body, (err, createdGym) => {
        console.log(req.body);
        res.redirect("/gyms"); 
    });
});

// edit
router.get("/:id/edit", (req, res) => {
    Gym.findById(req.params.id, (err, foundGym) => {
        res.render("gyms/edit.ejs", {
            gym: foundGym
        });
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