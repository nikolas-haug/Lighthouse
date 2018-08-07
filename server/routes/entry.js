var passport = require("passport");
var express = require("express");
var Entry = require("../models/Entry");
var router = express.Router();



//Route to get all of the journal entries
router.get("/journal", function (req, res) {
    Entry.find({}, function(err, entries){
        console.log(entries);
        res.json(entries)
    })
})

//Route to post new entries
router.post("/journal/:userid", function (req, res) {
    Entry.create(req.body, function(err, entry){
        if (err) {
            console.log(err)
        } else {
            console.log(entry)
        }
        res.end();
    });
})


//Route to edit existing entries
router.put("/journal/:entryid", function (req, res) {

})

//Route to edit existing entries
router.delete("/journal/:entryid", function (req, res) {

})


module.exports = router;