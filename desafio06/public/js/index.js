const socket = io("/")

socket.on('cnx0k', data => {
    console.log(data)
})

socket.on('HOLA', () => {
    const msg = 'El servidor esta funcionando'
    const div = document.getElementById('mensaje')
    div.innerHTML = msg
})

const btn = document.getElementById('btn_enviar')
btn.addEventListener('click', event => {
    const texto = document.getElementById('inputText').value
    socket.emit('mensaje', { texto })
})