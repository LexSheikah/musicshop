// Obteniendo elementos HTML
const txtNombre = document.getElementById('txtNombre')
const txtEmail = document.getElementById('txtEmail')
const txtProducto = document.getElementById('txtProducto')
const txtDescripcion = document.getElementById('txtDescripcion')

// Validación de campos vacíos
txtNombre.oninput = () => {
  if(txtNombre.value === "") {
    txtNombre.style.setProperty("border-color","red")
  } else {
    txtNombre.style.setProperty("border-color","")
  }
}

txtEmail.oninput = () => {
  if(txtEmail.value === "") {
    txtEmail.style.setProperty("border-color","red")
  } else {
    txtEmail.style.setProperty("border-color","")
  }
}

txtProducto.oninput = () => {
  if(txtProducto.value === "") {
    txtProducto.style.setProperty("border-color","red")
  } else {
    txtProducto.style.setProperty("border-color","")
  }
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
  // Obtener valores de los elementos HTML
  let nombre = txtNombre.value
  let producto = txtProducto.value
  // Notificando al usuario su petición
  alert(`${nombre}, su producto ${producto} ha sido solicitado`)
  // Limpiando el formulario
  limpiarFomulario()
}