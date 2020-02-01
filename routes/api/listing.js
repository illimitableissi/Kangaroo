const router = require("express").Router();
const listingController = require("../../controllers/listingController")

router.route("/")
    .get(listingController.findAll);

router.route("/location")
    .get(listingController.findByLocation);

module.exports = router;
