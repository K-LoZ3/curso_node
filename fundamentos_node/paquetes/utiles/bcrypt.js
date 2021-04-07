// npm install bcrypt
// Se instala el paquete y ya podemos importarlo.
/* 
   La función de cifrado de bcrypt nos permite construir una plataforma de seguridad utilizando
   contraseñas encriptadas con Salt.
*/

const bcrypt = require("bcrypt");
const password = "NuncaParesDeAprender2020";

bcrypt.hash(password, 5, function(err, hash){
	console.log(hash)
});
// La consola nos entregaria una contraseña distinta en cada oportunidad.

// Para evaluar si una contraseña concuerda con un hash
bcrypt.compare(password, hash, function(error, result){
	console.log(result)
	console.log(error)
})
// Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash