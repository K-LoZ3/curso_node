const fs = require('fs');

// .argv le decimos a js que reciva los datos que entran por consola.
// Estos datos son los que ponemos en la terminal cuando ejecutamos el
// archivo (node sync-files.js naranja.txt). Con esto nos
// tramemos el 3 parametro de este array "naranja.txt".
const file = process.argv[2];

if (!file) { // Lanzamos un arror por si el parametro del archivo no lo colocamos en consola.
  throw new Error("Falta el parametro del archivo a contar.");
}

// No necesitamos el try/catch ya que es asincrona por lo que no funcionara.
// Por eso se debe trabajar con callbacks.
// Primer parametro, el nombre del archivo y como segundo el callback.
fs.readFile(file, function(err, content) {
  if (err) {
    return console.log(err); // verificamos si hay error.
  }
  
  // Contamos las lineas y las imprimimos.
  const lines = content.toString().split('\n').length;
  console.log(lines);
});