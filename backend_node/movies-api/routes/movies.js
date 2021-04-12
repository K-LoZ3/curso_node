const express = require('express');
const { moviesMock } = require('../utils/mocks/movies'); // Archivos de base de datos falsa por el momento.

// Esta funcion nos permite ser dinamicos y controlar que app consumira la ruta.
function moviesApi(app) {
  const router = express.Router(); // Creams un router.
  app.use('/api/movies', router); // Esta direccion usara este rourer.

  // Este get del home se refuere a la ruta principal del router ( /api/movies ).
  router.get('/', async function(req, res, next) {
    // Se usa try/catch porque es codigo es asincrono pero con promesas y async/await.
    try {
      const movies = await Promise.resolve(moviesMock); // Pedimos los datos del archivo falso.
      // Respondemos con estatus 200 y pasamos los datos que recivimos del archivo falso
      // mas un mensaje indicando lo que hicimos.
      res.status(200).json({ 
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err); // Manejamos el error.
    }
  });
}

// Exportamos para que podamos manejar esta ruta con el router.
module.exports = moviesApi;