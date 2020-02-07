const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MessageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
   phoneNumber: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Message = mongoose.model("message", MessageSchema);