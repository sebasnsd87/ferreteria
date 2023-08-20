
// Inicializar emailjs 



/*document.getElementById('form')
 document.addEventListener('submit', function(event) {
   event.preventDefault();


   /*const serviceID = 'default_service';
   const templateID = 'template_5d3862p';*/

   /*emailjs.sendForm(serviceID, templateID, this)*/
    /*.then(() => {
      btnEnviar.value = 'Enviando Email';
      Swal.fire({
        title: 'Email enviado correctamente!!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }, (err) => {
      btnEnviar.value = 'Send Email';
      alert(JSON.stringify(err));
    });
  })*/

/*document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registration-form');
  
  if (registrationForm) {
    registrationForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("tel").value;
      const comentario = document.getElementById("comentario").value;

      // Validar campos
      if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
        Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
        return;
      }

      // Comprobar si el email ya existe en el LocalStorage
      if (existeEmailEnLocalStorage(email)) {
        Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
        return;
      }

      // Guardar en LocalStorage
      guardarEnLocalStorage(nombre, email, telefono, comentario);

      // Inicializar EmailJS con tu ID de usuario
      emailjs.init("4bbCK443WVaRgg872");

      const serviceID = 'default_service';
      const templateID = 'template_5d3862p';

      try {
        const response = await emailjs.sendForm(serviceID, templateID, this);
        if (response.status === 200) {
          Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
          registrationForm.reset();
        } else {
          Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
      }
    });
  }
});

// Función para verificar si el email ya existe en LocalStorage
function existeEmailEnLocalStorage(email) {
  const contactosGuardados = obtenerContactosLocalStorage();
  return contactosGuardados.some(contacto => contacto.email === email);
}

// Función para guardar el contacto en LocalStorage
function guardarEnLocalStorage(nombre, email, telefono, comentario) {
  const nuevoContacto = { nombre, email, telefono, comentario };
  const contactosGuardados = obtenerContactosLocalStorage();
  contactosGuardados.push(nuevoContacto);
  localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
}

// Función para obtener los contactos almacenados en LocalStorage
function obtenerContactosLocalStorage() {
  const contactosJSON = localStorage.getItem("contactos");
  return contactosJSON ? JSON.parse(contactosJSON) : [];
}

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Email enviado!!',
    showConfirmButton: false,
    timer: 1500
  })
})*/

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  let parametros = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    mensaje: mensaje
  };

  emailjs.send("default_service", "template_5d3862p", parametros)
    .then(function(response) {
      Toastify({
        text: "Se envio el Email!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    });
    formulario.reset()
});

//const btn = document.getElementById("cesta-carrito")

//if (btn !== null) {
  
  //}
