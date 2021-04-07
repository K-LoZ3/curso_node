// Benchmark = prueba de rendimiento o comparativa en inglés.
/* 
La función console.time(‘nombre’) inicia un temporizador que se puede usar para rastrear
cuánto tiempo dura una operación. El temporizador sera identificado por el nombre dado a
la consola. Ese mismo nombre se utilizara cuando se llame a console.timeEnd(‘nombre’)
para detener el temporizador y obtener el tiempo demorado durante el proceso.
*/

console.time("Todo");
let suma = 0;

console.time("Temporizador");
for (var i = 0; i < 10000; i++) {
  // Nuestro codigo entre los temporizadores puede ser cualquier cosa.

  suma += 1;
}

console.timeEnd("Temporizador");
console.log(suma);

suma = 0;

console.time("Temporizador");
for (var i = 0; i < 10000; i++) {
  // Nuestro codigo entre los temporizadores puede ser cualquier cosa.

  suma++;
}

console.timeEnd("Temporizador");
console.log(suma);

// Con las funciones asincronas.
function asincrona() {
   return new Promise ( (resolve) => {
      setTimeout(() => {
         console.log('Termina el proceso asincrono');
         resolve();
      }, 1000);
   });
}

console.time('Asincrona'); // Iniciamos temporizador para funcion asincrona.
console.log('Inicia asincrono');
// Ejecutamos la funcion.
asincrona()
   .then (() => {
      console.timeEnd('Asincrona'); // Finalizamos el temporizador dentro de la funcion (callback).
   });
console.timeEnd("Todo");
