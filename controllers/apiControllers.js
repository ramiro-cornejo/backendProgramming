const  ArchivoContainer  = require('../dataBase/ArchivoContainer.js');

const productos = new ArchivoContainer('.dataBase/productos.txt');

const apiControllers = {
    productos: (req, res) => {
        res.json(productos.getAll())
    },
    randomProducto: (req, res) => {
        res.json(productos.getRandomProducto())
    }
}

module.exports = { apiControllers }