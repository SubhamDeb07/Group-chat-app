const userController = require('../Controllers/userDetails')
const userModel = require('../Models/User')

const express = require('express')
const router = express.Router();

router.post('/users/signup', userController.signUp)
router.post('/users/login', userController.loginUser)
router.get('/users/getUser', userController.getUsers)

module.exports = router