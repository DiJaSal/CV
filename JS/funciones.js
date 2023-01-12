document.getElementById("Mostrar-Ocultar-detalles-explab").addEventListener('click', function () {
    const detalle = document.getElementsByClassName("detalleLista");
    mostrar(detalle, "Mostrar-Ocultar-detalles-explab");
})
document.getElementById("Mostrar-Ocultar-detalles-idioma").addEventListener('click', function () {
    const detalle = document.getElementsByClassName("idioma-con-detalle");
    mostrar(detalle, "Mostrar-Ocultar-detalles-idioma");
})
document.getElementById("Mostrar-Ocultar-detalles-cursos").addEventListener('click', function () {
    const detalle = document.getElementsByClassName("detallecurso");
    mostrar(detalle, "Mostrar-Ocultar-detalles-cursos");
    moveTo: end
})

function mostrar(elements, boton) {

    if (document.getElementById(boton).textContent == "mostrar Detalles") {
        document.getElementById(boton).textContent = "Ocultar Detalles"
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block"
        }

    } else {
        document.getElementById(boton).textContent = "mostrar Detalles"
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }

}