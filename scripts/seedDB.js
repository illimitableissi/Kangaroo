const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://192.168.99.100:27017/kangaroo"
);

console.log("this works")

const listingSeed = [
    {
        location: "Sandy Springs",
        price: 900,
        rooms: 1,
        sqft: 644,
        negotiable: true,
        petFriendly: false,
        dateAvailable: "July 1st, 2020",
        minLeaseByMonth: 3,
        address: ""
    },
    {
        location: "Dunwoody",
        price: 1200,
        sqft: 765,
        rooms: 1,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 4,
        address: ""
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
        address: ""
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
        address: ""
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
        address: ""
    },
    {
        location: "North Druid Hills",
        rooms: 3,
        sqft: 1800,
        price: "2700",
        negotiable: false,
        petFriendly: true,
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 8,
        address: ""
    },
    {
        location: "West Midtown",
        rooms: 1,
        sqft: 634,
        price: 1100,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "October 1st, 2020",
        minLeaseByMonth: 6,
        address: ""
    },
    {
        location: "Buckhead",
        rooms: 1,
        sqft: 788,
        price: 1460,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 2,
        address: ""
    },
    {
        location: "Marietta",
        rooms: 2,
        sqft: 1289,
        price: 2065,
        negotiable: true,
        petFriendly: true,
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 3,
        address: ""
    }
];

db.Listing
    .remove({})
    .then(() => db.Listing.collection.insertMany(listingSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });