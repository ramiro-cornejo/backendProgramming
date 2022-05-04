const express = require('express');
const { apiControllers } = require('./controllers/apiControllers')


const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Express')
})

// Devuelve array con todos los productos disp en el servidor
app.get('/productos', apiControllers.productos)
// Devuelve producto elegido al azar entre todos
app.get('/randomProductos', apiControllers.randomProductos)

// endpoints de puerto
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
})

server.on("error", e => console.log(`Error en Servidor ${e}`)
)