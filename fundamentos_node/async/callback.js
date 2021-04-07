function soyAsincrona() {
   console.log('Soy una funcion asincrona');
}

console.log('Iniciando...');
soyAsincrona(); // Esto no es asincrono.
console.log('Terminando...');

function yoSiSoyAsincrona() {
   setTimeout(function() {
      console.log('No miento, yo si soy asincrona.');
   }, 1000);
}

yoSiSoyAsincrona(); // Esto si es asincrona.
console.log('Fin del programa.');

//La asincronia se puede generar mediante en setTimeout
console.log('Iniciando proceso...');
function soyAsincrono(elCallback) {
   console.log("Asigno setTimeout para volver asincrona una función como esta misma: \n " + soyAsincrono);
   setTimeout(function(){
      console.log("Pasaron 3 segundos y me ejecuté");
      elCallback();
   }, 3000)
}

/* ****************************************************************************** */

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
   setTimeout(function() {
      console.log('Adios', nombre); otroCallback();
   }, 1000);
}

// Estas funciones son asincronas pero se ejecutaran cuando terminen el proceso. Cuando queremos que sean
// asincronas pero que se ejecuten en un orden, usamos callbacks ya que de esta manera las obligamos a que
// tengan un orden expecifico. En este caso no sera asi.
hola('Alejandro estás probando  "hola" las funciones independientemente, las pasas vacías', function () {});
adios('Alejandro estás probando "adios" las funciones independientemente, las pasas vacías', function () {});

// En este caso si seran asincronas y tendran un orden expecifico de ejecucion.
hola('Alejandro', function (nombre) {
   adios(nombre, function() {
      console.log('Terminando proceso...');
   });
});