const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const listingsSchema = new Schema({
    userName: {
        type:String,
        required:true,
        trim: true
    },
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
        type: String,
        required: true
    },
    petFriendly: {
        type: String,
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
    }],
    image: {
        type: String,
        required: false
    },
    propertyDetails: {
        type: String,
        required: false
    }
});

const listings = mongoose.model("listings", listingsSchema);
module.exports = listings; 