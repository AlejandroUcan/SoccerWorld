const fs = require('fs');

const Product = {
	fileName: './database/products.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allProducts = this.findAll();
		let productFound = allProducts.find(oneProduct => oneProduct.id == id);
		return productFound;
	},

	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

	create: function (productData) {
		let allProducts = this.findAll();
		let newProduct = {
			...productData
		}
		allProducts.push(newProduct);
		fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null,  ' '));
		return newProduct;
	},

	update: function (productData) {
		let allProducts = this.findAll();
		
		allProducts.forEach(element => {
			if(element.id == productData.id) {
			  element.equipo = productData.equipo,
			  element.tipo = productData.tipo,
			  element.temporada = productData.temporada,
			  element.liga = productData.liga,
			  element.marca = productData.marca,
			  element.categoria = productData.categoria,
			  element.precio = productData.precio,
			  element.imagen = productData.imagen
			}
		});

		fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null,  ' '));
	},
	
	delete: function (id) {
		let allProducts = this.findAll();
		let finalProducts = allProducts.filter(oneProduct => oneProduct.id != id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
		return true;
	}
}

module.exports = Product;