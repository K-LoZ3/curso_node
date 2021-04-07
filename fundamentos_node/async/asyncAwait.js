function hola(nombre) {
   return new Promise(function(resolve, reject) {
      setTimeout(function () {
         if(nombre === '') {
            return reject('Nombre vacio.');
         } else {
            console.log('Hola, '+ nombre);
            return resolve(nombre);
         }
      }, 1500);
   });
   
}

function hablar(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(function() {
         console.log('Bla bla bla..');
         resolve(nombre);
      }, 1000);
   });
}

function adios(nombre) {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log('Adios', nombre);
         resolve(nombre);
      }, 1000);
   });
}

// ********************************
/* 
Asyn/Await es azucar sintactico, es decir, una forma muy legible y entendible de realizar código, un Async/Await no deja de ser una función asíncrona, la diferencia es que al usar esta sintaxis se podrá ver un código más legible.
Para usar correctamente esta sintaxis usamos Async para declarar una función asíncrona, cuando una función es asíncrona podremos usar dentro de su contexto el Await.
El Await es la manera en que le indicaremos a nuestro código que ha de “esperar” a que el evento al cual le indiquemos Await es importante para el proceso del código, por ende, para poder seguir ejecutando el proceso espere a que el evento se resuelva y retorne un valor.
Cuando este retorne un valor el código seguirá normalmente.
*/
async function main() {
   let nombre = await hola('Carlos');
   await hablar();
   await hablar();
   hablar(); // Esta se ejecutara en el momento que termine su propio setTimeout ya que no estara esperando a que termines las anteriores.
   await adios(nombre);
   console.log('Terminamos proceso...')
}

console.log('Iniciamos proceso...');
main();