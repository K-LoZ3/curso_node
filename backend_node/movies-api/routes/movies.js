const express = require('express');

// Eliminamos moviesMock ya que este sera traido por la capa de servicios.
// const { moviesMock } = require('../utils/mocks/movies'); // Archivos de base de datos falsa por el momento.
const MoviesService = require('../services/movies');

/* 
  Las rutas solo deben manejar url y parametros.
  Los servicios seran los que tengan la logica para las repuestas de los endPoints.
*/

// Esta funcion nos permite ser dinamicos y controlar que app consumira la ruta.
function moviesApi(app) {
  const router = express.Router(); // Creams un router.
  app.use('/api/movies', router); // Esta direccion usara este rourer.

  // Instanciamos la clase de los servicios.
  const moviesService = new MoviesService();

  // Este get del home se refuere a la ruta principal del router ( /api/movies ).
  router.get('/', async function(req, res, next) {
    // Se usa try/catch porque es codigo es asincrono pero con promesas y async/await.

    const { tags } = req.query; // Estos tags como vienen del query son los que se ponen el '?' el nombre del query.
    // Estos se pueden concatenar.

    try {
      // Vamos a filtrar por tags. Y esos tags se reciven del query de la url.
      // Lo pasamos a la capa de servicios.
      const movies = await moviesService.getMovies({ tags }); // Pedimos los datos del archivo falso.
      // Respondemos con estatus 200 y pasamos los datos que recivimos del archivo falso
      // mas un mensaje indicando lo que hicimos.

      throw new Error('Inducimos error para probar el middleware de error.')

      res.status(200).json({ 
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err); // Manejamos el error.
    }
  });

  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;

    try {
      const movie = await  moviesService.getMovie({ movieId });
      res.status(200).json({ 
        data: movie, // Retornamos la pelicula.
        message: 'movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    // Para el post los datos pasan es en el cuerpo de la peticion.
    // Entonces seria const { body } = req; Pero como no queremos que la variable
    // se llame body le ponemos un alias movie con { body: movie }
    const { body: movie } = req;

    try {
      const createdMovie = await  moviesService.createMovie({ movie });
      res.status(201).json({  // El 201 es porque ese es el estatus code de crear.
        data: createdMovie,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function(req, res, next) {
    // Recivimos el cuerpo y el id de la pelicula que se va a actualizar.
    const { body: movie } = req;
    const { movieId } = req.params;
    
    try {
      const updatedMovieId = await  moviesService.updateMovie({ movieId, movie });
      res.status(200).json({ 
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  // Reto Patch
  router.patch("/:movieId", async function(req,res,next) {
		const { movieId } = req.params;
		const { body: movie } = req;

		try {
			const updatedMovieId = await moviesService.partialUpdateMovie({ movieId, movie });

			res.status(200).json({
				data: updatedMovieId,
				message: "movie updated partially"
			});
		}
		catch(error) {
			next(error);
		}
	});

  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;

    try {
      const deletedMovieId = await  moviesService.deleteMovie({ movieId });
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