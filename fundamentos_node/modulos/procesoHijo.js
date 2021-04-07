// https://nodejs.org/api/process.html

// En node podemos trabajar con procesos hijos (correr otros procesos en el sistema / otros hilos)
// Un proceso es algo que se ejecuta y termina. Podemos levantar otros procesos.
// con child_process.
const { exec, spawn } = require('child_process'); // o const exec = require('child_process').exec;

// Con exec podemos ejecutar comandos en la consola. 'ls -la' es para mostrar los archivos y carpetas en forma de lista. (Esto porque estamos en linux, para windows es 'dir').
// El segundo parametro despues del comando a ejecutar en consola es una funcion.
// Esta funcion recive un error, el resultado de esta ejecucion (Salida principal estandar) y el estandar error por si ocurrio un error en la consola.
// El primer error me parece que es un error de ejecucion de esto, puede que sea que no existe este comando o problemas con otra cosa similar. El segundo error me parece que
// se debe a errores dentro de la consola. Como que al momento de ejecutar un comando este termine con algun problema. (Puede que 'cd nombreCarpeta' no exista esta carpeta).
exec('ls -la', (err, stdout, sterr) => {
   if(err) {
      console.error(err);
      return false;
   } // Esto para que si hay error no ejecute nada mas.

   console.log(stdout);
});

// Imprime en consola....
// total 24
// drwxr-xr-x 5 k-loz3 k-loz3 4096 Mar 25 16:02 .
// drwxr-xr-x 8 k-loz3 k-loz3 4096 Mar 20 07:57 ..
// -rw-r--r-- 1 k-loz3 k-loz3  733 Mar 20 19:00 README.md
// drwxr-xr-x 2 k-loz3 k-loz3 4096 Mar 25 15:37 async
// drwxr-xr-x 2 k-loz3 k-loz3 4096 Mar 20 16:41 conceptos
// drwxr-xr-x 2 k-loz3 k-loz3 4096 Mar 26 16:24 modulos

// Ejecuta 'node modulos/console.js' como si lo fura ejecutado en consola.
// y muestra el resultado.
exec('node modulos/console.js', (err, stdout, sterr) => {
   if(err) {
      console.error(err);
      return false;
   } // Esto para que si hay error no ejecute nada mas.

   console.log(stdout);
});

// Con spawn los parametros del comando se pasan mediante un array como segundo parametro.
// Si necesitamos un proceso que necesitamos que sea mas complejo, que necesitamos manejar
// verificar y usar dentro de la aplicacion en diferentes momentos o maneras, debemos usar spawn.
// La diferencia con exec es que el anterior ejecuta el proceso en otro hilo igual que spawn pero
// lo ejecuta y todo se debe manejar dentro del callback de exec. Es para cosas sencillar (Ejecutar,
// comprobar, mirar entre otras cosas). Con spawn podremos hacer todo eso y mas ya que todo queda
// guardado como un objeto con funciones y demas.
let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid); // Con esto imprimimos la id del proceso.
console.log(proceso.connected); // Con esto sabemos si el proceso esta conectado. Como no ha pasado el tiempo de ejecucion sale false pero al pasar el tiempo se puede saber.

// Con esti podemos acceder a las salida estandar (al resultado).
// Se hace de esta manera ya que es orientado a eventos. El evento "data" es el que devuelve el resultado. Esto es dentro de .on.
proceso.stdout.on("data", function(dato) {
   console.log('Esta muerto el proceso?');
   console.log(proceso.killed); // Con esto sabemos si el proceso ha terminado o esta muerto.
   console.log(dato.toString()); // Imprimimos el resultado.
});

// Aqui vemos si ya termino el proceso mediante .on y el evento "exit".
proceso.on("exit", () =>
   console.log("proceso end; proceso.killed:", proceso.killed)
);