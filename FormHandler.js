document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // este aqui detiene el envio normal de los datos
    console.log("Formulario se detuvo, El proximo paso es obtener esos datos.");
  });
