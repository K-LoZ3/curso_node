const fs = require('fs');

// El out y err los creamos de esta manera para que por defecto
// todo lo que imprimimos por .log se escriba en out.log y lo que
// imprimimos en .error se escriba en err.log.
// Creamos un stream para crear un log cada que escriba en coonsola.
const out = fs.createWriteStream('./out.log');
// Creamos un stream para que cree un log cuando imprima errores.
const err = fs.createWriteStream('./err.log');

// Creamos una nueva consola para que no imprima en la consola por defecto.
// De esta manera tenemos una consola personalizada.
// .Console es una clase consola.
const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error('Oooop!'));
}, 2000);