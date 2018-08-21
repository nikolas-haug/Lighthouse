var passport = require("passport");
var express = require("express");
var User = require("../models/User");
var router = express.Router();

//Post route to add a new user
router.post("/signup", (req, res) => {
    // Use the User model and create a new user
    var newUser = new User({
        username: req.body.username,
    });
    //register the new user by passing the password for hashing
    User.register(newUser, req.body.password, (error, user) => {
        if (error) {
            return res.json(error)
        } else {
            //if all work fine, log tthe user into the system
            passport.authenticate("local")(err, req, res, () => {
                if(err){
                    res.json(err)
                }else{
                //send the new user info back to the client-side
                res.json({
                    //And we only want the user id and user name
                    _id: req.user._id,
                    username: req.user.username
                });
                }
            });
        }
    });
});
    

//Login route
router.post("/signin", passport.authenticate("local"), ( req, res) => {
    res.json({
        _id: req.user._id,
        username: req.user.username
    });
});



//Login route
router.get("/signout", function(req, res){
    
})


module.exports = router;