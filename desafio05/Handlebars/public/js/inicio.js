async function main() {
    const response = await fetch('templates/inicio.handlebars')
    const templateText = await response.text()
    const templateFn = Handlebars.compile(templateText); // compila la plantilla
    const html = templateFn({ nombre: 'Nombre de producto' }); // genera el html
    document.getElementById('contenidoId').innerHTML = html; // inyecta el resultado en la vista
}

main()

