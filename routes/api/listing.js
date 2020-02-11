const router = require('express').Router();
const listingController = require('../../controllers/listingController');

router
	.route('/')
	.get(listingController.findAll)
	.post(listingController.create);

router
	.route('/location/:id/submit')
	.get(listingController.findById)
	.post(listingController.update);

router
	.route('/:id')
	.get(listingController.findById)
	.post(listingController.update)
	.delete(listingController.remove);

router.route('/userName').get(listingController.findByUserName);

module.exports = router;
