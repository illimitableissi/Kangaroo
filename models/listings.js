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
        type: Date,
        required: true
    }, 
    minLeaseByMonth: {
        type: Number, 
        required: true
    }, 
    address: {
        type: String, 
        required: true
    }
    
    // location: "Sandy Springs",
    // price: 900,
    // rooms: 1,
    // sqft: 644,
    // negotiable: true,
    // petFriendly: false,
    // dateAvailable: "July 1st, 2020",
    // minLeaseByMonth: 3,
    // address: ""
});
module.exports = User = mongoose.model("listings", listingsSchema);