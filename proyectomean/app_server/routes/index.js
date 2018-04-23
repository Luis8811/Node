var express = require('express');
var router = express.Router();

var ordersController = require('../controllers/orders');
var clientsController = require('../controllers/clients');
var mainController = require('../controllers/main');

router.get('/', mainController.load);
router.get('/clients', clientsController.clients);
router.get('/addClient', clientsController.addClient);
router.get('/orders',ordersController.orders);

module.exports = router;
