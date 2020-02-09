const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/")
    .get(userController.findAll)
    .post(userController.createUser);

router.route("/:id")
    .get(userController.findById)
    .post(userController.updateListing);

// router.route("/:id")
//     .get(userController.findByCredentials)


module.exports = router;
