var mongoose = require("mongoose"); 
var passportLocalMongoose = require("passport-local-mongoose"); 
var CommentSchema = new mongoose.Schema({  
    body: String,
    likes: [],
    }); 
    CommentSchema.plugin(passportLocalMongoose); 
    module.exports = mongoose.model("Comment", CommentSchema);