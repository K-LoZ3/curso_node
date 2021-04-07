/* 
** Stream**
Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben.
Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming
(readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo
tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el
video por completo para poder verlo.

buffer
Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la
reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa
reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un
espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks),
para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de
forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos
un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está)
*/

// fs tiene funcionalidades para el manejo de streams. Esto lo usaremos para leer un archivo
// y almacenarlo en un buffer para luego usar los datos.
const fs = require('fs');

// Importamos stream para un mejor manejo de los streams.
const stream = require('stream');

// Con util podremos trabajar con herencia automatica.
const util = require('util');

let data = ''; // Buffer improvisado.

// Creamos el stream del archvo input.txt. Esto creara un objeto para manejar el stream de este archivo.
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Establecemos el encoding como utf-8 para que lo codifique como texto y pueda tener todos los caracteres.
readableStream.setEncoding('UTF8');

// El evento 'data' es para cuando el stream recive datos.
readableStream.on('data', function(chunk) {
   // Con esto imprimimos directamente los datos que van llegando del stream.
   // Estos datos se imprimiran en buffers. Dependiendo del tamaño del archivo y de la memoria, los buffers
   // seran mas grandes o pequeños.
   console.log(chunk);

   // Almacenamos los datos en el buffer improvisado para no perderlos.
   // Ya que 'chunk' es un buffer con un tamaño expecifico, este se resetea cuando agrega nuevos valores y no caben en el tamaño que tiene.
   data += chunk;
});

// El evento 'end' es para cuando termina de leer todos los datos del origen.
readableStream.on('end', function() {
   console.log(data);
});

// Con esto imprimimos directamente en el buffer de la salida en consola.
// process.stdout en un buffer de escritura.
process.stdout.write('Hola');
process.stdout.write('que');
process.stdout.write('tal');

// Con este stream podemos crear streams que sean de lectura y escritura al mismo tiempo.
// Para eso necesitamos un stream de transformacion. (stream.Transform).
const Transform = stream.Transform;

function Mayus() {
   // Creamos un constructor para esta clase.
   Transform.call(this);
}

// Hacemos que Mayus herede todo lo que necesita de Transform (stream.Transform).
util.inherits(Mayus, Transform);

// Cramos la transformacion.
// El _transform es una propiedad del prototype que viene del stream de trasnformacion.
Mayus.prototype._transform = function(chunk, codificacion, callback) {
   // Hacemos la transformacion a mayusculas.
   chunkMayus = chunk.toString().toUpperCase();
   // Lo enviamos a donde lo necesitemos.
   this.push(chunkMayus);
   // Ejecutamos el callback.
   callback();
}

// Instanciamos la clase.
let mayus = new Mayus();

// Lo que hace pipe() es limitar el almacenamiento en el buffer para que no haya una
// sobresaturacion a la hora se pasar la secuencia de los datos.
// .pipe es la funcion que se utuliza para mandar de un sitio a otro.
// Con mayus como parametro de esta funcion lo que hacemos es que readeableStream pase a traves
// de mayus y lo cambie a mayusculas.
readableStream
   .pipe(mayus)
   // Con process.stdout le decimos que lo envie al stream de escritura de la consola, a ese buffer.
   .pipe(process.stdout);

/* 
   // Haciendolo con clases de ES6
   class MayusC extends Transform {
   _transform(chunk, codif, cb){
     let chunkMayus = chunk.toString().toUpperCase();
     this.push(chunkMayus);
     cb();
   }
 }
 
 let mayusC = new MayusC();
 readableStream.pipe(mayusC)
   .pipe(process.stdout);
*/