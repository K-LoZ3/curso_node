const fs = require('fs');

// Para copiar el archivo necesitamos 3 parametros.
// El primero es el archivo a copiar, el segundo el nombre que tendra este
// y el tercero sera el callback para esta funcion.
fs.copyFile('naranja.txt', 'limon.txt', err => {
  if (err) {
    return console.error(err); // Manejamos el error.
  }

  // Mostramos mensaje de ejecutado con exito.
  console.log('Naranja.txt fue copiado en un nuevo archivo como limon.txt');
})