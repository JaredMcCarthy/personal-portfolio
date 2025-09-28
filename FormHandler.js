console.log("El archivo se estar cargando"); //mensaje al carga si funciona

const miForm = document.getElementById("formContacto"); //busca el ele con ese id
console.log("Formulario:", miForm); //ahi muestra si existe o no

if (miForm) {
  console.log("Si se encontro el formulario");
  miForm.onsubmit = function (event) {
    event.preventDefault(); //detiene el form tradicional al reca la pag
    console.log("Se detuvo el formulario y funciono");
    //aqui obtenemos los datos de donde estan los inputs
    const nombre = document.querySelector('input[name="name"').value;
    const email = document.querySelector('input[name="email"').value;
    const asunto = document.querySelector('input[name="asunto"').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    // muestra estos datos en la consola para revisar que esten bien
    // esta parte de aqui es solo de test en console para ver si funciona nada mas
    console.log("Datos capturados:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("asunto:", asunto);
    console.log("mensaje:", mensaje);
  };
} else {
  console.log("Error al buscar el formulario");
}
