const fs = require('fs');
const Producto = require('./Producto.js')

// Definición de clase
class ArchivoContainer {
    constructor(ruta) {
        this.ruta = ruta;
        this.productos = [];
    }

    //guardar archivo
    _saveFile() {
        const textFile = JSON.stringify(this.productos, null, 2); // guardar en un string
        return fs.promises.writeFile(this.ruta, textFile) //recibe y devuelve promesa
    }

    //Leer archivo
    _readFile() {
        return fs.promises.readFile(this.ruta, 'utf-8')   // promesa para leer el txt
            .then(text => {
                const productsArray = JSON.parse(text)
                this.productos = productsArray;
            })
    }

    // async para poder usar await(espero)
    // guardar obj
    async save(datos) {
        const productId = Date.now();
        const producto = new Producto(
            productId, 
            datos.title, 
            datos.price, 
            datos.thumbnail,
            datos.description
        );

        await this._readfile();
        this.productos.push(producto);
        await this._saveFile();
        return producto;
    }

    //Devuelve array con los obj presentes
    async getAll() {
        await this._readfile();
        return [...this.productos];
    }

    //Recibe id y devuelve el obj con ese id, null sino esta
    async getById(productId) {
        await this._readfile();
        const index = this.productos.findIndex(producto => producto.id === productId)
        if (this.productos[index] == null) {
            return null;
        } else {
            return this.productos[index];
        }
    }

    //Elimina obj con el id buscado
    async deleteById(productId) {
        await this._readfile();
        const index = this.productos.findIndex(producto => producto.id === productId)
        if (index !== -1) {
            this.productos.splice(index, 1);
            await this._saveFile();
        } else {
            return { error: "Este producto no se encontro"};
        }
    }

    //Elimina todos los obj 
    async deleteAll() {
        await this._readfile();
        while (this.productos.length > 0) {
            this.productos.pop();
        }
        await this._saveFile();
    }

    async update(datos) {
        await this._readFile();
    
        const index = this.productos.findIndex((producto) => producto.id === datos.id);
        if (index === -1) {
          //   throw new Error("el id no se encuentra en la base de datos");
        return { error: "Este producto no se encontro" };
        } else {
        if (!datos.id)
            throw new Error("Falta agregar el id al nuevo producto");
        if (!datos.title)
            throw new Error(
            `Falta agregar el título al producto ${datos.id} para poder cambiarlo`
            );
        if (datos.title === "")
            throw new Error(`El producto ${datos.id} debe tener un título`);
    
        if (!datos.price)
            throw new Error("Falta agregar el precio al nuevo producto");
        if (datos.price === "")
            throw new Error(`El producto ${datos.id} debe tener un precio`);
        if (!datos.thumbnail)
            throw new Error("Falta agregar la imagen al nuevo producto");
        if (datos.thumbnail === "")
            throw new Error(
            `El producto ${datos.id} debe tener una URL de imagen`
            );
        this.productos[index].title = datos.title;
        this.productos[index].price = datos.price;
        this.productos[index].thumbnail = datos.thumbnail;
        await this._saveFile();
        }
    }
    
}

//Exportar codigo
module.exports = ArchivoContainer
