// https://nodejs.org/api/process.html
//const process = require('process');

// No hace falta importar process ya que esta incluido como glabal dentro de node.

// beforeExit es el evento que escucha antes de terminar la ejecucion de la app.
// De esta manera todo lo que este en esta funcion se ejecutara justo antes de terminar el programa.
process.on("beforeExit", () => {
  console.log("Ey !! El proceso esta a punto de acabar");
});

// exit es el evento justo despues de terminado el programa.
// Con este se puede ejecutar codigo justo al acabar el programa.
process.on("exit", () => {
  console.log("El proceso acabo");

  // Como este es el fin del proceso, si colocamos un setTimeout, no se mostrara lo que se programe.
  // Ya que se lleva a otro hilo, como termina el programa aqui, no se ejecuta el otro hilo porque el programa muere.
  setTimeout(() => {
    console.log(
      "No se muestra ya que se manda a otro hilo y el programa mata este hilo con esto ultimo, de esta manera mata el programa."
    );
  }, 0);
});

// uncaughtException es el evento que ocurre cuando susede un error y no es capturado.
// Con este podemos mostrar el error o manejarlo si no se hace con un try/catch.
process.on("uncaughtException", (err, origen) => {
  console.log(`Ocurio un error: ${err.message}`);

  // Este si se imprime ya que no es lo ultimo que hara el programa.
  // Este se manda a otro hilo antes.
  setTimeout(() => {
    console.log("Esto viene de las excepciones.");
  }, 0);
});

// functionQueDaError(); // Forzamos el error para ver como funciona uncaugthException.

console.log("Esto si el error no se recoje, no sale.");
