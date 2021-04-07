// https://nodejs.org/api/console.html

// Console nos sirve para manejar la consola.
// Con esta podemos tener mucha informacion de que sucede, cuanta veces pasa, como pasa entre otras.

// Impresion simple en consola.
console.log('Hola');

// Hace casi lo mismo que .log ya que va al mismo sitio (la consola) pero cuando
// la app sea mas avanzada con modulos, plugins que puedan sobreescribir la consola por defecto
// se pueden tener log para cosas que se quieren guardar o info para informar algo como
// eventos que no son importantes pero que si es algo necesario informarlo para saber que el
// codigo paso por ahi.
console.info('Algo');

// Cuando quiero que logear un error y quiero que este se guarde en un sitio diferente.
// Con .error se guardara en otro sitio y puede que la consola lo pinte diferente para
// identificarlo mejor.
console.error('Error');

// Si se quiere informar posibles errores o potenciales de error.
// Con .warn se informa en consola de posibles errores.
console.warn('Warnin');

// Si se quieren mostrar datos en formato de tabla se usa .table.
// Con esto podemos informar con una mejor visualizacion.
var tabla = [
   {
      a: 1,
      b: 'Z',
   },
   {
      a: 2,
      b: 'AA',
   },
]

console.table(tabla); // Imprimimos una tabla en la consola.

// Con .group podemos agrupar varios logs en un solo grupo.
// de esta manera lo podemos tener estructurado como grupos de textos a imprimir.
// Puede ser como conversaciones. En la consola se imprime identado para que se visualice
// mejor. La forma de usarlo es como abrir el inicio del grupo y cerrarlo al final con .groupEnd.
console.group('conver1'); // Comienza PRIMER grupo de conversacion.
console.log('Hola1');
console.log('Como estas1');
console.log('Bien1');
console.group('conver2'); // Comienza SEGUNDO grupo de conversacion.
console.log('Hola2');
console.log('Como estas2');
console.log('Bien2');
console.groupEnd('conver2'); // Termina SEGUNDO grupo de conversacion.
console.groupEnd('conver1'); // Termina PRIMER grupo de conversacion.
// Ejemplo dentro de funciones real.

//funciones
function funcion1() {
   console.group('Funcion 1');
   console.log('Esto es de funcion 1');
   console.log('Esto tambien');
   funcion2();
   console.log('Hemos vuelto a la funcion 1');
   console.groupEnd('Funcion 1')
}
   
   
function funcion2() {
   console.group('funcion 2');
   console.log('Ahora estamos en la funcion 2');
   console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();

// Los ontadores son otra de las funciones.
// Con .count contamos la cantidad de veces que se ha usado esta palabra con esta funcion.
// Para reiniciar el contador solo usamos .countReset y esto reinicia el contador.
console.count('Hola');
console.count('Hola');
console.count('Carlos');
console.count('Carlos');
console.count('Carlos');
console.count('Hola');
console.countReset('Hola');
console.count('Carlos');
console.count('Hola');