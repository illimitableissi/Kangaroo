const router = require("express").Router();
const listingRoutes = require("./listing");
const userRoutes = require("./user");

// Listing routes
router.use("/listings", listingRoutes);
router.use("/users", userRoutes)

module.exports = router;
