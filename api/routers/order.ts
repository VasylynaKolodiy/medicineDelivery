const orderController = require("../controllers/Order");
const {Router} = require("express");
const router = Router();

router.post('/', orderController.saveOrder);

module.exports = router;