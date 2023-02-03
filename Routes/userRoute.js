const userController = require('../Controllers/userDetails')
const userModel = require('../Models/User')

const express = require('express')
const router = express.Router();

router.post('/users/signup', userController.signUp)

module.exports = router