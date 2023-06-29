'use strict';

document.querySelector('.menu').addEventListener('click', animateLines);

let linea1 = document.querySelector('.linea1');

let linea2 = document.querySelector('.linea2');

let menuLateral = document.querySelector('.navegacion');

function animateLines () {
    linea1.classList.toggle('activelinea1');

    linea2.classList.toggle('activelinea2');

    menuLateral.classList.toggle('activeNavegacion');
}

/* ---------------------- SCROLL HORIZONTAL ---------------------- */

let screen = {
    uno: window.matchMedia('(min-width: 1280px)')
}

let siguiente = document.querySelector('.next_estudio');
let anterior = document.querySelector('.previous_estudio');

siguiente.addEventListener('click', ActivarSiguiente);
anterior.addEventListener('click', ActivarAnterior);

let scroll = document.querySelector('.mascara_general_estudio');
let contadorSig = [];
let contadorAnt = [];
let ancho = 200;

function ActivarSiguiente () {
    contadorSig.push(1);

    if (screen['uno'].matches) {
        if (contadorSig.length == 1) {
            scroll.style.marginLeft = "-100%";
            anterior.classList.remove("ocultar");
        } else if (contadorSig.length == 2) {
            scroll.style.marginLeft = "-100" - "21.3" + "%";
        } else if (contadorSig.length == 3) {
            scroll.style.marginLeft = "-100" - "42.5" + "%";
            siguiente.classList.add("ocultar");
        }
    }
}

function ActivarAnterior () {
    contadorAnt.push(1);

    if (screen['uno'].matches) {
        if (contadorSig.length == 1) {
            scroll.style.marginLeft = "0";
            anterior.classList.add("ocultar");
            contadorAnt.pop();
            contadorSig.pop();
        } else if (contadorSig.length == 2) {
            scroll.style.marginLeft = "-100%";
            contadorSig.pop();
            siguiente.classList.remove("ocultar");
        } else if (contadorSig.length == 3) {
            scroll.style.marginLeft = "-121.3%";
            contadorSig.pop();
            siguiente.classList.remove("ocultar");
        } else if (contadorAnt.length == 1) {
            scroll.style.marginLeft = "0";
            anterior.classList.add("ocultar");
            siguiente.classList.remove("ocultar");
            contadorAnt.pop();
            contadorSig.pop();
        }
    }
}