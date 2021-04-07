// https://nodejs.org/api/fs.html

// Con este modulo se podran manejar archivos.
// Borrarlos, crearlos, modificarlos y demas.
// Las funciones son asincronas o sincronas y esto se puede elegin.
// La importancia depende de que se necesite.
const fs = require('fs');

// function leer(ruta, callback) {
//    fs.readFile(ruta, (err, data) => {
//       //leido
//       console.log(data.toString());
//    });
// }

// leer(__dirname + '/archivo.txt');

function leer(ruta, callback) {
   // Con esto leemmos archivos desde una ruta dada.
   // El segundo parametro es una funcion que recive un error y data que seria los datos leidos
   // del archivo. El error se debe manejar y el callback que tiene esta funcion es para ejecutar
   // el console.log que se le pasa luego.
   // La data se recibe como bite-code que es como un assi, por esto se usa .toString()
   fs.readFile(ruta, (err, data) => {
      callback(data.toString());
   });
}

leer(__dirname + '/archivo.txt', console.log); // Leemos y usamos console.log en el callback.

function escribir(ruta, contenido, callback) {
   // Con esta escribimos en un archivo nuevo. Esta funcion crea el archivo y escribe en el.
   // Para esto le pasamos la ruta completa con nombre del archivo y el contenido que tendra este
   // como segundo parametro, ya el tercero sera una funcion que recive un erro y data.
   // El error se debe manejar y la data no es muy necesaria pero trae informacion de la escritura.
   fs.writeFile(ruta, contenido, (err) => {
      if(err) {
         console.error('No se escribio correctamente', err);
      } else {
         callback('Se ha escrito correctamente');
      }
   });
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log); // Escribimos en un archivo totalmente nuevo.
leer(__dirname + '/archivo1.txt', console.log); // Leemos el archivo recien creado.

function borrar(ruta, callback) {
   // Con esta borramos cuarlquier archivo.
   // Necesitamos la ruta y una funcion de calback.
   // Esta funcion se puede manejar como en las otras, no tiene que ser el callback que tenemos
   // pero para este ejemplo no hace falta manejar errores o hacer algo mas.
   fs.unlink(ruta, callback);
}

borrar(__dirname + '/archivo1.txt', console.log); // Borramos el archivo recien creado.