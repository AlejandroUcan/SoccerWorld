const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use(express.static('public'));

app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
const rutasProductos = require('./routes/productos');
app.use('/productos', rutasProductos);

