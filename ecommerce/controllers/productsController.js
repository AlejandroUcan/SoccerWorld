const fs = require('fs');
const path = require('path');

const controller = {
  list: (req, res, next) => {
    const datosEnJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');    
    let listaDeProductos = JSON.parse(datosEnJSON);

    res.render('products/list', { products: listaDeProductos });
  },
  create: (req, res, next) => {
    res.render('products/create');
  },
  details: (req, res, next) => {
    res.render('products/details');
  },
  add: (req, res, next) => {
    try {
      const datosEnJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');    
      let listaDeProductos = JSON.parse(datosEnJSON);
      
      let product = {
        id: req.body.id,
        equipo: req.body.equipo,
        tipo: req.body.tipo,
        temporada: req.body.temporada,
        liga: req.body.liga,
        marca: req.body.marca,
        categoria: req.body.categoria,
        precio: req.body.precio,
        imagen:req.body.imagen
      };
      listaDeProductos.push(product); 

      let datosConvertidos = JSON.stringify(listaDeProductos);
      
      fs.writeFileSync(path.join(__dirname, '../data/products.json'), datosConvertidos, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("escritura exitosa");
        }
      }); 
    } catch (error) {
      console.log(error.message);
    }

    res.redirect('/products');
  },
  edit: (req, res, next) => {
      let id = req.params.id;
      
      const datosEnJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');    
      let listaDeProductos = JSON.parse(datosEnJSON);
      
      let product = listaDeProductos.filter(product => product.id == id);
      console.log(product);

      res.render('products/edit', {product: product});
  },
  update: (req, res, next) => {
    let id = req.params.id;

    try {
      const datosEnJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');    
      let listaDeProductos = JSON.parse(datosEnJSON);

      listaDeProductos.forEach(function(element) {
        if(element.id == id) {
          element.equipo = req.body.equipo,
          element.tipo = req.body.tipo,
          element.temporada = req.body.temporada,
          element.liga = req.body.liga,
          element.marca = req.body.marca,
          element.categoria = req.body.categoria,
          element.precio = req.body.precio,
          element.imagen = req.body.imagen
        }
      })

      let datosConvertidos = JSON.stringify(listaDeProductos);
      
      fs.writeFileSync(path.join(__dirname, '../data/products.json'), datosConvertidos, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("escritura exitosa");
        }
      }); 
    } catch (error) {
      console.log(error.message);
    }

    res.redirect('/products');
  },
  delete: (req, res, next) => {
    let id = req.params.id;

    try {
      const datosEnJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');    
      let listaDeProductos = JSON.parse(datosEnJSON);

      listaDeProductos.forEach(function(element, index) {      
        if(element.id == id) {
          listaDeProductos.splice(index, 1);
        }
      }); 

      let datosConvertidos = JSON.stringify(listaDeProductos);
      
      fs.writeFileSync(path.join(__dirname, '../data/products.json'), datosConvertidos, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("escritura exitosa");
        }
      }); 
    } catch (error) {
      console.log(error.message);
    }

    res.redirect('/products');
  }
};

module.exports = controller;