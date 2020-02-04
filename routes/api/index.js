const router = require("express").Router();
const listingRoutes = require("./listing");

// Listing routes
router.use("/listings", listingRoutes);

module.exports = router;
