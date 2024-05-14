
//estas funciones las creo el profesor 


var directorioImagenes = 'recursos/imagenes/'


function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo)
    return nodo
}

function crearNodoConTexto(tipoNodo, textoNodo){
    var nodo = document.createElement(tipoNodo)
    var textoNodo = document.createTextNode(textoNodo)
    nodo.appendChild(textoNodo)
    return nodo
}
function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo('img')
    nodo.src = directorioImagenes + nombreImagen
    nodo.alt = alt
    return nodo
}



//las dos siguientes funciones no retornan nada 
function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}
function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo)
}
