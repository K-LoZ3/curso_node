const { Duplex } = require('stream');

// Duplex tiene las 2 funcionalidades de un stream.
// Tando de escritura como lectura sin tener que usar varios streams.
const duplexStream = new Duplex({
  // Funcion para escibir o imprimir el stream.
  write(chunk, encoding, callback) {
    console.log(chunk.toString()); // Imprimimos los datos en consola luego de convertirlos a string ya que son ub buffer.
    callback();
  },
  // Funcion para leer el stream.
  // Con esta vemos lo que hay en consola y en este caso mandamos al buffer un valor para que lo esciba.
  read(size) {
    if(this.currentCharCode > 90) {
      this.push(null);
      return;
    }

    this.push(String.fromCharCode(this.currentCharCode++)); // Enviamos un valor o codigo assi al buffer.
  }
});

duplexStream.currentCharCode = 65;
// Encadenamos. Mandamos de la entrada por consola (stdin) al stream duplex y luego lo mandamos a la salida por consola (stdout) para que lo imprima en la terminal.
process.stdin.pipe(duplexStream).pipe(process.stdout);