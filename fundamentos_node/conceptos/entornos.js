// let saludo = 'hola';
//¿Qué ocurre cuando quiero llamar un valor que no va dentro del software,
// si quiereo llamar una API, o que necesito una clave, o un token?
// Buscamos en el proceso y dentro las variables de entorno, dentro de estas
// buscamos la variable que pondremos lugo para pasar su valor, lo asignamos
// a una variable dentro del programa para poderla usar y listo, tenemos
// valores a traves de consola.
let nombre = process.env.NOMBRE || 'Anonimo';
// Es buena practica que las variables de entorno sean en
// MAYUSCULAS_Y_SEPARADAS_CON_GION_BAJO.

// console.log(saludo);
console.log('Hola ' + nombre);
// Ejecutamos pero para que la variable nombre se actualice con un valor
// debemos pasarlo en la terminal ya que lo estamos pidiendo a travez del proceso
// con process accedemos al proceso y con env accedemos a las variables de entorno
// del proceso. Para pasarla definimos la variable primero y luego ejecutamos el
// documento. (NOMBRE=Carlos node conceptos/entornos.js).
// Para definir varias varibles en consola solo se separan por espacios.
// (CARLOS=Carlos WEB=kloz.com node conceptos/entornos.js).