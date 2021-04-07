const fs = require('fs');

// El primer parametro para crear directorios es el nombre de la carpeta.
// Se puede poner de una vez la estructura de carpetas que se quiere pero si es asi
// se debe indicar en el segundo parametro con un objeto y con argumento recursive en
// verdadero, como tercer parametro el callback.
fs.mkdir('carlos/crea/carpetas', { recursive: true }, err => {
  if (err) {
    return console.error(err); // Manejamos el error.
  }
});