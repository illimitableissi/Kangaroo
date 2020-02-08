const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/")
    .get(userController.findOne)
    .post(userController.createUser);

router.route("/:id")
    .get(userController.findById)
    .post(userController.updateListing)

module.exports = router;
