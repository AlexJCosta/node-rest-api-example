//Express
const express = require('express');
const router = express.Router();

//Swagger configuration
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));

//Routers to user controller
const userController = require('./user/userControlller');
router.get('/users', userController.index);
router.post('/users', userController.add);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.deleteById);
router.get('/users/:id', userController.getById);

//Routers to address controller
const addressController = require('./address/addressController');
router.get('/addresses', addressController.index);
router.post('/addresses', addressController.add);

//Routers to contact controller
const contatcController = require('./contact/contactController');
router.get('/contacts', contatcController.index);
router.post('/contacts', contatcController.add);

module.exports = router;