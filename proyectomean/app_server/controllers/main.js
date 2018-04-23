//controlador principal de la app
module.exports.load = function(req, res){
    res.render('index', {title: 'Contenido de la página de inicio de la app.'});
   };