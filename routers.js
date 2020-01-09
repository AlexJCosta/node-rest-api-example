const express = require('express');
const router = express.Router();

const userController = require('./user/userControlller');

router.get('/users', userController.index);

module.exports = router;