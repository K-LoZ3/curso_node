//importamos el modulo readable
const { Readable } = require('stream');

//instanciamos un nuevo readable stream
const readableStream = new Readable({
  /**
   * constructor
   * @param {*} size tamaño del buffer
   * de lectura cuando se crea un stream se puede definir el tamaño (size) del buffer,
   * este tamaño representa el número de bytes que el buffer puede almacenar, esto lo
   * puedes utilizar cuando tienes un tamaño de memoria limitado y quieres asegurarte
   * que el buffer no sobrepasen un tamaño que perjudique tu servidor, esto no se
   * menciona en el video pero este size se define en el constructor (el método
   * read(size)) del readable stream, este parámetro es opcional y por defecto es de
   * 16kb para un readable stream normal y de 64kb para un readable stream del fs.
   */
  read(size) {
    setTimeout(() => {
      //la letra es mayor que z
      if (this.currentCharCode > 90) {
        //finalizamos la lectura
        this.push(null);
        return;
      }
      /**
       * agregamos la letra al buffer y después
       * se le suma 1 
       */
      this.push(String.fromCharCode(this.currentCharCode++));

    }, 100);
  }
})

/**
 * inicializamos el atributo chartCode
 * y le asignamos el valor  ASCII de la letra A
 */
readableStream.currentCharCode = 65;
/**
 * manejamos el stream de lectura y le asignamos
 * un stream de salida por pantalla
 */
readableStream.pipe(process.stdout);