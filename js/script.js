// Obteniendo elementos HTML
const txtNombre = document.querySelector('#txtNombre')
const txtEmail = document.querySelector('#txtEmail')
const txtProducto = document.querySelector('#txtProducto')
const txtDescripcion = document.querySelector('#txtDescripcion')
const menuItems = document.querySelectorAll('.nav-menu-item')
const sectionItems = document.querySelectorAll('section')
const msgBox = document.querySelector('#form-msg')
const footer = document.querySelector('footer')
const clog = console.log

// Declaración de variables
const offsetTopSection1 = sectionItems[0].offsetTop - 300
const offsetTopSection2 = sectionItems[1].offsetTop - 300
const offsetTopSection3 = sectionItems[2].offsetTop - 300

// EventListener para saber cuando se hace Scroll
window.addEventListener("scroll", () => {
  //  Si el usuario está visualizando el inicio
  if(scrollY >= 0 && scrollY < offsetTopSection1) {
    eliminarClases()
    menuItems[0].classList.add("nav-menu-item-active");
  //  Si el usuario está visualizando los productos más vendidos
} else if(scrollY >= offsetTopSection1 && scrollY < offsetTopSection2) {
    eliminarClases()
    menuItems[1].classList.add("nav-menu-item-active");
    sectionItems[0].classList.add("section-in")
  //  Si el usuario está visualizando las categorías
} else if(scrollY >= offsetTopSection2 && scrollY < offsetTopSection3) {
    eliminarClases()
    menuItems[2].classList.add("nav-menu-item-active" );
    sectionItems[1].classList.add("section-in")
  //  Si el usuario está visualizando el formulario para pedidos
} else if(scrollY >= offsetTopSection3) {
    eliminarClases()
    menuItems[3].classList.add("nav-menu-item-active" );
    sectionItems[2].classList.add("section-in")
  }
})

// Método para eliminar clases CSS de los elementos no visibles
function eliminarClases() {
  // Eliminando los active de los items del menú
  menuItems.forEach( menuItem => {
    // Si el elemento contiene la clase, entonces se remueve
    if(menuItem.classList.contains("nav-menu-item-active")) menuItem.classList.remove("nav-menu-item-active")
  })
}

// Método para cambiar el color de los input del formulario
function activarColor (elemento) {
  if(elemento.value === "") {
    elemento.style.setProperty("border-color","red")
  } else {
    elemento.style.setProperty("border-color","")
  }
}

// Validando form al escribir en los inputs
txtNombre.oninput = () => activarColor(txtNombre)
txtEmail.oninput = () => activarColor(txtEmail)
txtProducto.oninput = () => activarColor(txtProducto)
txtDescripcion.oninput = () => activarColor(txtDescripcion)

// Método para verificar si hay algún campo vacío
function verificarForm () {
  let formLleno = true

  if(txtNombre.value === "") {
    formLleno = false
    activarColor(txtNombre)
  }
  if(txtEmail.value === "") {
    formLleno = false
    activarColor(txtEmail)
  }
  if(txtProducto.value === "") {
    formLleno = false
    activarColor(txtProducto)
  }
  if(txtDescripcion.value === "") {
    formLleno = false
    activarColor(txtDescripcion)
  }

  return formLleno // Retorna TRUE o FALSE
}

// Método para mostrar msj
function mostrarMsg() {
  if(msgBox.classList.contains('invisible')) msgBox.classList.remove('invisible')
  msgBox.innerHTML = `${txtNombre.value}, su producto ${txtProducto.value} ha sido solicitado`
  msgBox.classList.add('form-msg-popup')

  setTimeout( () => {
    msgBox.classList.add('invisible')
    msgBox.classList.remove('form-msg-popup')
  }, 5000);
}

// Método para limpiar formulario
function limpiarFomulario () {
  txtNombre.value = ""
  txtEmail.value = ""
  txtProducto.value = ""
  txtDescripcion.value = ""
}

// Envio del formulario
function manejarEnvio (event) {
  // Prevenir el envío del formulario
  event.preventDefault()
  // Verificar que el formulario esté lleno
  if(verificarForm()){ // Si el método retorna TRUE
    // Notificando al usuario su petición
    mostrarMsg()
    // Limpiando el formulario
    limpiarFomulario()
  }
}