var passport = require("passport");
var express = require("express");
var User = require("../models/User");
var router = express.Router();

// ==============================================
// POST ROUTE TO ADD NEW USERS
// ==============================================
router.post("/signup", (req, res) => {
    var newUser = new User({
        username: req.body.username,
    });
    User.register(newUser, req.body.password, (error, user) => {
        if (error) {
            res.json({
                message: error.message
            });
        } else {
            passport.authenticate("local")(req, res, function () {
                res.json({
                    _id: req.user._id,
                    username: req.user.username
                });
            });
        }
    });
});


//Login route
router.post("/signin", passport.authenticate("local"), (req, res) => {
    res.json({
        _id: req.user._id,
        username: req.user.username
    });
});



module.exports = router;