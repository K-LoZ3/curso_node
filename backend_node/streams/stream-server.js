const fs = require('fs');
const server = require('http').createServer(); // Creamos el servidor.

// Creamos unn sevidor para leer el archivo con un stream.
// De esta manera no usara toda la memoria y leera por pedazos el archivo.
server.on('request', (req, res) => {
  const src = fs.createReadStream('./big'); // Creamos el stream de lectura.
  src.pipe(res); // Le pasamos el stream de escritura para que sepa donde debe escribir los datos.
});

server.listen(3000);

/* 
  Con $ curl -i localhost:3000 se puede hacer la peticion sin necesidad de abrir el navegador.
*/