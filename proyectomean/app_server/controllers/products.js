//controlador de los productos ofertados
module.exports.products = function(req, res){
    res.render('products', { products:[{description: 'torta de cumpleaños', price:'5,99', flavors: ['Especial', 'Deliciosa', 'Baja en calorías']},
    {description: 'helados', price: '2,50', flavors: ['Iglú', 'Mix', 'Bajo en calorías']},
    {description: 'bollería', price: '1,10', flavors: ['Magdalena', 'Palmeras', 'Croissants']}]});
};

module.exports.product_detail = function(req, res){
    res.render('product_detail',{description:'', price:'', flavors:[]});
};