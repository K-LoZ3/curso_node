const util = require('util');

// Con esta utilidad podemos mostrar mensajes de cuando un usuario de tu libreria use
// una funcion que ya no es buno usarla, que esta obsoleta. Con deprecated mostramos
// este mensaje en el segundo parametro de esta funcion. El primer parametro es la
// funcion que se va a usar.
const helloPluto = util.deprecate(() => {
  console.log("Hello pluto");
}, 'pluto in deprecated. It is not a planet anymore.');

helloPluto();