let express = require('express');
let router = express.Router();
let db = require("../conexion/conexion");

/* POST para guardar un nuevo producto */
router.post('/', function(req, res, next) {
  // Obtener los datos del formulario
  const { titulo, imagen, descripcion, precio } = req.body;

      console.log("Título:", titulo);
      console.log("Imagen:", imagen);
      console.log("Descripción:", descripcion);
      console.log("Precio:", precio);

  const sql = "INSERT INTO tblproductos (titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [titulo, imagen, descripcion, precio], function (err, resultado) {
    if (err) {
      console.log(err);

      res.send("Error al guardar el producto");
    } else {
      res.redirect('/productos');
    }
  });
});

/* GET productos. */
router.get('/', function(req, res, next) {
    res.render('agregar', { title: 'Agregar Productos'});
});

module.exports = router;