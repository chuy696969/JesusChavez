
var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion")


/* GET productos. */
router.get('/', function(req, res, next) {
    
    db.query("SELECT * FROM `tblproductos`",function (err,resultado){

        console.log(resultado);
        res.render('productos', { title: 'Productos Disponibles',Guantes:resultado });

    });

  });
  
  global.arregloID = [];

  

  module.exports = router;
