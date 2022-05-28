const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile('index.html' , { root: './views'})
})

io.on('connection' , socket => {
    console.log('alguien se conecto')
    socket.emit('cnx0k', { fecha: new Date().toLocaleString() })
    socket.on('ping', () => {
        console.log(`socket '${socket.id}' dice PING`)
    })
})

const server = httpServer.listen(8080, () => {
    console.log(`Escuchando en puerto ${server.address().port}`)
})