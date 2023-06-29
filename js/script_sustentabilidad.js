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
    uno: window.matchMedia('(max-width: 768px)'),
    dos: window.matchMedia('(min-width: 769px)')
};

let siguiente = document.querySelector('.next_detalleP');
let anterior = document.querySelector('.previous_detalleP');

siguiente.addEventListener('click', ActivarSiguiente);
anterior.addEventListener('click', ActivarAnterior);

let scroll = document.querySelector('.mascara_general_sust');
let contadorSig = [];
let contadorAnt = [];
let ancho = 200;

function IrAlSiguiente () {
    if (contadorSig.length == 1) {
        scroll.style.marginLeft = "-100%";
        anterior.classList.remove("ocultar");
    } else if (contadorSig.length == 2) {
        scroll.style.marginLeft = "-100" - "100" + "%";
        siguiente.classList.add("ocultar");
    }
}

function IrAlAnterior () {
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
        scroll.style.marginLeft = "-200%";
        siguiente.classList.remove("ocultar");
        contadorAnt.pop();
        contadorSig.pop();
    }
}

function ActivarSiguiente () {
    contadorSig.push(1);

    if (screen['uno'].matches) {
        IrAlSiguiente ();
    } else if (screen['dos'].matches) {
        IrAlSiguiente ();
    }
}

function ActivarAnterior () {
    contadorAnt.push(1);

    if (screen['uno'].matches) {
        IrAlAnterior ();
    } else if (screen['dos'].matches) {
        IrAlAnterior ();
    }
}