const os = require('os');
// os trae funcionalidad para ver informacion de bajo nivel de la maquina que esta corriendo.
// Podremos acceder a la memoria ram, al tipo de sistema de archivo, al numero de cores que tiene el nucleo.

// Con .arch accedemos a la arquitectura. Esto debuelve x64 el mi laptop.
// Util para saber si se compila de una forma u otra.
console.log(os.arch());

// Con platform podemos saber en que plataforma corre la app.
// Util para saber que commandos puedo usar entrre otras cosas que se pueden diferenciar de sistema operativo.
console.log(os.platform());

// Con .cpus podemos acceder a la informacion de la cpu del sistema.
// Tiempos, modelos, nucleos, velocidad, entre otras.
// Util para saber cuantos procesos se puden levantar al mismo tiempo...
console.log(os.cpus());
console.log(os.cpus().length);

// Con la propiedad .constants podemos acceder a los errores del sistema.
// Con esto mostramos informacion de errores del sistema, prioridad errores...
console.log(os.constants);

// Con .freemen podemos ver cuanta memoria tenemos libre en bites.
// Util para saber si una operacion que se va a hacer se puede ejecutar con esa memoria.
console.log(os.freemem()); // Mostramos los bytes en memoria.

const SIZE = 1024;
// Funcion para transformar de bytes a kilobytes
function kb(bytes) {
   return bytes / SIZE;
}
// Funcion para transformar de kilobytes a megabytes
function mb(bytes) {
   return kb(bytes) / SIZE;
}
// Funcion para transformar de megabytes a gigabytes
function gb(bytes) {
   return mb(bytes) / SIZE;
}

console.log(kb(os.freemem())); // Mostramos kb
console.log(mb(os.freemem())); // Mostramos mb
console.log(gb(os.freemem())); // Mostramos gb

// Con .totalmen accedemos al total de la memoria.
console.log(gb(os.totalmem())); // Mostramos el total de la memoria ram el gb.

// Con .homedir podemos ver el directorio raiz del usuario.
// Util para guardar datos. Ejemplo un juego que necesite almacenar informacion de la partida o mapa.
console.log(os.homedir());

// Con .tmpdir vemos la direccion de la carpeta tmp. Esta es la carpeta para los archivos temporales.
// Util para algo similar a lo anterior, pero en este caso seran temporales estos archivos.
console.log(os.tmpdir());

// Con .hostname podemos vemos el nombre de host de la maquina.
// Util para servidores.
console.log(os.hostname());

// Con networkInterfaces vemos las interfaces de red a la que esta conectada la maquina.
// Util para ver por donde esta la direccion ipv4 o 6.
console.log(os.networkInterfaces());