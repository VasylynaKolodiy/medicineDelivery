const orderController = require("../controllers/Order");
const {Router} = require("express");
const router = Router();

router.post('/', orderController.saveOrder);
router.get('/', orderController.getOrders);

module.exports = router;