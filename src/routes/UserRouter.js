const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.get('/getAll', userController.getAllUser)
router.get('/getDetail/:id', userController.getDetailsUser)
router.post('/refreshtoken', userController.refreshToken)
router.post('/delete-many', userController.deleteManyUser)
module.exports = router

