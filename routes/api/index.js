const router = require("express").Router();
const listingRoutes = require("./listing");
const userRoutes = requite("./user");

// Listing routes
router.use("/listings", listingRoutes);
router.use("/user", userRoutes)

module.exports = router;
