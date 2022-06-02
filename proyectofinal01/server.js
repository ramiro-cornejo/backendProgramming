const express = require('express')
const { apiControllers } = require('./src/controllers/apiControllers.js')

const app = express()

//app.get('/', (req, res) => {
//    res.send( 'Primera entrega final');
//});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// Devuelve array con todos los productos disp en el servidor
app.get('/api/productos', apiControllers.productos);
// Devuelve un prod segun su id
app.get('/api/productos/:id', apiControllers.productos);

app.post('api/productos', apiControllers.productos);
app.put('/api/productos/:id',apiControllers.productById);
app.delete('api/productos/:id',apiControllers.productById);



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))