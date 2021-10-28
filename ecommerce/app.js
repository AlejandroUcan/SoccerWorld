const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(methodOverride('_method'));

app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));
// catch 404 and forward to error handler

// Template Engine
app.set('view engine', 'ejs');

// Routers
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);