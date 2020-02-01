const router = require("express").Router();
const listingRoutes = require("./listing");

// Book routes
router.use("/listings", listingRoutes);

module.exports = router;
