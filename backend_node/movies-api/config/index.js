require('dotenv').config();

// Creamos la  configuracion de las variables de entorno.
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
}

module.exports = { config };