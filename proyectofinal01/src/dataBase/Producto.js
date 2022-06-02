
// Definición de clase
class Producto {
    constructor(id, title, price, thumbnail) {
        if (!id) throw new Error('Agregar ID')
        if (!title) throw new Error('Agregar título')
        if (!price) throw new Error('Agregar precio')
        if (price < 0) throw new Error('El preciio debe ser positivo');
        if (!thumbnail) throw new Error('Agregar img')
        if (!description) throw new Error('Agregar descripción')
        
        this.id = id
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.description = description
    }
}


//Exportar codigo
module.exports = Producto