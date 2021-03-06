// Traer codigo
const ArchivoContainer = require('./dataBase/ArchivoContainer')


async function main() {

    const productos = new ArchivoContainer('./productos.txt');

    await productos.save({
        id: 1,
        title: "Notebook",
        price: 90000,
        thumbnail: "notebook.png",
        description: "producto elaborado en Argentina"
        
    });

    await productos.save({
        id: 2,
        title: "Auriculares",
        price: 6000,
        thumbnail: "auriculares.png",
        description: "producto elaborado en Argentina"
    });

    await productos.save({
        id: 3,
        title: "Mouse",
        price: 7800,
        thumbnail: "mouse.png",
        description: "producto elaborado en Argentina"
    });

    await productos.save({
        id: 4,
        title: "Teclado",
        price: 7000,
        thumbnail: "teclado.png",
        description: "producto elaborado en Argentina"
    });

    
    await productos.save({
        id: 5,
        title: "Monitor",
        price: 45000,
        thumbnail: "monitor.png",
        description: "producto elaborado en Argentina"
    });

    console.log(await productos.getAll());
    console.log("");
    
    console.log(await productos.getById(2));
    console.log("");

    await productos.deleteById(2);

    console.log(await productos.getAll());
    console.log("");

    console.log(await productos.getById(2));
    console.log("");

    await productos.deleteAll();
    console.log(await productos.getAll());
    console.log("");


    console.log(await productos.getAll());
    console.log("");
}

main();