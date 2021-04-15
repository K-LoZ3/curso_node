// Importamos mongo para poder usar las configuraciones de cliente de mongo db.
// ObjectId sera usado en la siguiente clase.
const { MongoClinet, ObjectId } = require('mongodb');
const { config } = require('../config'); // Importamos las configuraciones para tener acceso a las variables de entorno.

// Con encodeURIComponent aseguramos que si hay algunos caracteres expeciales no tengamos problemas al conectarnos.
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.port}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    // Definimos el cliente.
    this.client = new MongoClinet(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME; // Definimos el nombre de la base de datos.
  }

  // Usamos un singleton para la coneccion.
  // De esta manera, si hay una coneccion, esto devolvera la misma coneccion o creara una de lo contrario.
  connect() {
    // Como .connection no lo definimos dentro de la clase, esta funciona como una variable estatica.
    if (!MongoLib.connection) {
      // Con promesas hacemos la peticion de conneccion y esperamos que connecte.
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err); // Manejamos el error si lo hay.
          }

          // Dejamos un mensaje si conecta.
          console.log('Connected succesfully to mongo.');
          // Retornamos la coneccion.
          resolve(this.client.db(this.dbName));
        });
      });
    }

    // Retornamos la coneccion si existe o si esta es creada.
    return MongoLib.connection;
  }
}

// Exportamos la clase.
module.exports = MongoLib; 