const router = require("express").Router();
const laundryController = require("../controllers/laundryController");

router.route("/").get(laundryController.index);

module.exports = router;