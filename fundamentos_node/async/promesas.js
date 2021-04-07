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
   })
}

// *******************************
// Con promesas puedo anidar funciones sin caer en callbackHell.
console.log('Iniciamos proceso...')
hola('Carlos')
   .then(nombre => {
      return hablar(nombre);
   })
   .then(hablar)
   .then(hablar)
   .then(nombre => {
      return adios(nombre);
   })
   .then(adios)
   .then(nombre => {
      console.log('Terminamos proceso...')
   })
   .catch(error => {
      console.error('Ha ocurrido un error:');
      console.error(error);
   });
// Con catch detenemos las promesas y mostramos el error en pantalla.
// Para eso usamos reject en las promesas.