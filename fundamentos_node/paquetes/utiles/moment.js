// npm i moment
/* 
   Moment. js es una librería que nos permite solventar estos problemas e implementa
   un sistema de manejo de fechas mucho más cómodo.
*/

const moment = require('moment');

const ahora = moment();

// Para imprimir toda la funcionalidad de este objeto.
console.log(ahora);

// Para imprimir la fecha.
console.log(ahora.toString());

// Para formatear una fecha
console.log(ahora.format('MM/DD/YYYY HH:MM A')); // 04/11/2020 20:10 PM

// Para validar una fecha
console.log(moment('2020-04-11').isValid()); // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
console.log(moment('2018-04-11').fromNow()); // Hace 2 años

// Para agregar o eliminar años, días o meses
console.log(moment('2020-04-11').add(1, 'years')); // 2021-04-11
moment('2020-04-11').subtract(1, 'years'); // 2019-04-11