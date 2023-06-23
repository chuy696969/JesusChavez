//Creacion de un modulo
function saludar(nombre){
    return `Hola, ${nombre}, buenos dias`;
}

function despedida(){
    return `Hasta luego`;
}

//Realizamos una exportacion
//module.exports.saludar = saludar;
//module.exports.adios = adios;

module.exports = {
    //Palabra clave : valor, 
    saludar : saludar,
    adios : despedida
};