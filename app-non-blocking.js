const {getUsuario} = require('./usuarios/usuario');

console.log('Inicio de Programa');
console.time('inicio');

//Funcion no Bloqueante

//Tenemos una funcion que recibre el parametro y todo lo demas es conocido como 
//CallBack
//Es una funcion que se manda como argumento
getUsuario(1,(usuario)=>{
    console.log('Usuario 1:', usuario);
});

getUsuario(2,(usuario)=>{
    console.log('Usuario 2:', usuario);
    //Necesito saber cuando termina esta instruccion
    console.timeEnd('inicio')
});

console.log('Fin del Progrema')