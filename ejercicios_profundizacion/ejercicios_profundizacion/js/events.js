

const send = document.getElementById('send')
const reload = document.getElementById('reload')

function agregarEventos() {
  // evento de "click" sobre boton reload
  // Alumno: Al presionar el boton reload se debe llamar
  // a la función "reset"
  reload.onclick = restart;

}