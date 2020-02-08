const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  userListing: [],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User; 
