function saludar() {
   console.log('Hola mundo');
}

// Exportamos la funcion del modulo.
// module.exports = saludar;

// Exportamos un objeto para mas complegidad.
module.exports = {
   saludar,
   prop1: 'Hola que tal',
}

/* Pra .mjs podemos exportar de esta manera.
export default {
   saludar,
   prop1: 'Hola que tal',
};
*/