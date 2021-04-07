function hola(nombre, miCallback) {
   setTimeout(function () {
      console.log('Hola, '+ nombre);
      miCallback(nombre);
   }, 1500);
}

function hablar(callbackHablar) {
   setTimeout(function() {
      console.log('Bla bla bla..');
      callbackHablar();
   }, 1000);
}

function adios(nombre, otroCallback) {
   setTimeout(function() {
      console.log('Adios', nombre);
      otroCallback();
   }, 1000);
}

//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma. y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar.
function conversacion(nombre, veces, callback) {
   if (veces > 0) {
      hablar(function () {
         conversacion(nombre, --veces, callback);
      });
   } else {
      adios(nombre, callback);
   }
}

// *******************************
// De esta manera el codigo se torna horizontal.
console.log('Iniciando proceso...');
// hola('Carlos', function (nombre) {
//    hablar(function() {
//       hablar(function() {
//          hablar(function() {
//             adios(nombre, function() {
//                console.log('Terminando proceso...');
//             });
//          });
//       });
//    });
// });

// Con recursividad lo hacemos mas facil.
hola('Carlos', function(nombre) {
   conversacion(nombre, 3, function() {
      console.log('Terminando proceso...');
   });
});


