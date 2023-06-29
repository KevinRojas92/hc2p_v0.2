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
    uno: window.matchMedia('(max-width: 1069px)'),
    dos: window.matchMedia('(min-width: 1070px)')
};

let siguiente = document.querySelector('.next');
let anterior = document.querySelector('.previous');

siguiente.addEventListener('click', ActivarSiguiente);
anterior.addEventListener('click', ActivarAnterior);

let scroll = document.querySelector('.mascara');
let contadorSig = [];
let contadorAnt = [];
let ancho = 200;

function ActivarSiguiente () {
    contadorSig.push(1);

    if (screen['uno'].matches) {
        if (contadorSig.length == 1) {
            scroll.style.marginLeft = "-25.7%";
            anterior.classList.remove("ocultar");
        } else if (contadorSig.length == 2) {
            scroll.style.marginLeft = "-25.7" - "25.7" + "%";
            siguiente.classList.add("ocultar");
        }
    } else if (screen['dos'].matches) {
        if (contadorSig.length == 1) {
            scroll.style.marginLeft = "-20.5%";
            anterior.classList.remove("ocultar");
            siguiente.classList.add("ocultar");
        } /*else if (contadorSig.length == 2) {
            scroll.style.marginLeft = "-20" - "20" + "%";
            siguiente.classList.add("ocultar");
        }*/
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
            scroll.style.marginLeft = "-25.7%";
            contadorSig.pop();
            siguiente.classList.remove("ocultar");
        } else if (contadorAnt.length == 1) {
            scroll.style.marginLeft = "0";
            anterior.classList.add("ocultar");
            siguiente.classList.remove("ocultar");
            contadorAnt.pop();
            contadorSig.pop();
        }
    } else if (screen['dos'].matches) {
        if (contadorSig.length == 1) {
            scroll.style.marginLeft = "0";
            anterior.classList.add("ocultar");
            siguiente.classList.remove("ocultar");
            contadorAnt.pop();
            contadorSig.pop();
        } /*else if (contadorSig.length == 2) {
            scroll.style.marginLeft = "-20%";
            contadorSig.pop();
            siguiente.classList.remove("ocultar");
        } else if (contadorAnt.length == 1) {
            scroll.style.marginLeft = "0";
            anterior.classList.add("ocultar");
            siguiente.classList.remove("ocultar");
            contadorAnt.pop();
            contadorSig.pop();
        }*/
    }
}