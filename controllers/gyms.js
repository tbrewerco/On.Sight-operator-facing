const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("gyms/index.ejs");
});

router.get('/gyms/new', (req, res) => {
    res.render('gyms/new.ejs');
});

module.exports = router;