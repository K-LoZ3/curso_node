const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies'); // Importamos el router.

// body parser. Para que sepa interpretar los json en las rutas cuando pasamos los datos.
app.use(express.json());

// Usamos la funcion para manejar el router o ruta /api/movies
moviesApi(app);

// Ejemplos.
// *********************************************************************
// Rita principal.
app.get('/', function(req, res) {
  res.send('Hello work');
});

// Ruta localhost:3000/json muestra un json.
app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

// *********************************************************************
// Funcion para ver si el año es divisible por 4, 100 o 400.
function leapYear(year, div) {
  return year % div === 0;
}
// Detectar bisiestos con parametro en la url.
app.get('/leap/:year', function(req, res) {
  const { year } = req.params;
  if(leapYear(year, 4) && !leapYear(year, 100) || leapYear(year, 400)) {
    res.send(`El año ${year} es bisiesto.`);
  } else {
    res.send(`El año ${year} no es bisiesto.`);
  }
});
// Fin de ejemplos.
// *********************************************************************

// Esto es para no quemar el puerto sino que lo traiga de config.
app.listen(config.port, function() {
  console.log('Listening http://localhost:', config.port);
});