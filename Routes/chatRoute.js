const chatController = require('../Controllers/chatDetails')
const userAuthentication = require('../Middleware/auth')


const express = require('express')
const router = express.Router();

router.post('/users/addChats', userAuthentication.authentication, chatController.postMessage )
router.get('/users/getChats', userAuthentication.authentication, chatController.getMessage )

module.exports = router