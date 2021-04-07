const fs = require('fs');
const server = require('http').createServer(); // Creamos el servidor.

// Creamos un servidor en el cual leeremos ese archivo pesado.
// Lo leeremos de la manera normal, esto sera malo ya que no limitara la memoria
// y sera mucho esfuerzo para la pc.
server.on('request', (req, res) => { // Escuchamos la peticion para saver cuando hicieron consulta en la ruta.
  fs.readFile('./big', (err, data) => { // Leemos el archivo.
    if (err) {
      console.error('Error:', err); // Manejamos el error.
      return;
    }
    res.end(data); // Mostramos los datos o los enviamos como respuesta.
  });
});

server.listen(3000);