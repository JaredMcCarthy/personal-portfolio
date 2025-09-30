// JS solamente del carrusel de proyectos y su funcion y diccionario
let imagenes = [
  {
    url: "Imagenes-Project/proyectoterminado.jpeg",
    nombre: "Portafolio Personal",
    descripcion:
      "Mi primer proyecto desarrollado con HTML, CSS y JavaScript, diseñado para mostrar mi trabajo y habilidades en la web, disponible en Github.",
  },
  {
    url: "Imagenes-Project/proyectoNoTerminado.jpeg",
    nombre: "TaskFlowCLI",
    descripcion:
      "TaskFlowCLI es un proyecto de interfaz de línea de comandos desarrollado principalmente en Python, donde integré inteligencia artificial mediante comandos simples para facilitar el uso de aplicaciones y programas, disponible en Github.",
  },
  {
    url: "Imagenes-Project/proyectoterminado.jpeg",
    nombre: "NewLife Club",
    descripcion:
      "Este proyecto lo desarrollé para entender mejor la funcionalidad y lógica de un sitio web en producción, usando principalmente Cursor. Aprendí a manejar herramientas como Render, PostgreSQL y Node.js. El sitio fue lanzado a producción para miles de usuarios y sentó las bases de una agencia que ofrece desarrollo web a comercios, disponible en Github. ",
  },
];

// Variables globales
// se declaramos todas las variables que usaremos que estane en html tambien
let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;

// Inicializar el carrusel - Asi se inicia el carrusel
function inicializarCarrusel() {
  actualizarContenido();
  actualizarPuntos();
}

// Actualizar imagen y texto
function actualizarContenido() {
  imagen.innerHTML =
    '<img class="img" src="' +
    imagenes[actual].url +
    '" alt="' +
    imagenes[actual].nombre +
    '" loading="lazy"/>';
  texto.innerHTML =
    "<h3>" +
    imagenes[actual].nombre +
    "</h3><p>" +
    imagenes[actual].descripcion +
    "</p>";
}

// Actualizar puntos indicadores
function actualizarPuntos() {
  puntos.innerHTML = "";
  for (let i = 0; i < imagenes.length; i++) {
    if (i === actual) {
      puntos.innerHTML += '<span class="bold">.</span>';
    } else {
      puntos.innerHTML += "<span>.</span>";
    }
  }
}

// Event listeners
atras.addEventListener("click", function () {
  actual = (actual - 1 + imagenes.length) % imagenes.length; //cuando haces click resta 1
  actualizarContenido();
  actualizarPuntos();
});

adelante.addEventListener("click", function () {
  actual = (actual + 1) % imagenes.length; //cuando hace click suma 1
  actualizarContenido();
  actualizarPuntos();
});

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", inicializarCarrusel);

// JS de que las imagenes pasen automatico cada 3 segundos o lo que sea

let intervaloCambio;

// esta funcion hace el cambio automatico

function iniciarCambioAutomatico() {
  intervaloCambio = setInterval(function () {
    actual = (actual + 1) % imagenes.length;
    actualizarContenido();
    actualizarPuntos();
  }, 5000); //aqui se pone cada 3seg
}

function detenerCambioAutomatico() {
  clearInterval(intervaloCambio); //detiene con clearInterval el setinterval osea lo detiene
}

document.addEventListener("DOMContentLoaded", function () {
  iniciarCambioAutomatico();

  let carrusel = document.getElementById("carrusel");
  carrusel.addEventListener("mouseover", detenerCambioAutomatico);
  carrusel.addEventListener("mouseout", iniciarCambioAutomatico);
  //esta funcion se detiene o sigue cuando el usuario interactua con el carrusel
});

// aqui termina el js del carrusel de proyectos.

// aqui empieza boton del empezar ahora

document.getElementById("btnComenzar").addEventListener("click", function () {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });

  // Espera 4 segundos DESPUÉS de que el usuario llegue a "about-me"
  setTimeout(function () {
    document
      .getElementById("proyectos-title")
      .scrollIntoView({ behavior: "smooth" });
  }, 4000);
});
