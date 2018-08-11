var express = require("express");
var Entry = require("../models/Entry");
var User = require("../models/User");
var router = express.Router();


//==============================================
//GET ROUTE TO GET ALL ENTRIES
//==============================================
router.get("/journal", function (req, res) {
    Entry.find({ public: true}).sort({date: 'asc'}).exec( function (err, entries) {
        res.json(entries)
    })
})


//==============================================
//POST ROUTE TO CREATE NEW JOURNAL ENTRIES
//==============================================
router.post("/journal/:userid", function (req, res) {
    User.findById(req.params.userid, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            Entry.create(req.body, function (err, entry) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(entry._id)
                    user.entries.push(entry);
                    user.save();
                    res.end()
                }
            });
        }
    });
})

//==============================================
//GET ROUTE TO GET ONE JOURNAL ENTRY TO BE EDITED
//==============================================
router.get('/journal/:entry_id', function (req, res) {
    Entry.findById(req.params.entry_id, function (err, entry) {
        if (err) {
            console.log(err);
        } else {
            res.json(entry)
        }
    });
});


//==============================================
//PUT ROUTE TO UPDATE ONE JOURNAL ENTRY
//==============================================
router.put("/journal/:entryid", function (req, res) {
    Entry.findByIdAndUpdate(req.params.entryid, req.body, function (err, entry) {
        if (err) {
            console.log(err)
        } else {
            res.end();
        }
    });
})


//==============================================
//DELETE ROUTE TO REMOVE ONE JOURNAL ENTRY
//==============================================
router.delete("/:entryid", function (req, res) {
    console.log(req.params.entryid);
    Entry.findByIdAndRemove(req.params.entryid, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end();
        }
    })
})


module.exports = router;