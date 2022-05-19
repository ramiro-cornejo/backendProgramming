const templateText = '<h1>{{nombre}}</h1>' ;
const templateFn = Handlebars.compile(templateText); // compila la plantilla
const html = templateFn({ nombre: 'Nombre de producto' }); // genera el html
document.getElementById('contenidoId').innerHTML = html; // inyecta el resultado en la vista
