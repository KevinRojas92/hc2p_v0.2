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
    uno: window.matchMedia('(max-width: 914px)'),
    dos: window.matchMedia('(min-width: 915px)')
};

let siguiente = document.querySelector('.next_detalleP');
let anterior = document.querySelector('.previous_detalleP');

siguiente.addEventListener('click', ActivarSiguiente);
anterior.addEventListener('click', ActivarAnterior);

let scroll = document.querySelector('.mascara_proyecto_calderon');
let contadorSig = [];
let contadorAnt = [];
let ancho = 200;

function IrAlSiguiente () {
    if (contadorSig.length == 1) {
        scroll.style.marginLeft = "-100%";
        anterior.classList.remove("ocultar");
    } else if (contadorSig.length == 2) {
        scroll.style.marginLeft = "-100" - "100" + "%";
    } else if (contadorSig.length == 3) {
        scroll.style.marginLeft = "-200" - "100" + "%";
    } else if (contadorSig.length == 4) {
        scroll.style.marginLeft = "-300" - "100" + "%";
    } else if (contadorSig.length == 5) {
        scroll.style.marginLeft = "-400" - "100" + "%";
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
        contadorSig.pop();
        siguiente.classList.remove("ocultar");
    } else if (contadorSig.length == 4) {
        scroll.style.marginLeft = "-300%";
        contadorSig.pop();
        siguiente.classList.remove("ocultar");
    } else if (contadorSig.length == 5) {
        scroll.style.marginLeft = "-400%";
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