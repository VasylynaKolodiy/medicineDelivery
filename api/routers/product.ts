const productController = require("../controllers/Product");
const {Router} = require("express");
const router = Router();

router.get('/', productController.getProducts);

module.exports = router;