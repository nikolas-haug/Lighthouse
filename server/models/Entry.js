var mongoose = require("mongoose"); 
var EntrySchema = new mongoose.Schema({  
    title: String, 
    text: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comments" }] 
    }); 

    module.exports = mongoose.model("Entry", EntrySchema);