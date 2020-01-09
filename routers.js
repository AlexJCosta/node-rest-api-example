const express = require('express');
const router = express.Router();

const userController = require('./user/userControlller');

router.get('/users', userController.index);
router.post('/users', userController.add);

module.exports = router;