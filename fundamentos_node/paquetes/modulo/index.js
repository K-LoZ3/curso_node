// Treaer nuestro modulo
const modulo = require('./modulo');
// const { saludar, prop1 } = require('./modulo');
// Para .mjs podemos importar y usar como se hace con import normal.
// import modulo from './modulo.mjs';
// import { saludar, prop1 } from './modulo.mjs';

// Ejecutar una funcion del modulo
modulo.saludar();

// Usamos la propiedad del modulo.
console.log(modulo.prop1);