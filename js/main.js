//Variables:
const iconoMenu = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");

//EventListener:

eventListener();
function eventListener() {
  iconoMenu.addEventListener("click", menuDesplegable);
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
