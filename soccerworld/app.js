const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use(express.static('public'));

const rutasProductos = require('./routes/productos');
app.use('/productos', rutasProductos);

const rutasUsuarios = require('./routes/usuarios');
app.use('/usuarios', rutasUsuarios);

const rutasCarrito = require('./routes/carrito');
app.use('/carrito', rutasCarrito);

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});