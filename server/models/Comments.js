var mongoose = require("mongoose"); 
var CommentSchema = new mongoose.Schema({  
    body: String,
    likes: [],
    }); 
    module.exports = mongoose.model("Comment", CommentSchema);