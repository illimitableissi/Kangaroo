const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://colingreen:cmgkpag118@kangaroodb-pgkex.mongodb.net/kangaroo"
);

const userSeed = [
    {
        name: "",
        userName: "",
        password: "",
        userListing: []      
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertOne(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });