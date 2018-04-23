//controlador principal de la app
module.exports.load = function(req, res){
    res.render('index', {title: 'Dulcelandia', welcome_message: 'Ordenar los mejores dulces nunca había sido tan sencillo!'});
   };