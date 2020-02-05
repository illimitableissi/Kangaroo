const router = require("express").Router();
const listingController = require("../../controllers/listingController")

router.route("/")
    .get(listingController.findAll)
    .post(listingController.create);

router.route("/location")
    .get(listingController.findByLocation);

router.route("/:id")
    .get(listingController.findById)

module.exports = router;
