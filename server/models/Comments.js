var mongoose = require("mongoose"); 
var CommentSchema = new mongoose.Schema({
    author:String,  
    body: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
    likes: [],
    }); 
    module.exports = mongoose.model("Comment", CommentSchema);