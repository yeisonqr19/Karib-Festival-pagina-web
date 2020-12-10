//Variables:
const iconoMenu = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");
let ubicacionPrincipal = window.pageYOffset;
let animado = document.querySelectorAll(".animado");

//EventListener:
eventListener();
function eventListener() {
  iconoMenu.addEventListener("click", menuDesplegable);
  window.addEventListener("scroll", desplazamientoMenu);
  enlaces.addEventListener("click", controlMenu);
  window.addEventListener("scroll", animacionElementos);
}

//Funciones:
function menuDesplegable(evt) {
  evt.preventDefault();

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
