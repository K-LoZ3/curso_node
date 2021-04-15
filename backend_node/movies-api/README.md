Crearemos el backen del proyecto platzi video.
1. Iniciamos node. ~~~ npm init -y ~~~
2. Incluimos los scripts para trabajar mejor no el backend en node. Eto para que recarge la app con los cambios.
  ~~~json
  "dev": "DEBUG=app:* nodemon index",
  "start": "NODE_ENV=production node index"
  ~~~
2. Incluimos eslint para tener el codigo formateado.
  .eslintrc.json
  ~~~json
  {
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "extends": ["eslint:recommended", "prettier"],
    "env": {
      "es6": true,
      "node": true,
      "mocha": true
    },
    "rules": {
      "no-console": "warn"
    }
  }
  ~~~
3. Creamos el .prettierrc.jon.
  ~~~json
  {
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
  }
  ~~~
4. Instalamos las dependencias.
  ~~~
  npm i express dotenv
  ~~~
5. Instalamos las dependencias de desarrollo.
  ~~~
  npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier
  ~~~
6. Instalamos hooks para que el codigo se formatee cada que agamos un commit.
  ~~~
  npx mrm lint-staged
  ~~~
Lectura de la clase
El objeto req (Request) en Express representa el llamado HTTP y tiene diferentes propiedades del llamado, como la cadena de texto query (Query params), los parámetros de la URL (URL params), el cuerpo (Body), los encabezados (HTTP headers), etc.
Para acceder al req basta con acceder al primer parámetro de nuestros router handlers (router middleware) ó middleware.
Como por ejemplo así lo hemos visto siempre:
~~~
app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});
~~~
Pero también funcionaria sin problemas:
~~~
app.get("/user/:id", function(request, response) {
  response.send("user " + request.params.id);
});
~~~
Exploremos las propiedades más importantes
1. req.body
Contiene los pares de llave-valor de los datos enviados en el cuerpo (body) del llamado (request). Por defecto es undefined pero es establecido cuando se usa algún “body-parser” middleware como body-parser y multer.
En Postman cuando hacemos un request y enviamos datos en la pestaña Body, estos middlewares son los que nos ayudan a entender el tipo de datos que vamos a recibir en el req.body.
Aquí podemos ver como se pueden usar estos middlwares para establecer el valor del req.body:
~~~
const app = require("express")();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer(); // Para datos tipo multipart/form-data

app.use(bodyParser.json()); // Para datos tipo application/json
app.use(bodyParser.urlencoded({ extended: true })); // Para datos tipo application/x-www-form-urlencoded

app.post("/profile", upload.array(), function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
~~~
Más información sobre los diferentes formatos que puede tener el body: https://developer.mozilla.org/es/docs/Web/HTTP/Methods/POST
2. req.params
Esta propiedad contiene un objeto con las propiedades equivalentes a los parámetros nombrados en la ruta. Por ejemplo, si tenemos una ruta de la forma /user/:name entonces la propiedad name está disponible como req.params.name y allí podremos ver su valor. Supongamos que llamaramos a la ruta con /user/glrodasz, entonces el valor de req.params.name sería glrodasz. Este objeto por defecto tiene el valor de un objeto vacío {}.
~~~
// GET /user/glrodasz
req.params.name;
// => "glrodasz"
~~~
3. req.query
Esta propiedad contiene un objeto con las propiedades equivalentes a las cadenas de texto query de la ruta. Si no hay ninguna cadena de texto query tendrá como valor por defecto un objeto vacío {}.
req.query.q;
~~~
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order;
// => "desc"

req.query.shoe.color;
// => "blue"

req.query.shoe.type;
// => "converse"
~~~
Más información sobre los query strings en: https://es.wikipedia.org/wiki/Query_string y https://tools.ietf.org/html/rfc3986#section-3.4
4. Response Object
El objeto res representa la respuesta HTTP que envía una aplicación en Express.
Para acceder al res basta con acceder al segundo parámetro de nuestros router handlers (router middleware) o middleware.
Como por ejemplo así lo hemos visto siempre:
~~~
app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});
~~~
Pero también funcionaría sin problemas:
~~~
app.get("/user/:id", function(request, response) {
  response.send("user " + request.params.id);
});
~~~
Exploremos los métodos más comunes
1. res.end()
Finaliza el proceso de respuesta. Este método viene realmente del core de Node.js, específicamente del método response.end() de http.ServerResponse.
Se usa para finalizar el request rápidamente sin ningún dato. Si necesitas enviar datos se debe usar res.send() y res.json().
~~~
res.end();
res.status(404).end();
~~~
2. res.json()
Envía una respuesta JSON. Este método envía una respuesta (con el content-type correcto) y convierte el parámetro enviado a una cadena de texto JSON haciendo uso de JSON.stringify().
El parámetro puede ser cualquier tipo de JSON, incluido un objeto, un arreglo, una cadena de texto, un boolean, número, null y también puede ser usado para convertir otros valores a JSON.
~~~
res.json(null);
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
~~~
3. res.send()
Envía una respuesta HTTP. El parámetro body puede ser un objeto tipo Buffer, una cadena de texto, un objeto, o un arreglo. Por ejemplo:
~~~
res.send(Buffer.from("whoop"));
res.send({ some: "json" });
res.send("<p>some html</p>");
res.status(404).send("Sorry, we cannot find that!");
res.status(500).send({ error: "something blew up" });
~~~
#### Anatomia de una API Restful
REST (Representational State Transfer) es un estilo de arquitectura para construir web services, no es un estándar pero si una especificación muy usada.
Las peticiones HTTP van acompañadas de un “verbo” que define el tipo de petición:
GET. Lectura de datos.
PUT. Reemplazar datos.
PATCH. Actualizar datos en un recurso específico.
POST. Creación de datos.
DELETE. Eliminación de datos.
No es recomendable habilitar un endpoint de tipo PUT y DELETE para toda nuestra colección de dato.
Las siglas CRUD vienen de las palabras en inglés:
Create - crear
Read - leer
Update - actualizar
Delete - eliminar

https://www.mongodb.com/download-center/compass
#### Conexión usando MongoDB Compass
Si nosotros copiamos el Mongo URI desde Mongo Atlas podemos conectarnos fácilmente con MongoDB Compass.
- Iniciamos sesión en MongoDB Atlas https://www.mongodb.com/cloud/atlas
- Nos vamos a la sección de Clusters en el menú lateral izquierdo.
- Seleccionamos connect en nuestro cluster sandbox.
- Seleccionamos la opción Connect with MongoDB Compass.
- Si no tenemos MongoDB Compass instalado, podemos descargarlo desde allí. Si ya lo tienes instalado continua con el paso 6.
- Le damos clic en el botón copy para copiar el Mongo URI.
- Abrimos MongoDB Compass e inmediatamente va a reconocer nuestra URI que tenemos en el portapapeles.
- Hacemos clic en yes para que nos cree una nueva conexión, pero es necesario introducir el password del usuario de la base de datos.
- Podemos ponerle un nombre favorito y darle en Create favorite y luego en Connect.