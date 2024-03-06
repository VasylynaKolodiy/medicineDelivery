const shopController = require("../controllers/Shop");
const {Router} = require("express");
const router = Router();

router.get('/', shopController.getShops);

module.exports = router;