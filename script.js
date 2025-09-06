const LeWindows = require("nodemailer/lib/mime-node/le-windows");

let imagenes = [
  {
    url: "Imagenes Proyectos/img1.webp",
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

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("imagen");
let puntos = documento.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;

atras.addEventListener("click", function () {
  actual -= 1;

  if (actual == -1) {
    actual = imagenes.length - 1;
  }

  imagen.innerHTML = `<img class="img" src=" ${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
  texto.innerHTM; = `
  <h3>${imagenes[actual].nombre}</h3>
  <p>${imagenes[actual].descripcion}</p>`
});
