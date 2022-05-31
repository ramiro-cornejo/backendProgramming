const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

const { obtenerMensajes, guardarMensaje } = require('./mensajes.js')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile('index.html' , { root:'./views'})
})

io.on('connection' , socket => {
    const mensajes = obtenerMensajes()
    socket.emit('mensajes', { mensajes })
    
    socket.on('mensaje', mensaje => {
        guardarMensaje(mensaje)
        const mensajes = obtenerMensajes()
        io.sockets.emit('mensajes', {mensajes})
    })
})

const server = httpServer.listen(8080, () => {
    console.log(`Escuchando en puerto ${server.address().port}`)
})