const express = require('express');
const router = express.Router();
const profileController = require('../controller/pdf');


router.get('/pdf', profileController.pdf)

module.exports = router;