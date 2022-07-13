const express = require('express');
const router = express.Router()
const petController = require('../controllers/pet.controller')

//router.post('/', petController.createPet)
router.get('/users', petController.listAllPets)

module.exports = router