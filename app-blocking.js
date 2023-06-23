//Pedir informacion que se esncuentre en el archivo de usuario 
//Traer la informacion de algunas funciones 
const {getUsuarioSync} = require ('./usuarios/usuario');

console.log('Inicio del Programa');
//Se crea untimer propio de js
console.time('inicio');

//simulacion de peticion a una BD de manera bloqueante esto quiere decir de manera Asincrona
const usuario1 = getUsuarioSync(1);
console.log('Usuario 1: ', usuario1);

const usuario2 = getUsuarioSync(2);
console.log('Usuario 2: ', usuario2);


console.log('Fin de Progreama')
console.timeEnd('inicio');