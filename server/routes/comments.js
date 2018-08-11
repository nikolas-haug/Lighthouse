var express = require("express");
var User = require("../models/User");
var Entry = require("../models/Entry");
var Comments = require("../models/Comments");
var router = express.Router();


//Route to post new comments
router.post("/", function(req, res){
    
})

//Route to edit existing entries
router.put("/comments/:entryid", function(req, res){
    
})

//Route to edit existing entries
router.delete("/comments/:entryid", function(req, res){
    
})


module.exports = router;