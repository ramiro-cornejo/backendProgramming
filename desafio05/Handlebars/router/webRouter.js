const express = require('express')

const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views'})
})

webRouter.get('/datos', async (req, res) => {
    const datos = {
        nombre: 'producto',
        condicion: true
    }
    res.render('datos', datos)
})

module.exports = { webRouter }

