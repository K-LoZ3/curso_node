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

  router.get('/:movieId', async function(req, res, next) {
    try {
      // Retornamos la primera pelicula porque de momento no interesa que pelicula retornemos.
      // Mas adelante usaremos movieId
      const movie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({ 
        data: movie, // Retornamos la pelicula.
        message: 'movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    try {
      // Aunque aqui recive las peliculas para el post retornaremos la ultima pelicula.
      // Cuando trabajemos con servicios lo haremos como debe ser.
      const createdMovie = await Promise.resolve(moviesMock[0]);
      res.status(201).json({  // El 201 es porque ese es el estatus code de crear.
        data: createdMovie,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function(req, res, next) {
    try {
      // Retornamos el id de la primera movie porque de momento no interesa que pelicula retornemos.
      // Mas adelante usaremos movieId
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({ 
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {
    try {
      // Retornamos el id de la primera movie porque de momento no interesa que pelicula retornemos.
      // Mas adelante usaremos movieId
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({ 
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

// Exportamos para que podamos manejar esta ruta con el router.
module.exports = moviesApi;