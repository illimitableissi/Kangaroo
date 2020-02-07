const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const listingsSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: false
    },
    sqft: {
        type: Number,
        required: false
    },
    negotiable: {
        type: Boolean,
        required: true
    },
    petFriendly: {
        type: Boolean,
        required: true
    },
    dateAvailable: {
        type: String,
        required: true
    },
    minLeaseByMonth: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    messages: [{
        fullName: String,
        email: String,
        phoneNumber: String,
        posted: {type: Date, default: Date.now}
    }]
});

const listings = mongoose.model("listings", listingsSchema);
module.exports = listings; 