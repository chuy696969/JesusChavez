var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* POST para eliminar un producto */
router.post('/', function(req, res, next) {
  // Obtén el ID del producto que se va a eliminar desde el cuerpo de la solicitud
  const productId = req.body.productId;

  // Crea una consulta SQL para eliminar el producto de la base de datos
  const sql = "DELETE FROM tblproductos WHERE id = ?";

  // Ejecuta la consulta SQL
  db.query(sql, [productId], function (err, resultado) {
    if (err) {
      console.log(err);
      // Maneja el error si ocurre
      // Redirige a una página de error o muestra un mensaje de error
      res.send("Error al eliminar el producto de la base de datos");
    } else {
      console.log("Producto eliminado exitosamente");
      console.log(productId)
      // Redirige a la página de productos o a donde desees mostrar los productos
      res.redirect('/productos');
    }
  });
});

module.exports = router;