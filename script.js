// JS solamente del carrusel de proyectos y su funcion y diccionario
// Este es basicamente el diccionario donde se guardara la info e imagenes de ls proyectos
let imagenes = [
  {
    url: "ImagenesProyectos/img1webp",
    nombre: "Proyecto 1",
    descripcion: "Esta es la descripcion del proyecto 1 Portafolio Personal",
  },
  {
    url: "Imagenes Proyectos/img2.webp",
    nombre: "Proyecto 2",
    descripcion: "Esta es la descripcion del proyecto 1 Portafolio Personal",
  },
  {
    url: "Imagenes Proyectos/img3.webp",
    nombre: "Proyecto 3",
    descripcion: "Esta es la descripcion del proyecto 1 Portafolio Personal",
  },
];

// creamos las variables de todas las partes del html que usaremos
let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = documento.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;
posicionCarrusel1();

// aqui es la funcion para atras, cambia la imagen y el texto segun el numero de la variable actual

atras.addEventListener("click", function () {
  actual -= 1;

  if (actual == -1) {
    actual = imagenes.length - 1;
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="imagen 1"loading="lazy"/> `;
  texto.innerHTML = `
  <h3>${imagenes[actual].nombre}</h3>
  <p>${imagenes[actual].descripcion}</p>`;
});

// ahora solamente falta adelante, copiamos lo de arriba aqui abajo cambiando variables

adelante.addEventListener("click", function () {
  actual += 1;
  // Solo cambia aqui que sumamos 1 y si actual es igual al largo de img pues actual se queda en 0
  if (actual == imagenes.length) {
    actual = 0;
  }
  // todo lo demas se queda igual
  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="imagen 1"loading="lazy"/> `;
  texto.innerHTML = `
  <h3>${imagenes[actual].nombre}</h3>
  <p>${imagenes[actual].descripcion}</p>
  `;

  posicionCarrusel1();
});

function posicionCarrusel1() {
  puntos.innerHTML = "";
  for (var i = 0; i < imagenes.length; i++) {
    if (i == actual) {
      puntos.innerHTML += `<p class="bold">.<p>`;
    } else {
      puntos.innerHTML += `<p>.<p>`;
    }
  }
}
