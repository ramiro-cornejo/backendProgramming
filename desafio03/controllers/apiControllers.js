const  ArchivoContainer  = require('../dataBase/ArchivoContainer.js');

const productos = new ArchivoContainer('dataBase/productos.txt');

const apiControllers = {
    productos: async(req, res) => {
        res.json(await productos.getAll())
    },
    randomProducto: async(req, res) => {
        res.json(await productos.getRandomProducto())
    }
}

module.exports = { apiControllers }