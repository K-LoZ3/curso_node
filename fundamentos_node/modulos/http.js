const http = require('http'); // Se importa la libreria http para manejo de servidores y urls.

// Creamos un servidor que estara siendo escuchado en el puerto 3000.
// Esta funcion recibe una funcion, dicha funcion tendra la logica de como funciona el servidor.
// Que mostrar en la ventana y demas cosas.
http.createServer(roter).listen(3000);

// La funcion que se pasara al .createServer
function roter(req, res) {
   // Imprimimos en la consola. Solo para confirmar que se hizo una peticion.
   // Estas impreciones se haran cada ves que en el navegador se haga una peticion, como puede ser
   // regargar la pagina, cambio de direccion en la url o demas eventos.
   console.log('Nueva peticion!');
   console.log(req.url); // req.url muestra la url que se esta pidiendo. ("/hola", "/", "directorio").

   switch (req.url) { // Con esto comprovamos que url se pide y mostrar algo en pantalla si eso se quiere.
      case '/hola':
         res.write('Hola, que tal'); // Escribimos directamente en el body de la pagina wed.
         res.end(); // Enviamos el resultado al navegador. De lo contrario no se mostraria cambios.
         break;
   
      default:
         res.write('Error 404: No found pege.');
         res.end();
         break;
   }
      // Con res.writeHead enviamos una cabecera al navegaror.
      // Esta es informacion util para hacer peticiones a la pagina web, ya que de esta manera podemos comprobar
      // que es legitima la peticion entre otras cosas de seguridad.
   // res.writeHead(201,
   //    {
   //       'COntent-type': 'text/plain',
   //    }
   // );
   // res.write('Hola, ya se usar HTTP de node.js');
   // res.end();
}

console.log('Escuchando http en el puerto 3000');