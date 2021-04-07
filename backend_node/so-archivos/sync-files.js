const fs = require("fs");

// Usamos try/catch ya que es sincrona y de esta manera es mas facil.
try {
  // .argv le decimos a js que reciva los datos que entran por consola.
  // Estos datos son los que ponemos en la terminal cuando ejecutamos el
  // archivo (node sync-files.js naranja.txt). Con esto nos
  // tramemos el 3 parametro de este array "naranja.txt".
  const file = process.argv[2];

  // Leemos el archivo y lo pasamos a string.
  const constent = fs.readFileSync(file).toString();

  // Dividimos por saltos de lineas y las contamos.
  const lines = constent.split("\n").length;

  console.log(lines);
} catch (err) {
  console.error(err); // Manejamos el error.
}
