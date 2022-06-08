const socket = io("")

socket.on('mensajes', ({mensajes}) => {
    console.log(mensajes)
    mostrarMensajes(mensajes)
})


const btn = document.getElementById('btn_enviar')
btn.addEventListener('click', event => {
    const autor = document.getElementById('inputAutor').value
    const texto = document.getElementById('inputText').value
    socket.emit('mensaje', { autor, texto })
})

function listadoMsj(lineas) {
    const listItem = lineas.map(l => `<li>${l}</li>`)
    const html = 
    `<ul> 
    ${listItem.join('')}
    </ul>`
        return html
}

function mostrarMensajes(mensajes) {
    const divMensajes = document.getElementById('mensajes')
    const lineasMensajes = mensajes.map( o => `${o.autor} : ${o.texto}`)

    divMensajes.innerHTML = listadoMsj(lineasMensajes)
}