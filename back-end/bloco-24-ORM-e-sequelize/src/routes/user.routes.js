const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post('/', userController.createUserComPet);
router.get('/', userController.getAllUsers)

module.exports = router