const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://colingreen:cmgkpag118@kangaroodb-pgkex.mongodb.net/kangaroo"
);

const listingsSeed = [
    {
        location: "Sandy Springs",
        price: 900,
        rooms: 1,
        sqft: 644,
        negotiable: true,
        petFriendly: false,
        dateAvailable: "July 1st, 2020",
        minLeaseByMonth: 3,
        address: "",
        messages: []
    },
    {
        location: "Dunwoody",
        price: 1200,
        rooms: 1,
        sqft: 765,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 4,
        address: "",
        messages: []
        
    },
    {
        location: "Smyrna",
        price: 1700,
        rooms: 2,
        sqft: 1100,
        negotiable: false,
        petFriendly: true,
        dateAvailable: "February 12th, 2020",
        minLeaseByMonth: 5,
        address: "",
        messages: []
    },
    {
        location: "Brookhaven",
        price: 2000,
        rooms: 3,
        sqft: 1723,
        negotiable: false,
        petFriendly: false,
        dateAvailable: "August 12th, 2020",
        minLeaseByMonth: 2,
        address: "",
        messages: []
    },
    {
        location: "West Midtown",
        price: 1500,
        rooms: 1,
        sqft: 598,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "May 1st, 2020",
        minLeaseByMonth: 3,
        address: "",
        messages: []
    },
    {
        location: "North Druid Hills",
        price: 2700,
        rooms: 3,
        sqft: 1800,
        negotiable: false,
        petFriendly: true,
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 8,
        address: "",
        messages: []
    },
    {
        location: "West Midtown",
        price: 1100,
        rooms: 1,
        sqft: 634,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "October 1st, 2020",
        minLeaseByMonth: 6,
        address: "",
        messages: []
    },
    {
        location: "Buckhead",
        price: 1460,
        rooms: 1,
        sqft: 788,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 2,
        address: "",
        messages: []
    },
    {
        location: "Marietta",
        price: 2065,
        rooms: 2,
        sqft: 1289,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 3,
        address: "",
        messages: []
    }
];

db.listings
    .remove({})
    .then(() => db.listings.collection.insertMany(listingsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });