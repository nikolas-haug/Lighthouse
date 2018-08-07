var passport = require("passport");
var express = require("express");
var Entry = require("../models/Entry");
var router = express.Router();


const entries = [
    {
    _id:1,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:2,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:3,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:4,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:5,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:6,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
},
    {
    _id:7,
    title:"this is a title.",
    text:"this is a text and it is longer than the title. You can see for sure."
}
];
//Route to get all of the journal entries
router.get("/journal", function (req, res) {
    res.json(entries)

})

//Route to post new entries
router.post("/journal", function (req, res) {
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