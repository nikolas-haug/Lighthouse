var mongoose = require("mongoose"); 
var passportLocalMongoose = require("passport-local-mongoose"); 
var EntrySchema = new mongoose.Schema({  
    title: String, 
    body: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comments" }] 
    }); 
    UserSchema.plugin(passportLocalMongoose); 
    module.exports = mongoose.model("User", UserSchema);