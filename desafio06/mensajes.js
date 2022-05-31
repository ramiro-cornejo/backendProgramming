const mensajes = [
    {
        autor:  'Ramiro',
        texto: 'Excelente'
    },
    {   
        autor: 'Valentina',
        texto: 'Muy bueno'
    }
]

function obtenerMensajes() {
    return mensajes
}

function guardarMensaje(mensaje) {
    mensajes.push(mensaje)
}

module.exports = {
    obtenerMensajes, guardarMensaje
}