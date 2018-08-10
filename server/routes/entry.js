var passport = require("passport");
var express = require("express");
var Entry = require("../models/Entry");
var User = require("../models/User");
var router = express.Router();



//Route to get all of the journal entries
router.get("/journal", function (req, res) {
    Entry.find({public: true}, function(err, entries){
        // console.log(entries);
        res.json(entries)
    })
})

//Route to post new entries
router.post("/journal/:userid", function (req, res) {
    User.findById(req.params.userid, function(err, user){

        if (err) {
            console.log(err)
        } else {

            Entry.create(req.body, function(err, entry){
                if (err) {
                    console.log(err)
                } else {
                    console.log(entry._id)
                    user.entries.push(entry);
                    user.save();
                    res.end()
                    //console.log(entry)
                }
                //res.end();
            }); 
        }
    });
    //console.log(req.params.userid);
    
})


//Route to edit existing entries
router.put("/journal/:entryid", function (req, res) {
    Entry.findByIdAndUpdate(req.params.entryid, req.body, function(err, entry){
        console.log(req.params.entryid);
        console.log(req.body);
        if(err){
            console.log("Not working!");
        } else {
            console.log(entry);
            res.end();
        }
    });
})

//Route to delete existing entries
router.delete("/:entryid", function (req, res) {
        console.log(req.params.entryid);
        Entry.findByIdAndRemove(req.params.entryid, function (err){
            if (err){
                console.log(err)
            } else {
                res.end();
            }
        })
    
    
})


module.exports = router;