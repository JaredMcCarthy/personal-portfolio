emailjs.init("pvNkTPbtAh4nCTf5e"); //esta es la public key de emailjs

const miForm = document.getElementById("formContacto");

if (miForm) {
  miForm.onsubmit = function (event) {
    event.preventDefault(); //inicia el servidor inicial anres de detenerlo traidiconal

    //agarramos esos datos primero
    const nombre = document.querySelector('input[name="name"').value;
    const email = document.querySelector('input[name="email"').value;
    const asunto = document.querySelector('input[name="asunto"').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    // y con esto de abajo pues enviamos el email
    emailjs
      .send("service_qhrlyhn", "template_nxzxpnu", {
        //aui pegamos el Service ID y el template ID para que use el EmailJS y asi tome los datos de las variables de arriba
        name: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje,
      })
      .then(
        function () {
          console.log("El email ha sido enviado correctamente :)");
          alert("Mensaje enviado, nos pondremos en contacto pronto ;)");
        },
        function (error) {
          console.log("Error:", error); //alert sino pero al usuario
          alert("Error al enviarlo, intente nuevamente porfavor.");
        }
      );
  };
}

// ESTE CODIGO VA SER REEMPLAZADO POR EL DE ARRIBA PORQUE ESTE ES PURA TESTEACION
// NADA MAS NOS ASEGURAMOS QUE FUNCIONE EL LIVE CON EL CONSOLE Y LOS DOM
// CUALQUIER COSA USAS ESTE TEST SI DEJA DE FUNCIONAR LA CONEXION.

// console.log("El archivo se estar cargando"); //mensaje al carga si funciona

// const miForm = document.getElementById("formContacto"); //busca el ele con ese id
// console.log("Formulario:", miForm); //ahi muestra si existe o no

// if (miForm) {
//   console.log("Si se encontro el formulario");
//   miForm.onsubmit = function (event) {
//     event.preventDefault(); //detiene el form tradicional al reca la pag
//     console.log("Se detuvo el formulario y funciono");
//     //aqui obtenemos los datos de donde estan los inputs
//     const nombre = document.querySelector('input[name="name"').value;
//     const email = document.querySelector('input[name="email"').value;
//     const asunto = document.querySelector('input[name="asunto"').value;
//     const mensaje = document.querySelector('textarea[name="mensaje"]').value;

//     // muestra estos datos en la consola para revisar que esten bien
//     // esta parte de aqui es solo de test en console para ver si funciona nada mas
//     console.log("Datos capturados:");
//     console.log("Nombre:", nombre);
//     console.log("Email:", email);
//     console.log("asunto:", asunto);
//     console.log("mensaje:", mensaje);
//   };
// } else {
//   console.log("Error al buscar el formulario");
// }

//Info de EmailJS
//jared.mccarthy05@gmail.com
//Honduras2025!!!
