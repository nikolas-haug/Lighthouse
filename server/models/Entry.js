var mongoose = require("mongoose"); 
var EntrySchema = new mongoose.Schema({  
    title: String, 
    text: String,
    author: String,
    public: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comment" }] 
    }); 

    module.exports = mongoose.model("Entry", EntrySchema);