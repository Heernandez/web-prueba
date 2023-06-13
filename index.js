const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const html = `
    <html>
        <head>
            <title>Página de ejemplo</title>
            <style>
            .navbar {
                background-color: #333;
                color: #fff;
                padding: 10px;
            }
            .navbar ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .navbar li {
                display: inline;
                margin-right: 10px;
            }
            .navbar a {
                color: #fff;
                text-decoration: none;
            }
            </style>
        </head>
        <body>
            <div class="navbar">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </div>
        <h1>Hola Che</h1>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
