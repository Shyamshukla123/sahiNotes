const express = require('express');
const router = express.Router();
const profileController = require('../controller/profile');


router.get('/', profileController.profile);

router.use('/users', require('./users'));

router.use('/notes', require('./notes'));


module.exports = router;