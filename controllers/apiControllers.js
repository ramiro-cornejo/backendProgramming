const  ArchivoContainer  = require('../dataBase/ArchivoContainer.js');

const products = new ArchivoContainer('.dataBase/productos.txt');

const apiControllers = {
    productos: (req, res) => {
        res.json(products.getAll())
    },
    randomProducto: (req, res) => {
        res.json(products.getRandomProducto())
    }
}

module.exports = { apiControllers }