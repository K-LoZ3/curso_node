// npm install sharp
/* 
   Sharp puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles
   con la web de diferentes dimensiones.
*/

const sharp = require('sharp');

// La siguiente reducira una imagen de 120x120 o cualquier tamaño a 80x80 y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp('imagen.png')
   .resize(80, 80)
   .toFile('imagen_80x80.png');

// Hace lo mismo pero tambien la pone en blanco y negro.
sharp('imagen.png').resize(80).grayscale().toFile('imagen_80x80_escala-gris.png');