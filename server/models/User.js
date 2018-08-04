var mongoose = require("mongoose"); 
var passportLocalMongoose = require("passport-local-mongoose"); 
var UserSchema = new mongoose.Schema({  
    username: String, 
    password: String,
    role: String, 
    entries: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Entry" }] 
    }); 
    UserSchema.plugin(passportLocalMongoose); 
    module.exports = mongoose.model("User", UserSchema);

