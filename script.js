// JS solamente del carrusel de proyectos y su funcion y diccionario
let imagenes = [
  {
    url: "ImagenesProyectos/img1.webp",
    nombre: "Proyecto 1",
    descripcion: "Esta es la descripcion del proyecto 1 Portafolio Personal",
  },
  {
    url: "ImagenesProyectos/img2.webp",
    nombre: "Proyecto 2",
    descripcion: "Esta es la descripcion del proyecto 2 Portafolio Personal",
  },
  {
    url: "ImagenesProyectos/img3.webp",
    nombre: "Proyecto 3",
    descripcion: "Esta es la descripcion del proyecto 3 Portafolio Personal",
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
