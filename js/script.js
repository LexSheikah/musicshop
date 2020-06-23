// Declaración de variables


// Obteniendo elementos HTML
const txtNombre = document.getElementById('txtNombre')
const txtEmail = document.getElementById('txtEmail')
const txtProducto = document.getElementById('txtProducto')
const txtDescripcion = document.getElementById('txtDescripcion')

// Método para cambiar el color de los imput del formulario
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

// Método para verificar si hay algún campo vacío
function verificarForm () {
  let formLleno = true

  if(txtNombre.value === "") {
    formLleno = false
    activarColor(txtNombre)
  } else if(txtEmail.value === "") {
    formLleno = false
    activarColor(txtEmail)
  } else if(txtProducto.value === "") {
    formLleno = false
    activarColor(txtProducto)
  }

  return formLleno // Retorna TRUE o FALSE
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
    alert(`${txtNombre.value}, su producto ${txtProducto.value} ha sido solicitado`)
    // Limpiando el formulario
    limpiarFomulario()
  }
}