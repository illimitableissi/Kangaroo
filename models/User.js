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
  userListing: [{
    location: String,
    price: Number,
    rooms: Number,
    sqft: Number,
    negotiable: String,
    petFriendly: String,
    dateAvailable: String,
    minLeaseByMonth: String,
    address: String,
    image: String,
    propertyDetails: String,
    messages:[]
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User; 
