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

//==============================================
//GET ROUTE TO GET ONE COMMENT TO BE EDITED
//==============================================
router.get('/comment/:comment_id', function (req, res) {
    Comment.findById(req.params.comment_id, function (err, comment) {
        if (err) {
            console.log(err);
        } else {
            res.json(comment)
        }
    });
});

//==============================================
//PUT ROUTE TO UPDATE ONE COMMENTS
//==============================================
router.put("/comment/:comment_id", function (req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, function (err, comment) {
        if (err) {
            console.log(err)
        } else {
            res.end();
        }
    });
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



//==============================================
//POST ROUTE ADD OR DELETE COMMENT LIKES
//==============================================
router.post("/comments/likes/:comment_id", function (req, res) {
    let like = req.body.likeBy
    Comment.findById(req.params.comment_id, function (err, comment) {
        if (err) {
            console.log(err)
        } else {
            let index = comment.likes.indexOf(like);
            if (index > -1) {
                comment.likes.splice(index, 1);
                comment.save()
            } else {
                comment.likes.push(like)
                comment.save()
            }
            res.end()
        }
    });
})


module.exports = router;