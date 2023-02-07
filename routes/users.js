const express = require('express');
const router = express.Router();
const profileController = require('../controller/profile');


router.get('/profile', profileController.profile)
module.exports = router;