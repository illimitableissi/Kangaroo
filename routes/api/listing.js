const router = require("express").Router();
const listingController = require("../../controllers/listingController")

router.route("/")
    .get(listingController.findAll)
    .post(listingController.create);

router.route("/location")
    .get(listingController.findByLocation);

router.route("/location/:id/submit")
    .get(listingController.findById)
    .post(listingController.update);

router.route("/:id")
    .get(listingController.findById)
    .put(listingController.update)

module.exports = router;
