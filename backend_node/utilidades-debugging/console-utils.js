// %s - String
// %d - Number
// %i - parseInt(value, 10)
// %f - parseFloat(value)
// %j - JSON
// %o - Object
// %c - Css
// %% - signo de '%'
// Son como placeholder
console.log("Un %s y un %s", "perrito", "gatito");
// Esto imprime un perrito y un gatito
// Esto funciona porque usa util.format() ya que son utilidades de node

// Esto es un alias de un log. Aunque le pone un identificador para info.
console.info('hello word');

// Este es un alias de .error pero le pone un identificador.
console.warn('Hello error');

// Si hay un error nos lo muestra en un assert
console.assert(42 == "42"); // no imprime nada.
console.assert(42 === "42"); // Muestra que hay error.

// Cons .trace nos indica la linea donde ocurre el error.
console.trace("hello");

// Con esta parte podemos crear un debugging con un mensaje de debugging
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo');
// Para que esto se vea la unica manera es que pasemos la variable de entorno
// con el name-space la variable de entorno es NODE_DEBUG (NODE_DEBUG=foo).
// Esto es util para desarrollo.