const fs = require('fs');

// Para leer un directorio necesitamos la ruta de este.
// Como __dirname es la ruta del directorio actual podemos pasar eso como parametro
// y de esta manera leer los archivos que estan en esta carpeta, pero solo lee el nombre.
// como segundo parametro el callback
/* const files =  */fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.error(err);
  }

  console.log(files);
});