//Variables:
const iconoMenu = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");
let ubicacionPrincipal = window.pageYOffset;

//EventListener:

eventListener();
function eventListener() {
  iconoMenu.addEventListener("click", menuDesplegable);
  window.addEventListener("scroll", desplazamientoMenu);
  enlaces.addEventListener("click", controlMenu);
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

function controlMenu() {
  enlaces.classList.remove("dos");
  enlaces.classList.add("uno");
}
