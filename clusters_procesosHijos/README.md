¿Que es un Cluster en NodeJS?
  - Segun la documentacion: El módulo de clúster proporciona una forma de crear procesos secundarios que se ejecutan simultáneamente y comparten el mismo puerto del servidor.
Node.js ejecuta programación de un solo hilo, que es muy eficiente en la memoria, pero para aprovechar los sistemas de múltiples núcleos de las computadoras, el módulo Cluster le permite crear fácilmente procesos secundarios que cada uno ejecuta en su propio hilo único, para manejar la carga.
  - Segun mi analisis: El Cluster de NodeJS no es mas que tomar el hilo principal que ejecuta Node y usando los cores del procesador, crear mas hilos de ejecucion, pero que dependen del hilo principal, aun asi Node siguira ejecutandose en un solo hilo, solo que con los Clusters tendra sub-hilos podriamos decir que puedan ejecutar mas procesos, de esta manera manejar la carga al hilo principal.
Ahora bien se preguntaran como lo implemento: Segun la documentacion dice que se crea de esta manera:
~~~
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
~~~
Ahora bien, se preguntaran, que carajos significa todo eso, que aun estan como el principio; bien, no se me alarmen, vamos a explicar detalladamente por pasos del codigo, comencemos: La primera parte del codigo es algo que ya todos ustedes saben, traemos los modulos de ‘cluster’: nos permite instanciar nuestro cluster, y ‘http’: nos permite crear nuestro servidor.
~~~
const cluster = require("cluster");
const http = require("http");
~~~
La siguiente linea de codigo es esta:
~~~
const numCPUs = require("os").cpus().length;
~~~
Ustedes saben que hace esta linea, basicamente trae el modulo ‘os’ de Node y nos ayudara mediante el metodo ‘cpus()’ de ver todos los cores que tiene nuestro CPU y ‘length’ nos devolvera cuantos cores existen, esto nos devuelve el numero porque el metodo cpus() es un array de objetos, bien. Ya tenemos el numero de cores. La siguiente linea de codigo es esta:
~~~
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
~~~
Esta linea no es compleja, basicamente lo que dice es: Con una sentencia if preguntamos si el cluster que posee un metodo bool isMaster, si el cluster es el maestro o si es el principal, es decir que no tiene mas clusters instanciados aparte del principal, entonces como no tenemos otras instancias de clusters entrara y lanzara ese mensaje en consola con el numero del proceso que esta corriendo. Bien, la siguiente linea es esta:
~~~
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}
~~~
Basicamente lo que hara es, que instanciara o creara tantos hijos como cores tenga, creara un hijo para cada Core del procesador que previamente comprobamos cuantos habian. Simplemente el metodo fork() hara la instancia, es como en GitHub hacemos Fork a un repositorio, tomamos del repositorio padre una copia, en este caso hacen lo mismo, del cluster padre derivamos los hijos. En el siguiente codigo dice:
~~~
cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
~~~
En este seccion del codigo, abrimos un evento con ‘.on’ y nos asesoramos de cuanto el cluster muera con ‘exit’, el siguiente parametro es una funcion y recibe:
  - worker: Este es el cluster o la instancia del proceso.
  - code: Este nos dara el codigo de error si logra pasar algo.
  - signal: Este nos mostrara quien mato a nuestro cluster o instancia del proceso.
Y vemos en la consola como simplemente imprimimos en caso de que muera o matemos nuestro proceso, un mensaje accediendo al codigo del proceso o pid.
Ahora bien, si se da el caso de que el cluster no se el maestro o el principal hilo, este instanciara nuestro servidor en el puerto 8000 (Bueno, ya esto ustedes lo sabian xd), con el siguiente codigo:
~~~
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);
~~~
Por ultimo, imprimimos en consola los workers que hemos instanciados anteriormente, accediendo a su codigo de proceso o pid con el siguiente codigo:
~~~
  console.log(`Worker ${process.pid} started`);
}
~~~
En resumen, un cluster ayudara al hilo principal a manejar la carga o procesos utilizando los Cores del CPU.
Piensen en esto, el Hilo principal es la empresa y los hilos hijos (procesos hijos) son los empleados. (Espero que me entiendan).
Espero que les haya ayudado mi explicacion, si me he equivocado en algo por favor aclararlo con un comentario para el estudiante que lo lea pueda tenerlo en cuenta.
Recuerden #NuncaPararDeAprender