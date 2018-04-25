var express = require('express');
var router = express.Router();

//var ordersController = require('../controllers/orders');
var productsController = require('../controllers/products');
var mainController = require('../controllers/main');

router.get('/', mainController.load);
// router.get('/clients', clientsController.clients);
router.get('/products', productsController.products);
router.get('/administration',mainController.administration);
router.get('/contact_us', mainController.contactUs); 
module.exports = router;
