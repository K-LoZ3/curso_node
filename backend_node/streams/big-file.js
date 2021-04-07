const fs = require('fs');
const file = fs.createWriteStream('./big'); // Creamos el stream de scritura.

// 1e6 es notacion cientifica para 1 millon.
// Creamos el archivo "big" y escribimos 1 millon de veces el texto.
// Esto se hizo con un stream para que fuera agregando los textos.
// Me parece que no se usa streams re-escribe el texto 1 millon de veces
// y quedara como si solo se fuera escrito una vez.
for (let i = 0; i <= 1e6; i++) {
  file.write("Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor. Ay, ay, ay! Cuándo vendrá mi amor…Me arrodillo a los pies de mi amante, me levanto constante, constante. Dame la mano, dame la otra, dame un besito sobre la boca.Daré la media vuelta, Daré la vuelta entera,Con un pasito atrás,Haciendo la reverencia. Pero no, pero no, pero no, porque me da vergüenza, pero sí, pero sí, pero sí, porque te quiero a ti. ");
}

file.end();
