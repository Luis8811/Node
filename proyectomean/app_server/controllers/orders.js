//Controlador de los pedidos

module.exports.orders = function(req, res){
 res.render('orders', {subtitle: 'Registrar pedidos', cantidad:'40', clientes:'20'});
};