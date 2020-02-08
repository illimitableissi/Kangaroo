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
        negotiable: "Yes",
        petFriendly: "No",
        dateAvailable: "July 1st, 2020",
        minLeaseByMonth: 3,
        address: "12345 Anywhere Ln Sandy Springs, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ea doloremque possimus voluptate esse vitae exercitationem, est accusantium nulla magnam quod aspernatur amet consequuntur recusandae tempora quia aliquam quas quibusdam"
    },
    {
        location: "Dunwoody",
        price: 1200,
        rooms: 1,
        sqft: 765,
        negotiable: "Yes",
        petFriendly: "Yes",
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 4,
        address: "12345 Anywhere Ln DUnwoody, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt soluta perspiciatis consequuntur unde sapiente, earum amet tempore, modi ipsa laborum laudantium excepturi itaque accusamus incidunt omnis neque sequi qui consequatur."
        
    },
    {
        location: "Smyrna",
        price: 1700,
        rooms: 2,
        sqft: 1100,
        negotiable: "No",
        petFriendly: "Yes",
        dateAvailable: "February 12th, 2020",
        minLeaseByMonth: 5,
        address: "12345 Anywhere Ln Smyrna, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi doloribus beatae consequuntur, distinctio maxime voluptatem temporibus officia laudantium incidunt praesentium rem! Quisquam similique aut saepe natus officiis amet fugit!"
    },
    {
        location: "Brookhaven",
        price: 2000,
        rooms: 3,
        sqft: 1723,
        negotiable: "No",
        petFriendly: "No",
        dateAvailable: "August 12th, 2020",
        minLeaseByMonth: 2,
        address: "12345 Anywhere Ln Brookhaven, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium nihil necessitatibus error facere hic, debitis rerum ut consequatur numquam fuga, cumque animi ipsum aliquam deleniti, obcaecati voluptate soluta eum."
    },
    {
        location: "West Midtown",
        price: 1500,
        rooms: 1,
        sqft: 598,
        negotiable: "Yes",
        petFriendly: "Yes",
        dateAvailable: "May 1st, 2020",
        minLeaseByMonth: 3,
        address: "12345 Anywhere Ln Atlanta, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eaque cumque pariatur maiores, voluptatum omnis reiciendis consequuntur possimus nulla debitis fugit voluptate, maxime, facere hic doloribus nam? Nostrum, tempora accusamus.    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore in, magnam amet dolorum, unde ipsum at dignissimos perferendis maxime reiciendis quis quos mollitia. Dolorum deserunt officiis assumenda, natus et omnis!"
    },
    {
        location: "North Druid Hills",
        price: 2700,
        rooms: 3,
        sqft: 1800,
        negotiable: "No",
        petFriendly: "Yes",
        dateAvailable: "March 1st, 2020",
        minLeaseByMonth: 8,
        address: "12345 Anywhere Ln Atlanta, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo sequi odio, a consequuntur fuga soluta repudiandae quis labore non corporis numquam deleniti ab, excepturi voluptatem, nostrum accusantium obcaecati ipsa?"
    },
    {
        location: "West Midtown",
        price: 1100,
        rooms: 1,
        sqft: 634,
        negotiable: "Yes",
        petFriendly: "Yes",
        dateAvailable: "October 1st, 2020",
        minLeaseByMonth: 6,
        address: "12345 Anywhere Ln Atlanta, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab commodi, aliquam consequatur autem nesciunt eveniet dolorem itaque voluptates suscipit omnis doloremque odio provident nam? Id ullam sequi minus sint."
    },
    {
        location: "Buckhead",
        price: 1460,
        rooms: 1,
        sqft: 788,
        negotiable: "Yes",
        petFriendly: "Yes",
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 2,
        address: "12345 Anywhere Ln Atlanta, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est distinctio. Ullam officiis consectetur beatae tenetur eaque doloremque, ratione, dolores non, explicabo neque eum. Consectetur quam quibusdam voluptatem eveniet sunt?"
    },
    {
        location: "Marietta",
        price: 2065,
        rooms: 2,
        sqft: 1289,
        negotiable: "Yes",
        petFriendly: "Yes",
        dateAvailable: "January 25th, 2020",
        minLeaseByMonth: 3,
        address: "12345 Anywhere Ln Marietta, GA 55555",
        messages: [],
        image: "/images/stockapartment.jpg",
        propertyDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis sunt debitis molestias quam quaerat eius deserunt, error assumenda. Est suscipit placeat nam officia, dicta fugit deleniti provident ut mollitia."
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