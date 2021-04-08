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