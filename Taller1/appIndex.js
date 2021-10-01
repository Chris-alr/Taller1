const reseniaUIndex = document.querySelector("#listaReseniasIndex");
let arrayReseniasIndex = [];

const Leer = () => {

    reseniaUIndex.innerHTML = "";
    arrayReseniasIndex = JSON.parse(localStorage.getItem("resenias"));

    console.log(arrayReseniasIndex);

    var contador = 0;

    if (arrayReseniasIndex != null) {
        arrayReseniasIndex.forEach(element => {
            contador++;
        });
    }

    if (arrayReseniasIndex == null) {
        arrayReseniasIndex = [];

    } else if (arrayReseniasIndex[3] != undefined) {

        var contadorDos = contador - 3;

        for (var i = 0; i < contadorDos; i++) {
            arrayReseniasIndex.pop();
        }

        arrayReseniasIndex.forEach(element => {
            reseniaUIndex.innerHTML += `<div class="alert alert-primary" role="alert">
            <b>"${element.comentario}"</b> - ${element.autor} ${element.fecha}
        </div>`
        });

    } else {

        arrayReseniasIndex.forEach(element => {
            reseniaUIndex.innerHTML += `<div class="alert alert-primary" role="alert">
            <b>"${element.comentario}"</b> - ${element.autor} ${element.fecha}
        </div>`
        });

    }
}

document.addEventListener("DOMContentLoaded", Leer);
