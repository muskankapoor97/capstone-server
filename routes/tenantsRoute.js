const router = require("express").Router();
const tenantsController = require("../controllers/tenantsController");

router.route("/").get(tenantsController.index);

module.exports = router;