var express = require("express");
var User = require("../models/User");
var Entry = require("../models/Entry");
var Comment = require("../models/Comments");
var router = express.Router();


//==============================================
//POST ROUTE TO CREATE NEW JOURNAL ENTRY COMMENT
//==============================================
router.post("/comment/:entry_id", function (req, res) {
    Entry.findById(req.params.entry_id, function (err, entry) {
        if (err) {
            console.log(err)
        } else {
            Comment.create(req.body, function (err, comment) {
                if (err) {
                    console.log(err)
                } else {
                    entry.comments.push(comment);
                    entry.save();
                    res.end()
                }
            });
        }
    });
}) 

//Route to edit existing entries
router.put("/comments/:entryid", function(req, res){
    
})


//==============================================
//DELETE ROUTE TO REMOVE ONE JOURNAL ENTRY COMMENT
//==============================================
router.delete("/comment/:comment_id", function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end();
        }
    })
})


module.exports = router;