const http = require('http');
const moment = require('moment');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/day') {
    let body = [];

    req.on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      res.writeHead(200, { 'Content-Tye': 'text/plain' });

      // Recivimos el texto y lo pasamos a string.
      body = Buffer.concat(body).toString();

      let fecha = moment(body, "DD/MM/YYYY");
      
      if (!fecha.isValid()) { // Validamos que es una fecha.
        res.end("no es un formato valido. Formato esperado DD/MM/YYYY"); // Pedimos que ingrese formato valido.
      } else {
        var weekDayName = fecha.format("dddd"); // Convertimos a nombre del dia.

        res.end("Tu dia de Nacimiento es: " + weekDayName); // Retornamos la respuesta.
      }
     

      // El formato que pasamos (body), no es un formado Date valido para moment. Aun asi, moment funciona
      // para este caso y debuelve el nombre del dia de la fecha que le pasamos si separamos con "-" (1993-09-09).
      // body = moment(body).format('dddd');
      
      // Definiendo el formato de fecha que recive en el sugundo parametro de moment,
      // solucionamos el problema anterior y sigue funcionando.
      // body = moment(body, 'DD/MM/YYYY').format('dddd'); // Convertimos el texto a fecha con moment y formateamos a nombre del dia ('dddd').

      // res.end(body);
    });
    
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8000);
console.log('Servidor en la url http://localhost:8000');