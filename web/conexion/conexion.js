var mysql = require ('mysql');

var connection = mysql.createConnection({
    //variables de Conexion
    host :'localhost',
    user : 'root',
    password :'jesus',
    database : 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion Exitosa');
        }else{
            console.log('Error de Conexion');
        }
        
    }
);

module.exports=connection;

/*connection.query("SELECT * FROM `tblproductos`",function (err,resultado){
        console.log(resultado);
});

connection.end();*/