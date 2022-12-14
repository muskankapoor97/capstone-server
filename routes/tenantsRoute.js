const router = require("express").Router();
const tenantsController = require("../controllers/tenantsController");

router.route("/").get(tenantsController.index);
router.route("/:id")
.get(tenantsController.tenantsById);

module.exports = router;