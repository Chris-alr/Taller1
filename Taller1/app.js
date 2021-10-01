const formularioUI = document.querySelector("#formulario");
const reseniaUI = document.querySelector("#listaResenias");
let arrayResenias = [];
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

const CrearResenia = (autor, comentario) => {

    let resenia = {
        autor: autor,
        comentario: comentario,
        fecha: hoy.toLocaleDateString()
    }

    arrayResenias.unshift(resenia);
    return resenia;
}

const Guardar = () => {

    localStorage.setItem("resenias", JSON.stringify(arrayResenias));

}

const Leer = () => {

    reseniaUI.innerHTML = "";
    arrayResenias = JSON.parse(localStorage.getItem("resenias"));
   
 
    var contador = 0;

    if (arrayResenias != null) {
        arrayResenias.forEach(element => {
            contador++;
        });
    }

    if (arrayResenias == null) {
        arrayResenias = [];

    } else if (arrayResenias[10] != undefined) {

        var contadorDos = contador - 10;

        for (var i = 0; i < contadorDos; i++) {
            arrayResenias.pop();
        }

        arrayResenias.forEach(element => {
            reseniaUI.innerHTML += `<div class="alert alert-dark" role="alert">
            <b>"${element.comentario}"</b> - ${element.autor} ${element.fecha}
        </div>`
        });

    } else {
        arrayResenias.forEach(element => {
            reseniaUI.innerHTML += `<div class="alert alert-dark" role="alert">
            <b>"${element.comentario}"</b> - ${element.autor} ${element.fecha}
        </div>`
        });
    }

}

formularioUI.addEventListener("submit", (e) => {

    e.preventDefault();

    let autor = document.querySelector("#autor").value;
    let comentario = document.querySelector("#comentario").value;

    

    if (comentario.length >= 201) {

        window.alert("Ingrese un comentario de 200 caracteres o menor");

    } else {
        CrearResenia(autor, comentario);
        Guardar();

        formularioUI.reset();
    }


});

document.addEventListener("DOMContentLoaded", Leer);
