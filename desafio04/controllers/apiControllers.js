const  ArchivoContainer  = require('../container/ArchivoContainer.js');

const productos = new ArchivoContainer('dataBase/productos.txt');

const apiControllers = {
    productos: async (req, res) => {
        if (req.method === "GET"){
            res.json(await productos.getAll())
        } else if (req.method === "POST") {
            res.json(productos.save(req.body));
        }
    },

    productById: (req, res) => {
        const { id } = req.params;
    
        if (req.method === "GET") {
            res.json(productos.getById(parseInt(id)));
        }else if (req.method === "PUT") {
            productos.update(req.body);
            res.json(req.body.title + "Actualizado");
        }else if (req.method === "DELETE") {
            productos.deleteById(parseInt(id));
            res.json(req.body.title + " Delete");
        } else {
            console.log(req.method);
        }
    },
    
    randomProducto: async(req, res) => {
        res.json(await productos.getRandomProducto());
    },
};

module.exports = { apiControllers }