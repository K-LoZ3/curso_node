function seRompe() {
   return 3 + z;
}

function otraFuncion() {
   seRompe();
}

// Para las funciones asincronas se debe usar el try/catch dentro de la propia funcion.
function seRompeAsincrona(callback) {
   setTimeout(function () {
      try {
         return 3 + z;
      } catch(err) {
         console.error('Error en asincrona');
         callback(err);
      }
   });
}

// Para asegurar o manejar los errores usamos try/catch.
// con estos manejamos los errores y evitamos que el programa
// se rompa por el error. Con esto lo manejamos, lo evitamos o
// continuamos con el programa si esta linea de codigo.
// Con este ejemplo no pasa nada si el programa continua.
// Puede que asi se pueda manejar otros programas o puede que se necesite
// reiniciar la ejecucion del codigo. En todo caso, con esto se maneja el error.
// Necesario para cerrar archivos que estaban abiertos antes de terminar el
// programa por este error, mover cosas o limpiar memoria.

// Si una funcion es capturada porque lanza un error esta ya no sigue con las otras funciones dentro de try
// ya que ejecuta el catch para manejar el error.
try {
   // seRompe(); // Saltara error porque z no esta definido.
   // otraFuncion(); // Funciona tanto aqui como en seRompe() ya que hace segimiento de donde es el error y donde se llama al error.
   seRompeAsincrona(function(err) { // Esta no es capturada por el try/catch ta que no esta dentro de nuestro hilo principal. Esta en otra pila de ejecucion.
      console.log(err.message);
   }); 
} catch(err) {
   console.error('Vaya, algo no esta bien'); // Avisamos del error.
   console.error(err.message); // Mostramos el error en consola.
   console.log('No pasa nada, lo hemos capturado.'); // Avisamos que el programa continua.
}

console.log('Fin del programa.'); // El programa continua e imprime esta linea.
