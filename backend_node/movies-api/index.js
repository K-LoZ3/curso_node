const express = require('express');
const app = express();

const { config } = require('./config/index');

// Rita principal.
app.get('/', function(req, res) {
  res.send('Hello work');
});

// Ruta localhost:3000/json muestra un json.
app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

// Esto es para no quemar el puerto sino que lo traiga de config.
app.listen(config.port, function() {
    console.log('Listening http://localhost:', config.port);
});