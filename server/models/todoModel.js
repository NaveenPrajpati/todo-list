const mongoose = require("mongoose");
//route handler
const todoSchema = new mongoose.Schema({
         text: {type: String,required:true}
    }
)
module.exports = mongoose.model("todo", todoSchema);