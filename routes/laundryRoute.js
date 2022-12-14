const router = require("express").Router();
const laundryController = require("../controllers/laundryController");

router.route("/").get(laundryController.index);
router.route("/:id")
.get(laundryController.laundryById)
.put(laundryController.updateLaundry);
module.exports = router;