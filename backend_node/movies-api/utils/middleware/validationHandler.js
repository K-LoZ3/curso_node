function validate() {
  return false; // De momento validaremos que todo es correcto.
}

// Los parametros son el schema a validar y donde se hara esa validacion.
function validationHandler(schema, check = "body") {
  // Retornamos un middleware para que la app siga funcionando como debe.
  return function(req, res, next) {
    // Validamos que es schema es el correcto.
    const error = validate(req[check], schema);

    // Si no hay error ejecutamos el siguente middleware
    // de lo contrario lanzamos el middleware de error.
    error ? next(new Error(error)) : next();
  }
}

module.exports = validationHandler;