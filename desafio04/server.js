const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { apiControllers } = require('./controllers/apiControllers')


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/public", express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Devuelve array con todos los productos disp en el servidor
app.get('/api/productos', apiControllers.productos);
// Devuelve un prod segun su id
app.get('/api/productos/:id', apiControllers.productos);
// Devuelve producto elegido al azar entre todos
app.get('/api/randomProducto', apiControllers.randomProducto);

app.post('api/productos', apiControllers.productos);
app.put('/api/productos/:id',apiControllers.productById);
app.delete('api/productos/:id',apiControllers.productById);


// endpoints de puerto
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", (e) => console.log(`Error en Servidor ${e}`));