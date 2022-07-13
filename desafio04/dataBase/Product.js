

// Definición de clase
class Product {
    constructor(id, title, price, thumbnail) {
        if (!id) throw new Error('Agregar ID')
        if (!title) throw new Error('Agregar título')
        if (!price) throw new Error('Agregar precio')
        if (price < 0) throw new Error('El preciio debe ser positivo');
        if (!thumbnail) throw new Error('Agregar img')
        
        this.id = id
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }
}


//Exportar codigo
module.exports = Product