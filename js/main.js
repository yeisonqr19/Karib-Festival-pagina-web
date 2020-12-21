"use strict";

//Variables:
const iconoMenu = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");
let ubicacionPrincipal = window.pageYOffset;
let animado = document.querySelectorAll(".animado");

let validator = validador();
//Slider:
const slider = document.querySelector(".sliderContenedor");
const sliderIndividual = document.querySelectorAll(".contenidoSlider");
let contador = 1;
let intervalo = 3000;

//EventListener:
eventListener();
function eventListener() {
  iconoMenu.addEventListener("click", menuDesplegable);
  window.addEventListener("scroll", desplazamientoMenu);
  enlaces.addEventListener("click", controlMenu);
  window.addEventListener("DOMContentLoaded", validador);

  //Cree estos if para controlar en que pagina de mi sitio web estoy en todo momento, gracias a esto puedo decidir que funcion se ejecuta y que no dependiendo del contenido.
  if (validator) {
    let width = sliderIndividual[0].clientWidth;
    window.addEventListener("resize", () => {
      width = sliderIndividual[0].clientWidth;
    });

    //Funciones para Controlar el slider:
    function slides() {
      slider.style.transform = "translate(" + -width * contador + "px)";
      slider.style.transition = "transform 1s";
      contador++;

      if (contador === sliderIndividual.length) {
        setTimeout(function () {
          slider.style.transform = "translate(0px)";
          slider.style.transition = "transform 0s";
          contador = 1;
        }, 2000);
      }
    }
    setInterval(function () {
      slides();
    }, intervalo);

    window.addEventListener("scroll", animacionElementos);
    function animacionElementos() {
      let scrollTop = document.documentElement.scrollTop;
      for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 700 < scrollTop) {
          animado[i].style.opacity = 1;
          animado[i].classList.add("mostrarArriba");
        }
      }
    }
  }
}

//Funciones:

function validador() {
  let paginaActual = window.location.pathname;
  let validator = paginaActual.includes("index");
  return validator;
}

function menuDesplegable(evt) {
  evt.preventDefault();
  console.log("Click");
  if (enlaces.classList.contains("uno")) {
    enlaces.classList.remove("uno");
    enlaces.classList.add("dos");
  } else {
    enlaces.classList.remove("dos");
    enlaces.classList.add("uno");
  }
}

function desplazamientoMenu() {
  let desplazamiento = window.pageYOffset;
  if (ubicacionPrincipal >= desplazamiento) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-200px";
  }
  ubicacionPrincipal = desplazamiento;
}

function controlMenu(evt) {
  if (evt.target.nodeName === "A") {
    enlaces.classList.remove("dos");
    enlaces.classList.add("uno");
  }
}
