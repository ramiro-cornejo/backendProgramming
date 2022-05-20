class Contenedor {
    constructor() {
        this.productos = [];
    } 
    
    //Métodos 
    save(producto) {
        this.productos.push(producto); // acá pusheo el producto que yo envíe 
    }
    
    getById(id) {
        // lógica del método
        // buscar en tu array, algún producto que coincida con el ID recibido por parámetro y si no lo encuentra que devuelva null. 
        // Podrías usar el método FIND 
        const valor = this.productos.find((producto) => producto.id === id);
        if (this.productos[valor] == null) {
            return null;
        } else {
            return this.productos[valor];
        }
    }
    
    getAll() {
        // devuelvo lo que haya en mi array (o sea TODO) 
        return [...this.productos]; 
    }
    
    deleteById(id) {
        // lógica del método
        // filtrar a los que no coincidan con el id pasado por parámetro, método FILTER 
        const index = this.productos.filter((producto) => producto.id !== id );
        if (index !== -1) {
            this.productos.splice(index, 1);
        }
    }

    deleteAll() {
        // lógica del método 
        // this.products debería ser un array vacío, porque lo que buscas es borrar todo 
        this.productos = []
    }
}

const producto = new Contenedor()


producto.save({
    id: 1, 
    title: 'Notebook', 
    price: 90000, 
    thumbnail: 'https://medias.musimundo.com/medias/00503051-145356-145356-01-145356-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3ODY3MnxpbWFnZS9qcGVnfGg4My9oN2MvMTAzNTIyNzg2MzQ1MjYvMDA1MDMwNTEtMTQ1MzU2LTE0NTM1Nl8wMS0xNDUzNTZfMDEuanBnX3NpemU1MTV8MGNjOTZhOWFkMWI2ODEwOTY5NWRmYWZmNmM2ZjE3ZTIwYTE0YWQyYmMzNWY5YzBmZjNjMmYwNWEyNzc1NDVjYg' 
})

producto.save({
    id: 2, 
    title: 'Auriculares', 
    price: 9000, 
    thumbnail: 'https://medias.musimundo.com/medias/00503051-145356-145356-01-145356-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3ODY3MnxpbWFnZS9qcGVnfGg4My9oN2MvMTAzNTIyNzg2MzQ1MjYvMDA1MDMwNTEtMTQ1MzU2LTE0NTM1Nl8wMS0xNDUzNTZfMDEuanBnX3NpemU1MTV8MGNjOTZhOWFkMWI2ODEwOTY5NWRmYWZmNmM2ZjE3ZTIwYTE0YWQyYmMzNWY5YzBmZjNjMmYwNWEyNzc1NDVjYg' 
})


producto.save({
    id: 3, 
    title: 'Mouse', 
    price: 6000, 
    thumbnail: 'https://medias.musimundo.com/medias/00503051-145356-145356-01-145356-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3ODY3MnxpbWFnZS9qcGVnfGg4My9oN2MvMTAzNTIyNzg2MzQ1MjYvMDA1MDMwNTEtMTQ1MzU2LTE0NTM1Nl8wMS0xNDUzNTZfMDEuanBnX3NpemU1MTV8MGNjOTZhOWFkMWI2ODEwOTY5NWRmYWZmNmM2ZjE3ZTIwYTE0YWQyYmMzNWY5YzBmZjNjMmYwNWEyNzc1NDVjYg' 
})

console.log(producto)







