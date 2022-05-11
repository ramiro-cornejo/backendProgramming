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
    _readfile() {
        return fs.promises.readFile(this.ruta, 'utf-8')   // promesa para leer el txt
            .then(text => {
                const productsArray = JSON.parse(text)
                this.productos = productsArray;
            })
    }

    // async para poder usar await(espero)
    // guardar obj
    async save(datos) {
        const producto = new Producto(datos.id, datos.title, datos.price, datos.thumbnail)
        await this._readfile();
        this.productos.push(producto);
        await this._saveFile()
    }

    //Devuelve array con los obj presentes
    async getAll() {
        await this._readfile();
        return [...this.productos];
    }

    //Recibe id y devuelve el obj con ese id, null sino esta
    async getById(id) {
        await this._readfile();
        const index = this.productos.findIndex(producto => producto.id === id)
        if (this.productos[index] == null) {
            return null;
        } else {
            return this.productos[index];
        }
    }
    
    async getRandomProducto() {
        await this._readfile();
        const index = Math.floor(Math.random() * this.productos.length);
        console.log(this.productos[index]);
        return this.productos[index];
    }

    //Elimina obj con el id buscado
    async deleteById(id) {
        await this._readfile();
        const index = this.productos.findIndex(producto => producto.id === id)
        if (index !== -1) {
            this.productos.splice(index, 1);
            await this._saveFile();
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

}

//Exportar codigo
module.exports = ArchivoContainer


