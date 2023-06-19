const express = require('express');
const app = express();
const fs = require('fs');

// Ruta raíz
app.get('/', (req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.status(500).send('Error interno del servidor');
    } else {
      res.status(200).type('text/html').send(data);
    }
  });
});

// Otra ruta
app.get('/otra-ruta', (req, res) => {
  res.status(200).type('text/plain').send('Hola, esta es otra ruta');
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).type('text/plain').send('Página no encontrada');
});

// Iniciar el servidor
app.listen(80, () => {
  console.log('Servidor escuchando en el puerto 80');
});
