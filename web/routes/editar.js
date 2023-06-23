var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
  
/* GET editar/:id. */
router.get('/:id', function (req, res, next) {
    var productId = req.params.id;

    // Realiza la consulta a la base de datos para obtener los datos del producto con el ID proporcionado
    db.query('SELECT * FROM tblproductos WHERE ID = ?', [productId], function (err, rows) {
        if (err) {
            console.log(err);
            return;
        }

        // Verifica si se encontró un producto con el ID proporcionado
        if (rows.length === 0) {
            console.log('No se encontró ningún producto con el ID proporcionado.');
            return;
        }

        var productData = rows[0]; // Suponiendo que solo esperas un resultado, toma el primer elemento del array de resultados

        // Renderiza la vista de edición con los datos del producto obtenidos
        res.render('editar', { title: 'Editar Producto', productId: productId, productData: productData });
    });

});

/* POST para modificar un producto */
router.post('/:id', function(req, res, next) {
    var productId = req.params.id;
    var newTitulo = req.body.titulo;
    var newImagen = req.body.imagen;
    var newDescripcion = req.body.descripcion;
    var newPrecio = req.body.precio;
  
    // Realiza la actualización en la base de datos utilizando la consulta UPDATE
    db.query('UPDATE tblproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE id = ?', [newTitulo, newImagen, newDescripcion, newPrecio, productId], function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
  
      // Redirige a la página principal u otra vista después de la actualización
      res.redirect('/productos');
    });
  });

module.exports = router;
