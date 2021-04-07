const { Transform } = require('stream');

// Transform es un stream commo duplex pero mas sencillo de usar.
const transformStream = new Transform({
  transform(chunk, encoding, callback) { // Con los mismos parametros de write de Duplex.
    // Podemos usar las funciones que se usan en read.
    this.push(chunk.toString().toUpperCase()); // Transformamos los valores que recive por mayusculas y los enviamos al buffer.
    callback();
  }
});

// Encadenamos los streams como en Duplex.
process.stdin.pipe(transformStream).pipe(process.stdout);