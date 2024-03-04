const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', authMiddleWare, ProductController.updateProduct)
router.get('/details/:id', ProductController.getDetailsProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
router.get('/getall', ProductController.getAllProduct)

module.exports = router