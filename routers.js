const express = require('express');
const router = express.Router();

const userController = require('./user/userControlller');

router.get('/users', userController.index);
router.post('/users', userController.add);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.deleteById);

module.exports = router;