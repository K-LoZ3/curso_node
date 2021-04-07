// Instalamos gulp
// npm init -y
// npm install gulp
// Para levantar un pequeño server con gulp.
// npm install gulp-server-livereload
/*
  Trabajando automatizacion de procesos con gulp
*/
const gulp = require('gulp');
const server = require('gulp-server-livereload');

/*
  Iniciar una tarea con gulp, usando task que recibe dos parametros
  1. El nombre de la tarea.
  2. Un callback que tambien recibe un callback
*/
gulp.task('build', function(fn){
  console.log('Contruyendo el sitio');
  setTimeout(fn, 1200);
});

gulp.task('serve', function(fn){
  // pipe encadena streams
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }))
});

// Encadenar tareas
gulp.task('default', gulp.series('build', 'serve'));

// En www/index.html
/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
  </body>
</html>
*/

// En package.json
/* 
{
   "name": "automatizacion",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "gulp",
      "build": "gulp build",
      "serve": "gulp serve"
   },
   "author": "",
   "license": "ISC"
}
*/