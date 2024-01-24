const formulario = document.getElementById('formulario');

//Validación en tiempo real de teléfono
telefono.addEventListener("blur", function(){
  const tlfregex = /^\d{9}$/;
  const telefono = document.getElementById('telefono').value;
  const confirmartelefono = document.getElementById('confirmartelefono').value;
  if (telefono.trim()!==''){ 
    if (!tlfregex.test(telefono)) {
     alert('Por favor, introduce un número de teléfono válido.');
     return;
    }
    if (confirmartelefono.trim()!==''){
      if (telefono!==confirmartelefono){
        alert('Los teléfonos no coinciden');
      }
    }
  }
})

confirmartelefono.addEventListener("blur",function(){
  const confirmartelefono = document.getElementById('confirmartelefono').value;
  const telefono = document.getElementById('telefono').value;
  if (confirmartelefono.trim()!==''){
  if (telefono!==confirmartelefono){
   alert('Los teléfonos no coinciden');
   return;
  }
}
})

//Validación en tiempo real de correo
correo.addEventListener("blur", function(){
  const emailregex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const correo = document.getElementById('correo').value;
  const confcorreo = document.getElementById('confcorreo').value;
if (correo.trim()!==''){
  if (!emailregex.test(correo)) {
    alert('Por favor, introduce un correo válido.');
    return;
  }
  if (confcorreo.trim()!==''){
    if (correo!==confcorreo){
      alert('Los correos no coinciden');
    }
  }
}
})

confcorreo.addEventListener("blur", function(){
  const confcorreo = document.getElementById('confcorreo').value;
  const correo = document.getElementById('correo').value;
  if (confcorreo.trim()!==''){
  if (correo!==confcorreo){
   alert('Los correos no coinciden');
   return;
  }
}
})

function validarBootstrap(){
  formulario.classList.add('was-validated');
  }

function aceptarCookies() {
  // Aquí puedes agregar tu lógica para guardar la aceptación de cookies
  // Por ejemplo, puedes utilizar cookies o almacenamiento local (localStorage)
  // Una vez que el usuario acepta las cookies, puedes ocultar la notificación
  const cookie = document.getElementById('cookieNotification');
  cookie.classList.add('visually-hidden');
}

//Función para mostrar/ocultar pieza de servicio
// function piezaserviciomostrar(){
//   const divPiezaServicioContainer = document.getElementById("divPiezaServicioContainer")
//   if (piezaservicio.value === "Sí"){
//     divPiezaServicioContainer.classList.remove("visually-hidden")
//   } else if (piezaservicio.value === "No"){
//     divPiezaServicioContainer.classList.add("visually-hidden")
//   }
// }

//Función para mostrar/ocultar baño de servicio
// function banoserviciomostrar(){
//   const divBanoServicioContainer = document.getElementById("divBanoServicioContainer")
//   if (banoservicio.value === "Sí"){
//     divBanoServicioContainer.classList.remove("visually-hidden")
//   } else if (banoservicio.value === "No"){
//     divBanoServicioContainer.classList.add("visually-hidden")
//   }
// }

// Array para almacenar las imágenes cargadas por el usuario
let imagesSuite1 = [];
let imagesSuite2 = [];
let imagesSuite3 = [];
let imagesSuite4 = [];
let imagesSuite5 = [];
let imagesSuite6 = [];
let imagesSuite7 = [];
let imagesSuite8 = [];
let imagesSuite9 = [];
let imagesSuite10 = [];
let imagesHab1 = [];
let imagesHab2 = [];
let imagesHab3 = [];
let imagesHab4 = [];
let imagesHab5 = [];
let imagesHab6 = [];
let imagesHab7 = [];
let imagesHab8 = [];
let imagesHab9 = [];
let imagesHab10 = [];
let imagesPiezaServicio1 = [];
let imagesPiezaServicio2 = [];
let imagesPiezaServicio3 = [];
let imagesPiezaServicio4 = [];
let imagesPiezaServicio5 = [];
let imagesBano1 = [];
let imagesBano2 = [];
let imagesBano3 = [];
let imagesBano4 = [];
let imagesBano5 = [];
let imagesBano6 = [];
let imagesBano7 = [];
let imagesBano8 = [];
let imagesBano9 = [];
let imagesBano10 = [];
let imagesBanoServicio1 = [];
let imagesBanoServicio2 = [];
let imagesBanoServicio3 = [];
let imagesBanoServicio4 = [];
let imagesBanoServicio5 = [];
let imagesBanos = [];
let imagesAmoblada = [];
let imagesCocina = [];
let imagesComedor = [];
let imagesLiving = [];
let imagesHall = [];
let imagesPatio = [];
let imagesAdicionales = [];
let imagesBalcon = [];
let imagesPiezaServicio =[];
let imagesBanoServicio = [];
let imagesFamilyRoom = [];
let imageshomeoffice = [];


function openModalAmoblada() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerAmoblada').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesAmoblada.length; i++) {
    const imgElementAmoblada = document.createElement('img');
    imgElementAmoblada.src = URL.createObjectURL(imagesAmoblada[i]);
    imgElementAmoblada.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerAmoblada').appendChild(imgElementAmoblada);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalAmoblada = new bootstrap.Modal(document.getElementById('imageModalAmoblada'));
  imageModalAmoblada.show();
}

document.getElementById('articulosamoblada').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListAmoblada = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesAmoblada = Array.from(fileListAmoblada);
});







function openModalCocina() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerCocina').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesCocina.length; i++) {
    const imgElementCocina = document.createElement('img');
    imgElementCocina.src = URL.createObjectURL(imagesCocina[i]);
    imgElementCocina.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerCocina').appendChild(imgElementCocina);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalCocina = new bootstrap.Modal(document.getElementById('imageModalCocina'));
  imageModalCocina.show();
}

document.getElementById('cocina').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListCocina = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesCocina = Array.from(fileListCocina);
});

function openModalComedor() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerComedor').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesComedor.length; i++) {
    const imgElementComedor = document.createElement('img');
    imgElementComedor.src = URL.createObjectURL(imagesComedor[i]);
    imgElementComedor.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerComedor').appendChild(imgElementComedor);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalComedor = new bootstrap.Modal(document.getElementById('imageModalComedor'));
  imageModalComedor.show();
}

document.getElementById('comedor').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListComedor = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesComedor = Array.from(fileListComedor);
});

function openModalLiving() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerLiving').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesLiving.length; i++) {
    const imgElementLiving = document.createElement('img');
    imgElementLiving.src = URL.createObjectURL(imagesLiving[i]);
    imgElementLiving.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerLiving').appendChild(imgElementLiving);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalLiving = new bootstrap.Modal(document.getElementById('imageModalLiving'));
  imageModalLiving.show();
}

document.getElementById('living').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListLiving = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesLiving = Array.from(fileListLiving);
});

function openModalHall() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerHall').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHall.length; i++) {
    const imgElementHall = document.createElement('img');
    imgElementHall.src = URL.createObjectURL(imagesHall[i]);
    imgElementHall.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerHall').appendChild(imgElementHall);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHall = new bootstrap.Modal(document.getElementById('imageModalHall'));
  imageModalHall.show();
}

document.getElementById('hall').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListHall = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesHall = Array.from(fileListHall);
});

function openModalPatio() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPatio').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPatio.length; i++) {
    const imgElementPatio = document.createElement('img');
    imgElementPatio.src = URL.createObjectURL(imagesPatio[i]);
    imgElementPatio.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPatio').appendChild(imgElementPatio);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPatio = new bootstrap.Modal(document.getElementById('imageModalPatio'));
  imageModalPatio.show();
}

function openModalAdicionales() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerAdicionales').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesAdicionales.length; i++) {
    const imgElementAdicionales = document.createElement('img');
    imgElementAdicionales.src = URL.createObjectURL(imagesAdicionales[i]);
    imgElementAdicionales.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerAdicionales').appendChild(imgElementAdicionales);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalAdicionales = new bootstrap.Modal(document.getElementById('imageModalAdicionales'));
  imageModalAdicionales.show();
}

document.getElementById('housePhotos').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListAdicionales = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesAdicionales = Array.from(fileListAdicionales);
});

// funcion para ocualtar las bienechurias
function toggleConstruccion() {
  const construccionValue = $("#construccion").val();
  
  const elementos = [
    "#amobadaDiv", "#mterrazaDiv", "#construidostogle", "#anosDiv", "#divInputFileAmoblada",
    "#pisosDiv", "#suitestittle", "#suitesDiv", "#dormitoriostittle", "#dormitoriosDiv",
    "#divPiezaServicioContainer", "#banostittle", "#banosDiv", "#divBanoServicioContainer",
    "#cocinatittle", "#cocinaDiv", "#ayudaGeneral", "#livingtittle", "#livingDiv",
    "#oculta1", "#oculta2", "#oculta3", "#oculta4", ".oculta5"
  ];

  if (construccionValue === "Sí") {
    elementos.forEach(item => $(item).removeClass("visually-hidden"));
  } else {
    elementos.forEach(item => $(item).addClass("visually-hidden"));
    $("#oculta4").removeClass("visually-hidden");
    anos.value = 1800;   // aqui hay que meter todos los valores del "no tiene"
    numeroSuite.value = "0";
    numeroDormitorios.value= "0";
    numeroPiezasServicio.value = "0";
    numeroBanos.value = "0";
    numeroBanosServicio.value = "0";
    pisococina.value = "no tiene";
    pisocomedor.value = "no tiene";
    pisoliving.value = "no tiene";
    pisohall.value = "no tiene";
    mconstruidos.value = "1";
    mterraza.value = "0";
    nPisos.value = "1";
  }
}        


//Función para mostrar/ocultar los artículos en venta
function toggleTextarea() {
  const amoblada = document.getElementById("amoblada");
  const articuloscasa = document.getElementById("articuloscasa"); 
  const m2 = document.getElementById("m2");                                   //aqui es en donde voy a trabajar 
  const articuloscasaContainer = document.getElementById("articuloscasaContainer");        
  const textareatutorial = document.getElementById("textareatutorial");
  const divInputFileAmoblada = document.getElementById("divInputFileAmoblada");
 
  if (amoblada.value === "Sí") {
    articuloscasa.disabled = false;
    articuloscasa.style.width= "100%";
    articuloscasa.style.height= "100%";
    articuloscasaContainer.style.height= "55%"; 
    articuloscasa.innerHTML = "LIVING-COMEDOR\n    ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    ………………………………………………………………………………………….\n    TERRAZA\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    COCINA\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    LOGGIA\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    HALL DE ENTRADA\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    PASILLO\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    ………………………………………………………………………………………….\n    BAÑO DE VISITAS\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    DORMITORIO PRINCIPAL\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    BAÑO PRINCIPAL\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    DORMITORIO 2\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    PASILLO A DORMITORIOS\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    DORMITORIO 3\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n    OTROS:\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….\n     ………………………………………………………………………………………….";
    articuloscasaContainer.style.height = articuloscasaContainer.scrollHeight + "1px";
    textareatutorial.style.display = "block";
    articuloscasaContainer.classList.remove("visually-hidden");
    divInputFileAmoblada.classList.remove("visually-hidden");
  
  } else {
    articuloscasa.disabled = true;
    articuloscasa.style.height= "56px";
    articuloscasaContainer.style.height = articuloscasaContainer.scrollHeight = "100%";
    m2.style.height= "50%";
    articuloscasa.innerHTML = ""; 
    textareatutorial.style.display = "";
    articuloscasaContainer.classList.add("visually-hidden");
    divInputFileAmoblada.classList.add("visually-hidden");
  }
}
// ===========> el text area del del la recepcion final/
function togglerecepcion() { 
  const bienhechuria = document.getElementById("bienhechuria");
  const enTramiteText = document.getElementById("enTramiteText");
  const enTramiteTextdiv = document.getElementById("enTramiteTextdiv"); 
  
  const parcialText = document.getElementById("parcialText");
  const parcialTextdiv = document.getElementById("parcialTextdiv"); 


  if (bienhechuria.value === "En trámite") {
    enTramiteText.style.width= "90%";
    enTramiteTextdiv.classList.remove("visually-hidden");
  } else {
    enTramiteTextdiv.classList.add("visually-hidden");
  }
  
  
  if (bienhechuria.value === "Parcial") {
    parcialText.style.width= "90%";
    parcialTextdiv.classList.remove("visually-hidden");
  } else {
    parcialTextdiv.classList.add("visually-hidden");
  }
  }
// ===========> funcion para ocultar el text area de termopanel//
function toggletermopanel() {
  const termopanel = document.getElementById("termopanel");
  const termopanelText = document.getElementById("termopanelText");
  const termopanelContainer = document.getElementById("termopanelContainer");

  if (termopanel.value === "Parcial") {
    termopanelText.style.width= "90%";
    termopanelContainer.classList.remove("visually-hidden");  
} else {
  termopanelContainer.classList.add("visually-hidden");
}
}

// ===========> funcion para ocultar el text area de horario de conserjeria//
function togglehorario() {
  const conserjeriaPregunta = document.getElementById("conserjeriaPregunta");
  const horarioText = document.getElementById("horarioText");
  const horarioContainer= document.getElementById("horarioContainer");

  if (conserjeriaPregunta.value === "Sí") {
    horarioText.style.width= "90%";
    horarioContainer.classList.remove("visually-hidden");  
} else {
  horarioContainer.classList.add("visually-hidden");
}
}
// ===========> funcion para ocultar el sectc de si hay conseria 

  






// ===========> funcion para ocultar el texto de ayuda de mt2 construidos//
(function textomt2Ayuda() { 
const textomt2 = document.getElementById("textomt2");
const construidostogle = document.getElementById("construidostogle");
 

construidostogle.addEventListener("mouseover", () => {
  textomt2.classList.remove("visually-hidden");
});
construidostogle.addEventListener("mouseout", () => {
  textomt2.classList.add("visually-hidden");
});
})();


// ==============> Con esta función creo los selects del tipo de piso dependiendo de la cantidad de habitaciones
function mostrarCamposDeSeleccion() {
  var numeroDormitorios = parseInt(document.getElementById("numeroDormitorios").value);

  const tipoPisoButton = document.getElementById('tipoPisoButton');

  if (numeroDormitorios !=0) {
    tipoPisoButton.classList.remove('visually-hidden')
  } else {
    tipoPisoButton.classList.add('visually-hidden');
    numeroDormitorio = 'No aplica'
  }



  var contenedorPisosHab = document.getElementById("contenedorPisosHab");
  contenedorPisosHab.innerHTML = "";
  var contenedorPisosHab3 = document.getElementById("contenedorPisosHab3");
  contenedorPisosHab3.innerHTML = "";
  //Para crear el input de las fotos de las habitaciones de la suite
  for (var i=1; i<=10; i++){
    //Creo el label
    var labelInputHab = document.createElement('label');
    labelInputHab.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos del dormitorio #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInputHab.setAttribute('for', 'fotoHab'+ i);
    labelInputHab.classList.add('form-label');
    //Creo el div que mete las col dentro del row
    var divFormHab3 = document.createElement('div');
    divFormHab3.classList.add('mb-3');
    divFormHab3.classList.add('flexRight');
    //Creo el div del input group
    divGroupHab=document.createElement('div');
    divGroupHab.classList.add('input-group');
    // Creo el input para subir las fotos
    var inputHab = document.createElement('input');
    inputHab.type= "file";
    inputHab.accept = "image/*";
    inputHab.multiple = true;
    inputHab.max = "2";
    inputHab.name = "fotoHab" + i;
    inputHab.id = "fotoHab" + i;
    inputHab.classList.add("visually-hidden");
    inputHab.classList.add('form-control');
    //Creo el botón donde se verán las fotos
    buttonPhotosHab = document.createElement('button');
    buttonPhotosHab.setAttribute("onclick", `openModalHab${i}()`);
    buttonPhotosHab.classList.add('btn');
    buttonPhotosHab.classList.add('btn-primary');
    buttonPhotosHab.classList.add('visually-hidden');
    buttonPhotosHab.id="HabPhotos" + i;
    //Creo el <i>
    iconoHab = document.createElement('i');
    iconoHab.classList.add('fa-solid');
    iconoHab.classList.add('fa-eye');
    iconoHab.classList.add('fa-xl');


    contenedorPisosHab3.classList.add("d-flex");
    contenedorPisosHab3.classList.add("flex-wrap");
    contenedorPisosHab3.appendChild(divFormHab3);

    divFormHab3.appendChild(labelInputHab);
    
    divFormHab3.appendChild(divGroupHab);
    divGroupHab.appendChild(inputHab);
    divGroupHab.appendChild(buttonPhotosHab);
    buttonPhotosHab.appendChild(iconoHab);
    //divFormHab3.appendChild(inputHab);
    //divFormHab3.appendChild(buttonPhotos);

    

    if (i <= numeroDormitorios) {
      inputHab.classList.remove("visually-hidden");
      buttonPhotosHab.classList.remove('visually-hidden');
    }

    if (i > numeroDormitorios) {
      labelInputHab.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del dormitorio
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divFormHabb = document.createElement("div");



    label.innerHTML = "Piso del dormitorio #" + i;
    label.setAttribute("for", "pisoHab" + i);
    
    var selectHab = document.createElement("select");
    selectHab.name = "pisoDormitorio" + i;
    selectHab.id = "pisoDormitorio" + i;
    selectHab.required = false;
    selectHab.classList.add("visually-hidden");
    selectHab.classList.add("form-select");
    divFormHabb.classList.add("form-floating");
    divFormHabb.classList.add("mb-3");
    divFormHabb.classList.add("flexRight");
    divFormHabb.classList.add("d-inline-flex");
    contenedorPisosHab.appendChild(divFormHabb);

    var optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.innerHTML = "Seleccione una opción";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectHab.appendChild(optionDefault);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    selectHab.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    selectHab.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    selectHab.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    selectHab.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    selectHab.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    selectHab.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    selectHab.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    selectHab.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    selectHab.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    selectHab.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    selectHab.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    selectHab.appendChild(option16);


    divFormHabb.appendChild(selectHab);

    divFormHabb.appendChild(label);

    if (i <= numeroDormitorios) {
      selectHab.classList.remove("visually-hidden");
    }

    if (i > numeroDormitorios) {
      selectHab.disabled = true
      label.hidden = true;
    }
  }
}

function openModalHab1() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio1').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab1.length; i++) {
    const imgElementHab1 = document.createElement('img');
    imgElementHab1.src = URL.createObjectURL(imagesHab1[i]);
    imgElementHab1.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio1').appendChild(imgElementHab1);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab1 = new bootstrap.Modal(document.getElementById('imageModalDormitorio1'));
  imageModalHab1.show();

  document.getElementById('fotoHab1').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab1 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab1 = Array.from(fileListHab1);
  });

}

function openModalHab2() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio2').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab2.length; i++) {
    const imgElementHab2 = document.createElement('img');
    imgElementHab2.src = URL.createObjectURL(imagesHab2[i]);
    imgElementHab2.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio2').appendChild(imgElementHab2);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab2 = new bootstrap.Modal(document.getElementById('imageModalDormitorio2'));
  imageModalHab2.show();

  document.getElementById('fotoHab2').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab2 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab2 = Array.from(fileListHab2);
  });

}

function openModalHab3() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio3').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab3.length; i++) {
    const imgElementHab3 = document.createElement('img');
    imgElementHab3.src = URL.createObjectURL(imagesHab3[i]);
    imgElementHab3.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio3').appendChild(imgElementHab3);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab3 = new bootstrap.Modal(document.getElementById('imageModalDormitorio3'));
  imageModalHab3.show();

  document.getElementById('fotoHab3').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab3 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab3 = Array.from(fileListHab3);
  });

}

function openModalHab4() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio4').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab4.length; i++) {
    const imgElementHab4 = document.createElement('img');
    imgElementHab4.src = URL.createObjectURL(imagesHab4[i]);
    imgElementHab4.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio4').appendChild(imgElementHab4);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab4 = new bootstrap.Modal(document.getElementById('imageModalDormitorio4'));
  imageModalHab4.show();

  document.getElementById('fotoHab4').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab4 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab4 = Array.from(fileListHab4);
  });

}

function openModalHab5() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio5').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab5.length; i++) {
    const imgElementHab5 = document.createElement('img');
    imgElementHab5.src = URL.createObjectURL(imagesHab5[i]);
    imgElementHab5.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio5').appendChild(imgElementHab5);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab5 = new bootstrap.Modal(document.getElementById('imageModalDormitorio5'));
  imageModalHab5.show();

  document.getElementById('fotoHab5').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab5 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab5 = Array.from(fileListHab5);
  });

}

function openModalHab6() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio6').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab6.length; i++) {
    const imgElementHab6 = document.createElement('img');
    imgElementHab6.src = URL.createObjectURL(imagesHab6[i]);
    imgElementHab6.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio6').appendChild(imgElementHab6);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab6 = new bootstrap.Modal(document.getElementById('imageModalDormitorio6'));
  imageModalHab6.show();

  document.getElementById('fotoHab6').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab6 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab6 = Array.from(fileListHab6);
  });

}

function openModalHab7() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio7').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab7.length; i++) {
    const imgElementHab7 = document.createElement('img');
    imgElementHab7.src = URL.createObjectURL(imagesHab7[i]);
    imgElementHab7.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio7').appendChild(imgElementHab7);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab7 = new bootstrap.Modal(document.getElementById('imageModalDormitorio7'));
  imageModalHab7.show();

  document.getElementById('fotoHab7').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab7 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab7 = Array.from(fileListHab7);
  });

}

function openModalHab8() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio8').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab8.length; i++) {
    const imgElementHab8 = document.createElement('img');
    imgElementHab8.src = URL.createObjectURL(imagesHab8[i]);
    imgElementHab8.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio8').appendChild(imgElementHab8);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab8 = new bootstrap.Modal(document.getElementById('imageModalDormitorio8'));
  imageModalHab8.show();

  document.getElementById('fotoHab8').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab8 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab8 = Array.from(fileListHab8);
  });

}

function openModalHab9() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio9').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab9.length; i++) {
    const imgElementHab9 = document.createElement('img');
    imgElementHab9.src = URL.createObjectURL(imagesHab9[i]);
    imgElementHab9.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio9').appendChild(imgElementHab9);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab9 = new bootstrap.Modal(document.getElementById('imageModalDormitorio9'));
  imageModalHab9.show();

  document.getElementById('fotoHab9').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab9 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab9 = Array.from(fileListHab9);
  });

}

function openModalHab10() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerDormitorio10').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesHab10.length; i++) {
    const imgElementHab10 = document.createElement('img');
    imgElementHab10.src = URL.createObjectURL(imagesHab10[i]);
    imgElementHab10.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerDormitorio10').appendChild(imgElementHab10);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalHab10 = new bootstrap.Modal(document.getElementById('imageModalDormitorio10'));
  imageModalHab10.show();

  document.getElementById('fotoHab10').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListHab10 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesHab10 = Array.from(fileListHab10);
  });

}

function mostrarCamposDeSeleccionBanos() {
  var numeroBanos = parseInt(document.getElementById("numeroBanos").value);
  var contenedorPisosBano = document.getElementById("contenedorPisosBano");
  contenedorPisosBano.innerHTML = "";
  var contenedorPisosBano3 = document.getElementById("contenedorPisosBano3");
  contenedorPisosBano3.innerHTML = "";

  const tipoPisoButtonBano = document.getElementById('tipoPisoButtonBano');

  if (numeroBanos !=0) {
    tipoPisoButtonBano.classList.remove('visually-hidden')
  } else {
    tipoPisoButtonBano.classList.add('visually-hidden')
  }

  //Para crear el input de las fotos de los baños
  for (var i=1; i<=10; i++){
    //Creo el label
    var labelInputBano = document.createElement('label');
    labelInputBano.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos del baño #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInputBano.setAttribute('for', 'fotoBano'+ i);
    labelInputBano.classList.add('form-label');
    //Creo el div que mete las col dentro del row
    var divFormBano3 = document.createElement('div');
    divFormBano3.classList.add('mb-3');
    divFormBano3.classList.add('flexRight');
    //Creo el div del input group
    divGroupBano=document.createElement('div');
    divGroupBano.classList.add('input-group');
    // Creo el input para subir las fotos
    var inputBano = document.createElement('input');
    inputBano.type= "file";
    inputBano.accept = "image/*";
    inputBano.multiple = true;
    inputBano.max = "2";
    inputBano.name = "fotoBano" + i;
    inputBano.id = "fotoBano" + i;
    inputBano.classList.add("visually-hidden");
    inputBano.classList.add('form-control');
    //Creo el botón donde se verán las fotos
    buttonPhotosBano = document.createElement('button');
    buttonPhotosBano.setAttribute("onclick", `openModalBano${i}()`);
    buttonPhotosBano.classList.add('btn');
    buttonPhotosBano.classList.add('btn-primary');
    buttonPhotosBano.classList.add('visually-hidden');
    buttonPhotosBano.id="BanoPhotos" + i;
    //Creo el <i>
    iconoBano = document.createElement('i');
    iconoBano.classList.add('fa-solid');
    iconoBano.classList.add('fa-eye');
    iconoBano.classList.add('fa-xl');


    contenedorPisosBano3.classList.add("d-flex");
    contenedorPisosBano3.classList.add("flex-wrap");
    contenedorPisosBano3.appendChild(divFormBano3);

    divFormBano3.appendChild(labelInputBano);
    
    divFormBano3.appendChild(divGroupBano);
    divGroupBano.appendChild(inputBano);
    divGroupBano.appendChild(buttonPhotosBano);
    buttonPhotosBano.appendChild(iconoBano);
    //divFormBano3.appendChild(inputBano);
    //divFormBano3.appendChild(buttonPhotos);

    

    if (i <= numeroBanos) {
      inputBano.classList.remove("visually-hidden");
      buttonPhotosBano.classList.remove('visually-hidden');
    }

    if (i > numeroBanos) {
      labelInputBano.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del bano
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divFormBanob = document.createElement("div");



    label.innerHTML = "Piso del baño #" + i;
    label.setAttribute("for", "pisoBano" + i);
    
    var selectBano = document.createElement("select");
    selectBano.name = "pisoBano" + i;
    selectBano.id = "pisoBano" + i;
    selectBano.required = false;
    selectBano.classList.add("visually-hidden");
    selectBano.classList.add("form-select");
    divFormBanob.classList.add("form-floating");
    divFormBanob.classList.add("mb-3");
    divFormBanob.classList.add("flexRight");
    divFormBanob.classList.add("d-inline-flex");
    contenedorPisosBano.appendChild(divFormBanob);

    var optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.innerHTML = "Seleccione una opción";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectBano.appendChild(optionDefault);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    selectBano.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    selectBano.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    selectBano.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    selectBano.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    selectBano.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    selectBano.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    selectBano.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    selectBano.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    selectBano.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    selectBano.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    selectBano.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    selectBano.appendChild(option16);


    divFormBanob.appendChild(selectBano);

    divFormBanob.appendChild(label);

    if (i <= numeroBanos) {
      selectBano.classList.remove("visually-hidden");
    }

    if (i > numeroBanos) {
      selectBano.disabled = true
      label.hidden = true;
    }
  }
}

function openModalBano1() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos1').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano1.length; i++) {
    const imgElementBano1 = document.createElement('img');
    imgElementBano1.src = URL.createObjectURL(imagesBano1[i]);
    imgElementBano1.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos1').appendChild(imgElementBano1);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano1 = new bootstrap.Modal(document.getElementById('imageModalBanos1'));
  imageModalBano1.show();

  document.getElementById('fotoBano1').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano1 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano1 = Array.from(fileListBano1);
  });

}

function openModalBano2() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos2').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano2.length; i++) {
    const imgElementBano2 = document.createElement('img');
    imgElementBano2.src = URL.createObjectURL(imagesBano2[i]);
    imgElementBano2.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos2').appendChild(imgElementBano2);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano2 = new bootstrap.Modal(document.getElementById('imageModalBanos2'));
  imageModalBano2.show();

  document.getElementById('fotoBano2').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano2 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano2 = Array.from(fileListBano2);
  });

}

function openModalBano3() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos3').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano3.length; i++) {
    const imgElementBano3 = document.createElement('img');
    imgElementBano3.src = URL.createObjectURL(imagesBano3[i]);
    imgElementBano3.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos3').appendChild(imgElementBano3);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano3 = new bootstrap.Modal(document.getElementById('imageModalBanos3'));
  imageModalBano3.show();

  document.getElementById('fotoBano3').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano3 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano3 = Array.from(fileListBano3);
  });

}

function openModalBano4() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos4').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano4.length; i++) {
    const imgElementBano4 = document.createElement('img');
    imgElementBano4.src = URL.createObjectURL(imagesBano4[i]);
    imgElementBano4.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos4').appendChild(imgElementBano4);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano4 = new bootstrap.Modal(document.getElementById('imageModalBanos4'));
  imageModalBano4.show();

  document.getElementById('fotoBano4').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano4 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano4 = Array.from(fileListBano4);
  });

}

function openModalBano5() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos5').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano5.length; i++) {
    const imgElementBano5 = document.createElement('img');
    imgElementBano5.src = URL.createObjectURL(imagesBano5[i]);
    imgElementBano5.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos5').appendChild(imgElementBano5);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano5 = new bootstrap.Modal(document.getElementById('imageModalBanos5'));
  imageModalBano5.show();

  document.getElementById('fotoBano5').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano5 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano5 = Array.from(fileListBano5);
  });

}

function openModalBano6() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos6').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano6.length; i++) {
    const imgElementBano6 = document.createElement('img');
    imgElementBano6.src = URL.createObjectURL(imagesBano6[i]);
    imgElementBano6.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos6').appendChild(imgElementBano6);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano6 = new bootstrap.Modal(document.getElementById('imageModalBanos6'));
  imageModalBano6.show();

  document.getElementById('fotoBano6').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano6 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano6 = Array.from(fileListBano6);
  });

}

function openModalBano7() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos7').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano7.length; i++) {
    const imgElementBano7 = document.createElement('img');
    imgElementBano7.src = URL.createObjectURL(imagesBano7[i]);
    imgElementBano7.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos7').appendChild(imgElementBano7);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano7 = new bootstrap.Modal(document.getElementById('imageModalBanos7'));
  imageModalBano7.show();

  document.getElementById('fotoBano7').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano7 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano7 = Array.from(fileListBano7);
  });

}

function openModalBano8() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos8').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano8.length; i++) {
    const imgElementBano8 = document.createElement('img');
    imgElementBano8.src = URL.createObjectURL(imagesBano8[i]);
    imgElementBano8.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos8').appendChild(imgElementBano8);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano8 = new bootstrap.Modal(document.getElementById('imageModalBanos8'));
  imageModalBano8.show();

  document.getElementById('fotoBano8').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano8 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano8 = Array.from(fileListBano8);
  });

}

function openModalBano9() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos9').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano9.length; i++) {
    const imgElementBano9 = document.createElement('img');
    imgElementBano9.src = URL.createObjectURL(imagesBano9[i]);
    imgElementBano9.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos9').appendChild(imgElementBano9);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano9 = new bootstrap.Modal(document.getElementById('imageModalBanos9'));
  imageModalBano9.show();

  document.getElementById('fotoBano9').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano9 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano9 = Array.from(fileListBano9);
  });

}

function openModalBano10() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanos10').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBano10.length; i++) {
    const imgElementBano10 = document.createElement('img');
    imgElementBano10.src = URL.createObjectURL(imagesBano10[i]);
    imgElementBano10.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanos10').appendChild(imgElementBano10);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBano10 = new bootstrap.Modal(document.getElementById('imageModalBanos10'));
  imageModalBano10.show();

  document.getElementById('fotoBano10').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBano10 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBano10 = Array.from(fileListBano10);
  });

}

function mostrarCamposDeSeleccionBanosServicio() {
  var numeroBanosServicio = parseInt(document.getElementById("numeroBanosServicio").value);
  var contenedorPisosBanosServicio = document.getElementById("contenedorPisosBanosServicio");
  contenedorPisosBanosServicio.innerHTML = "";
  var contenedorPisosBanosServicio3 = document.getElementById("contenedorPisosBanosServicio3");
  contenedorPisosBanosServicio3.innerHTML = "";

  const tipoPisoButtonBanoServicio = document.getElementById('tipoPisoButtonBanoServicio');

  if (numeroBanosServicio !=0) {
    tipoPisoButtonBanoServicio.classList.remove('visually-hidden')
  } else {
    tipoPisoButtonBanoServicio.classList.add('visually-hidden')
  }

  //Para crear el input de las fotos de los baños
  for (var i=1; i<=10; i++){
    //Creo el label
    var labelInputBanosServicio = document.createElement('label');
    labelInputBanosServicio.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos del baño de servicio #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInputBanosServicio.setAttribute('for', 'fotoBanosServicio'+ i);
    labelInputBanosServicio.classList.add('form-label');
    //Creo el div que mete las col dentro del row
    var divFormBanosServicio3 = document.createElement('div');
    divFormBanosServicio3.classList.add('mb-3');
    divFormBanosServicio3.classList.add('flexRight');
    //Creo el div del input group
    divGroupBanosServicio=document.createElement('div');
    divGroupBanosServicio.classList.add('input-group');
    // Creo el input para subir las fotos
    var inputBanosServicio = document.createElement('input');
    inputBanosServicio.type= "file";
    inputBanosServicio.accept = "image/*";
    inputBanosServicio.multiple = true;
    inputBanosServicio.max = "2";
    inputBanosServicio.name = "fotoBanosServicio" + i;
    inputBanosServicio.id = "fotoBanosServicio" + i;
    inputBanosServicio.classList.add("visually-hidden");
    inputBanosServicio.classList.add('form-control');
    //Creo el botón donde se verán las fotos
    buttonPhotosBanosServicio = document.createElement('button');
    buttonPhotosBanosServicio.setAttribute("onclick", `openModalBanosServicio${i}()`);
    buttonPhotosBanosServicio.classList.add('btn');
    buttonPhotosBanosServicio.classList.add('btn-primary');
    buttonPhotosBanosServicio.classList.add('visually-hidden');
    buttonPhotosBanosServicio.id="BanosServicioPhotos" + i;
    //Creo el <i>
    iconoBanosServicio = document.createElement('i');
    iconoBanosServicio.classList.add('fa-solid');
    iconoBanosServicio.classList.add('fa-eye');
    iconoBanosServicio.classList.add('fa-xl');


    contenedorPisosBanosServicio3.classList.add("d-flex");
    contenedorPisosBanosServicio3.classList.add("flex-wrap");
    contenedorPisosBanosServicio3.appendChild(divFormBanosServicio3);

    divFormBanosServicio3.appendChild(labelInputBanosServicio);
    
    divFormBanosServicio3.appendChild(divGroupBanosServicio);
    divGroupBanosServicio.appendChild(inputBanosServicio);
    divGroupBanosServicio.appendChild(buttonPhotosBanosServicio);
    buttonPhotosBanosServicio.appendChild(iconoBanosServicio);
    //divFormBanosServicio3.appendChild(inputBanosServicio);
    //divFormBanosServicio3.appendChild(buttonPhotos);

    

    if (i <= numeroBanosServicio) {
      inputBanosServicio.classList.remove("visually-hidden");
      buttonPhotosBanosServicio.classList.remove('visually-hidden');
    }
    
    if (i > numeroBanosServicio) {
      labelInputBanosServicio.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del bano
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divFormBanosServiciob = document.createElement("div");



    label.innerHTML = "Piso del baño de servicio #" + i;
    label.setAttribute("for", "pisoBanosServicio" + i);
    
    var selectBanosServicio = document.createElement("select");
    selectBanosServicio.name = "pisoBanosServicio" + i;
    selectBanosServicio.id = "pisoBanosServicio" + i;
    selectBanosServicio.required = false;
    selectBanosServicio.classList.add("visually-hidden");
    selectBanosServicio.classList.add("form-select");
    divFormBanosServiciob.classList.add("form-floating");
    divFormBanosServiciob.classList.add("mb-3");
    divFormBanosServiciob.classList.add("flexRight");
    divFormBanosServiciob.classList.add("d-inline-flex");
    contenedorPisosBanosServicio.appendChild(divFormBanosServiciob);

    var optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.innerHTML = "Seleccione una opción";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectBanosServicio.appendChild(optionDefault);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    selectBanosServicio.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    selectBanosServicio.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    selectBanosServicio.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    selectBanosServicio.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    selectBanosServicio.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    selectBanosServicio.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    selectBanosServicio.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    selectBanosServicio.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    selectBanosServicio.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    selectBanosServicio.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    selectBanosServicio.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    selectBanosServicio.appendChild(option16);


    divFormBanosServiciob.appendChild(selectBanosServicio);

    divFormBanosServiciob.appendChild(label);

    if (i <= numeroBanosServicio) {
      selectBanosServicio.classList.remove("visually-hidden");
    }

    if (i > numeroBanosServicio) {
      selectBanosServicio.disabled = true
      label.hidden = true;
    }
  }
}

function openModalBanosServicio1() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanosServicio1').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBanoServicio1.length; i++) {
    const imgElementBanoServicio1 = document.createElement('img');
    imgElementBanoServicio1.src = URL.createObjectURL(imagesBanoServicio1[i]);
    imgElementBanoServicio1.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanosServicio1').appendChild(imgElementBanoServicio1);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBanosServicio1 = new bootstrap.Modal(document.getElementById('imageModalBanosServicio1'));
  imageModalBanosServicio1.show();

  document.getElementById('fotoBanosServicio1').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBanoServicio1 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBanoServicio1 = Array.from(fileListBanoServicio1);
  });

}

function openModalBanosServicio2() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanosServicio2').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBanoServicio2.length; i++) {
    const imgElementBanoServicio2 = document.createElement('img');
    imgElementBanoServicio2.src = URL.createObjectURL(imagesBanoServicio2[i]);
    imgElementBanoServicio2.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanosServicio2').appendChild(imgElementBanoServicio2);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBanosServicio2 = new bootstrap.Modal(document.getElementById('imageModalBanosServicio2'));
  imageModalBanosServicio2.show();

  document.getElementById('fotoBanosServicio2').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBanoServicio2 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBanoServicio2 = Array.from(fileListBanoServicio2);
  });

}

function openModalBanosServicio3() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanosServicio3').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBanoServicio3.length; i++) {
    const imgElementBanoServicio3 = document.createElement('img');
    imgElementBanoServicio3.src = URL.createObjectURL(imagesBanoServicio3[i]);
    imgElementBanoServicio3.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanosServicio3').appendChild(imgElementBanoServicio3);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBanosServicio3 = new bootstrap.Modal(document.getElementById('imageModalBanosServicio3'));
  imageModalBanosServicio3.show();

  document.getElementById('fotoBanosServicio3').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBanoServicio3 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBanoServicio3 = Array.from(fileListBanoServicio3);
  });

}

function openModalBanosServicio4() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanosServicio4').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBanoServicio4.length; i++) {
    const imgElementBanoServicio4 = document.createElement('img');
    imgElementBanoServicio4.src = URL.createObjectURL(imagesBanoServicio4[i]);
    imgElementBanoServicio4.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanosServicio4').appendChild(imgElementBanoServicio4);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBanosServicio4 = new bootstrap.Modal(document.getElementById('imageModalBanosServicio4'));
  imageModalBanosServicio4.show();

  document.getElementById('fotoBanosServicio4').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBanoServicio4 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBanoServicio4 = Array.from(fileListBanoServicio4);
  });

}

function openModalBanosServicio5() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerBanosServicio5').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesBanoServicio5.length; i++) {
    const imgElementBanoServicio5 = document.createElement('img');
    imgElementBanoServicio5.src = URL.createObjectURL(imagesBanoServicio5[i]);
    imgElementBanoServicio5.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerBanosServicio5').appendChild(imgElementBanoServicio5);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalBanosServicio5 = new bootstrap.Modal(document.getElementById('imageModalBanosServicio5'));
  imageModalBanosServicio5.show();

  document.getElementById('fotoBanosServicio5').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListBanoServicio5 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesBanoServicio5 = Array.from(fileListBanoServicio5);
  });

}

function mostrarCamposDeSeleccionPiezasServicio() {
  var numeroPiezasServicio = parseInt(document.getElementById("numeroPiezasServicio").value);
  var contenedorPisosPiezasServicio = document.getElementById("contenedorPisosPiezasServicio");
  contenedorPisosPiezasServicio.innerHTML = "";
  var contenedorPisosPiezasServicio3 = document.getElementById("contenedorPisosPiezasServicio3");
  contenedorPisosPiezasServicio3.innerHTML = "";

  const tipoPisoButtonPiezaServicio = document.getElementById('tipoPisoButtonPiezaServicio');

  if (numeroPiezasServicio !=0) {
    tipoPisoButtonPiezaServicio.classList.remove('visually-hidden')
  } else {
    tipoPisoButtonPiezaServicio.classList.add('visually-hidden')
  }


  //Para crear el input de las fotos de los piezas
  for (var i=1; i<=10; i++){
    //Creo el label
    var labelInputPiezasServicio = document.createElement('label');
    labelInputPiezasServicio.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos de la pieza de servicio #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInputPiezasServicio.setAttribute('for', 'fotoPiezasServicio'+ i);
    labelInputPiezasServicio.classList.add('form-label');
    //Creo el div que mete las col dentro del row
    var divFormPiezasServicio3 = document.createElement('div');
    divFormPiezasServicio3.classList.add('mb-3');
    divFormPiezasServicio3.classList.add('flexRight');
    //Creo el div del input group
    divGroupPiezasServicio=document.createElement('div');
    divGroupPiezasServicio.classList.add('input-group');
    // Creo el input para subir las fotos
    var inputPiezasServicio = document.createElement('input');
    inputPiezasServicio.type= "file";
    inputPiezasServicio.accept = "image/*";
    inputPiezasServicio.multiple = true;
    inputPiezasServicio.max = "2";
    inputPiezasServicio.name = "fotoPiezasServicio" + i;
    inputPiezasServicio.id = "fotoPiezasServicio" + i;
    inputPiezasServicio.classList.add("visually-hidden");
    inputPiezasServicio.classList.add('form-control');
    //Creo el botón donde se verán las fotos
    buttonPhotosPiezasServicio = document.createElement('button');
    buttonPhotosPiezasServicio.setAttribute("onclick", `openModalPiezasServicio${i}()`);
    buttonPhotosPiezasServicio.classList.add('btn');
    buttonPhotosPiezasServicio.classList.add('btn-primary');
    buttonPhotosPiezasServicio.classList.add('visually-hidden');
    buttonPhotosPiezasServicio.id="PiezasServicioPhotos" + i;
    //Creo el <i>
    iconoPiezasServicio = document.createElement('i');
    iconoPiezasServicio.classList.add('fa-solid');
    iconoPiezasServicio.classList.add('fa-eye');
    iconoPiezasServicio.classList.add('fa-xl');


    contenedorPisosPiezasServicio3.classList.add("d-flex");
    contenedorPisosPiezasServicio3.classList.add("flex-wrap");
    contenedorPisosPiezasServicio3.appendChild(divFormPiezasServicio3);

    divFormPiezasServicio3.appendChild(labelInputPiezasServicio);
    
    divFormPiezasServicio3.appendChild(divGroupPiezasServicio);
    divGroupPiezasServicio.appendChild(inputPiezasServicio);
    divGroupPiezasServicio.appendChild(buttonPhotosPiezasServicio);
    buttonPhotosPiezasServicio.appendChild(iconoPiezasServicio);
    //divFormPiezasServicio3.appendChild(inputPiezasServicio);
    //divFormPiezasServicio3.appendChild(buttonPhotos);

    

    if (i <= numeroPiezasServicio) {
      inputPiezasServicio.classList.remove("visually-hidden");
      buttonPhotosPiezasServicio.classList.remove('visually-hidden');
    }

    if (i > numeroPiezasServicio) {
      labelInputPiezasServicio.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del Pieza
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divFormPiezasServiciob = document.createElement("div");



    label.innerHTML = "Piso de la pieza de servicio #" + i;
    label.setAttribute("for", "pisoPiezasServicio" + i);
    
    var selectPiezasServicio = document.createElement("select");
    selectPiezasServicio.name = "pisoPiezasServicio" + i;
    selectPiezasServicio.id = "pisoPiezasServicio" + i;
    selectPiezasServicio.required = false;
    selectPiezasServicio.classList.add("visually-hidden");
    selectPiezasServicio.classList.add("form-select");
    divFormPiezasServiciob.classList.add("form-floating");
    divFormPiezasServiciob.classList.add("mb-3");
    divFormPiezasServiciob.classList.add("flexRight");
    divFormPiezasServiciob.classList.add("d-inline-flex");
    contenedorPisosPiezasServicio.appendChild(divFormPiezasServiciob);

    var optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.innerHTML = "Seleccione una opción";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectPiezasServicio.appendChild(optionDefault);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    selectPiezasServicio.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    selectPiezasServicio.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    selectPiezasServicio.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    selectPiezasServicio.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    selectPiezasServicio.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    selectPiezasServicio.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    selectPiezasServicio.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    selectPiezasServicio.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    selectPiezasServicio.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    selectPiezasServicio.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    selectPiezasServicio.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    selectPiezasServicio.appendChild(option16);


    divFormPiezasServiciob.appendChild(selectPiezasServicio);

    divFormPiezasServiciob.appendChild(label);

    if (i <= numeroPiezasServicio) {
      selectPiezasServicio.classList.remove("visually-hidden");
    }

    if (i > numeroPiezasServicio) {
      selectPiezasServicio.disabled = true
      label.hidden = true;
    }
  }
}

function openModalPiezasServicio1() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPiezasServicio1').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPiezaServicio1.length; i++) {
    const imgElementPiezaServicio1 = document.createElement('img');
    imgElementPiezaServicio1.src = URL.createObjectURL(imagesPiezaServicio1[i]);
    imgElementPiezaServicio1.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPiezasServicio1').appendChild(imgElementPiezaServicio1);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPiezasServicio1 = new bootstrap.Modal(document.getElementById('imageModalPiezasServicio1'));
  imageModalPiezasServicio1.show();

  document.getElementById('fotoPiezasServicio1').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListPiezaServicio1 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesPiezaServicio1 = Array.from(fileListPiezaServicio1);
  });

}

function openModalPiezasServicio2() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPiezasServicio2').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPiezaServicio2.length; i++) {
    const imgElementPiezaServicio2 = document.createElement('img');
    imgElementPiezaServicio2.src = URL.createObjectURL(imagesPiezaServicio2[i]);
    imgElementPiezaServicio2.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPiezasServicio2').appendChild(imgElementPiezaServicio2);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPiezasServicio2 = new bootstrap.Modal(document.getElementById('imageModalPiezasServicio2'));
  imageModalPiezasServicio2.show();

  document.getElementById('fotoPiezasServicio2').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListPiezaServicio2 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesPiezaServicio2 = Array.from(fileListPiezaServicio2);
  });

}

function openModalPiezasServicio3() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPiezasServicio3').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPiezaServicio3.length; i++) {
    const imgElementPiezaServicio3 = document.createElement('img');
    imgElementPiezaServicio3.src = URL.createObjectURL(imagesPiezaServicio3[i]);
    imgElementPiezaServicio3.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPiezasServicio3').appendChild(imgElementPiezaServicio3);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPiezasServicio3 = new bootstrap.Modal(document.getElementById('imageModalPiezasServicio3'));
  imageModalPiezasServicio3.show();

  document.getElementById('fotoPiezasServicio3').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListPiezaServicio3 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesPiezaServicio3 = Array.from(fileListPiezaServicio3);
  });

}

function openModalPiezasServicio4() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPiezasServicio4').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPiezaServicio4.length; i++) {
    const imgElementPiezaServicio4 = document.createElement('img');
    imgElementPiezaServicio4.src = URL.createObjectURL(imagesPiezaServicio4[i]);
    imgElementPiezaServicio4.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPiezasServicio4').appendChild(imgElementPiezaServicio4);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPiezasServicio4 = new bootstrap.Modal(document.getElementById('imageModalPiezasServicio4'));
  imageModalPiezasServicio4.show();

  document.getElementById('fotoPiezasServicio4').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListPiezaServicio4 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesPiezaServicio4 = Array.from(fileListPiezaServicio4);
  });

}

function openModalPiezasServicio5() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerPiezasServicio5').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesPiezaServicio5.length; i++) {
    const imgElementPiezaServicio5 = document.createElement('img');
    imgElementPiezaServicio5.src = URL.createObjectURL(imagesPiezaServicio5[i]);
    imgElementPiezaServicio5.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerPiezasServicio5').appendChild(imgElementPiezaServicio5);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalPiezasServicio5 = new bootstrap.Modal(document.getElementById('imageModalPiezasServicio5'));
  imageModalPiezasServicio5.show();

  document.getElementById('fotoPiezasServicio5').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListPiezaServicio5 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesPiezaServicio5 = Array.from(fileListPiezaServicio5);
  });

}

function mostrarCamposDeSeleccionSuite() {
  var numeroSuite = parseInt(document.getElementById("numeroSuite").value);
  var contenedorPisosSuite = document.getElementById("contenedorPisosSuite");
  contenedorPisosSuite.innerHTML = "";
  var contenedorPisosSuite2 = document.getElementById("contenedorPisosSuite2");
  contenedorPisosSuite2.innerHTML = "";
  var contenedorPisosSuite3 = document.getElementById("contenedorPisosSuite3");
  contenedorPisosSuite3.innerHTML = "";

  const tipoPisoButtonSuite = document.getElementById('tipoPisoButtonSuite');

  if (numeroSuite !=0) {
    tipoPisoButtonSuite.classList.remove('visually-hidden')
  } else {
    tipoPisoButtonSuite.classList.add('visually-hidden')
  }

  //Para crear el input de las fotos de las habitaciones de la suite
  for (var i=1; i<=10; i++){
    //Creo el label
    var labelInputHab = document.createElement('label');
    labelInputHab.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos de la suite #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInputHab.setAttribute('for', 'fotoHabSuite'+ i);
    labelInputHab.classList.add('form-label');
    //Creo el div que mete las col dentro del row
    var divFormFloating3 = document.createElement('div');
    divFormFloating3.classList.add('mb-3');
    divFormFloating3.classList.add('flexRight');
    //divFormFloating3.classList.add('d-flex');
    //divFormFloating3.classList.add('col-md');
    //Creo el div del input group
    divGroup=document.createElement('div');
    divGroup.classList.add('input-group');
    // Creo el input para subir las fotos
    var inputHab = document.createElement('input');
    inputHab.type= "file";
    inputHab.accept = "image/*";
    inputHab.multiple = true;
    inputHab.max = "2";
    inputHab.name = "fotoHabBanoSuite" + i;
    inputHab.id = "fotoHabBanoSuite" + i;
    inputHab.classList.add("visually-hidden");
    inputHab.classList.add('form-control');
    //Creo el botón donde se verán las fotos
    buttonPhotos = document.createElement('button');
    buttonPhotos.setAttribute("onclick", `openModalSuite${i}()`);
    buttonPhotos.classList.add('btn');
    buttonPhotos.classList.add('btn-primary');
    buttonPhotos.classList.add('visually-hidden');
    buttonPhotos.id="suitePhotos" + i;
    //Creo el <i>
    icono = document.createElement('i');
    icono.classList.add('fa-solid');
    icono.classList.add('fa-eye');
    icono.classList.add('fa-xl');


    contenedorPisosSuite3.classList.add("d-flex");
    contenedorPisosSuite3.classList.add("flex-wrap");
    contenedorPisosSuite3.appendChild(divFormFloating3);

    divFormFloating3.appendChild(labelInputHab);
    
    divFormFloating3.appendChild(divGroup);
    divGroup.appendChild(inputHab);
    divGroup.appendChild(buttonPhotos);
    buttonPhotos.appendChild(icono);
    //divFormFloating3.appendChild(inputHab);
    //divFormFloating3.appendChild(buttonPhotos);

    

    if (i <= numeroSuite) {
      inputHab.classList.remove("visually-hidden");
      buttonPhotos.classList.remove('visually-hidden');
    }
 
    if (i > numeroSuite) {
      labelInputHab.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del dormitorio
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divFormFloating = document.createElement("div");



    label.innerHTML = "Piso del dormitorio de la suite #" + i;
    label.setAttribute("for", "pisoSuite" + i);
    
    var select = document.createElement("select");
    select.name = "pisoSuite" + i;
    select.id = "pisoSuite" + i;
    select.required = false;
    select.classList.add("visually-hidden");
    select.classList.add("form-select");
    divFormFloating.classList.add("form-floating");
    divFormFloating.classList.add("mb-3");
    divFormFloating.classList.add("flexRight");
    divFormFloating.classList.add("d-inline-flex");
    contenedorPisosSuite.appendChild(divFormFloating);

    var optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.innerHTML = "Seleccione una opción";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    select.appendChild(optionDefault);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    select.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    select.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    select.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    select.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    select.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    select.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    select.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    select.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    select.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    select.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    select.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    select.appendChild(option16);


    divFormFloating.appendChild(select);

    divFormFloating.appendChild(label);

    if (i <= numeroSuite) {
      select.classList.remove("visually-hidden");
    }

    if (i > numeroSuite) {
      select.disabled = true
      label.hidden = true;
    }
  }
  //Creo los Selects del tipo de piso del baño de la suite
  for (var i = 1; i <= 10; i++) {
    var label2 = document.createElement("label");
    var divFormFloating2 = document.createElement("div");



    label2.innerHTML = "Piso del baño de la suite #" + i;
    label2.setAttribute("for", "pisoSuiteBano" + i);
    
    var select2 = document.createElement("select");
    select2.name = "pisoSuiteBano" + i;
    select2.id = "pisoSuiteBano" + i;
    select2.required = false;
    select2.classList.add("visually-hidden");
    select2.classList.add("form-select");
    divFormFloating2.classList.add("form-floating");
    divFormFloating2.classList.add("mb-3");
    divFormFloating2.classList.add("flexRight");
    divFormFloating2.classList.add("d-inline-flex");
    contenedorPisosSuite2.appendChild(divFormFloating2);

    var optionDefault2 = document.createElement("option");
    optionDefault2.value = "";
    optionDefault2.innerHTML = "Seleccione una opción";
    optionDefault2.disabled = true;
    optionDefault2.selected = true;
    select2.appendChild(optionDefault2);

    var option1 = document.createElement("option");
    option1.value = "Alfombra";
    option1.innerHTML = "Alfombra";
    select2.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Baldosa Córdova";
    option2.innerHTML = "Baldosa Córdova";
    select2.appendChild(option2);

    var option4 = document.createElement("option");
    option4.value = "Baldosín cerámico";
    option4.innerHTML = "Baldosín cerámico";
    select2.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Cemento refinado";
    option5.innerHTML = "Cemento refinado";
    select2.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "Cerámica";
    option6.innerHTML = "Cerámica";
    select2.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "Cubre Pisos";
    option7.innerHTML = "Cubre Pisos";
    select2.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Flexit";
    option8.innerHTML = "Flexit";
    select2.appendChild(option8);

    var option9 = document.createElement("option");
    option9.value = "Madera";
    option9.innerHTML = "Madera";
    select2.appendChild(option9);

    var option11 = document.createElement("option");
    option11.value = "Parquet";
    option11.innerHTML = "Parquet";
    select2.appendChild(option11);

    var option13 = document.createElement("option");
    option13.value = "Piso Flotante";
    option13.innerHTML = "Piso Flotante";
    select2.appendChild(option13);

    var option14 = document.createElement("option");
    option14.value = "Porcelanato";
    option14.innerHTML = "Porcelanato";
    select2.appendChild(option14);

    var option16 = document.createElement("option");
    option16.value = "Otro";
    option16.innerHTML = "Otro";
    select2.appendChild(option16);


    divFormFloating2.appendChild(select2);

    divFormFloating2.appendChild(label2);

    if (i <= numeroSuite) {
      select2.classList.remove("visually-hidden");
    }

    if (i > numeroSuite) {
      select2.disabled = true
      label2.hidden = true;
    }
  }
}

function openModalSuite1() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite1').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite1.length; i++) {
    const imgElementSuite1 = document.createElement('img');
    imgElementSuite1.src = URL.createObjectURL(imagesSuite1[i]);
    imgElementSuite1.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite1').appendChild(imgElementSuite1);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite1 = new bootstrap.Modal(document.getElementById('imageModalSuite1'));
  imageModalSuite1.show();

  document.getElementById('fotoHabBanoSuite1').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite1 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite1 = Array.from(fileListSuite1);
  });

}

function openModalSuite2() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite2').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite2.length; i++) {
    const imgElementSuite2 = document.createElement('img');
    imgElementSuite2.src = URL.createObjectURL(imagesSuite2[i]);
    imgElementSuite2.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite2').appendChild(imgElementSuite2);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite2 = new bootstrap.Modal(document.getElementById('imageModalSuite2'));
  imageModalSuite2.show();

  document.getElementById('fotoHabBanoSuite2').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite2 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite2 = Array.from(fileListSuite2);
  });

}

function openModalSuite3() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite3').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite3.length; i++) {
    const imgElementSuite3 = document.createElement('img');
    imgElementSuite3.src = URL.createObjectURL(imagesSuite3[i]);
    imgElementSuite3.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite3').appendChild(imgElementSuite3);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite3 = new bootstrap.Modal(document.getElementById('imageModalSuite3'));
  imageModalSuite3.show();

  document.getElementById('fotoHabBanoSuite3').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite3 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite3 = Array.from(fileListSuite3);
  });

}

function openModalSuite4() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite4').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite4.length; i++) {
    const imgElementSuite4 = document.createElement('img');
    imgElementSuite4.src = URL.createObjectURL(imagesSuite4[i]);
    imgElementSuite4.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite4').appendChild(imgElementSuite4);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite4 = new bootstrap.Modal(document.getElementById('imageModalSuite4'));
  imageModalSuite4.show();

  document.getElementById('fotoHabBanoSuite4').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite4 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite4 = Array.from(fileListSuite4);
  });

}

function openModalSuite5() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite5').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite5.length; i++) {
    const imgElementSuite5 = document.createElement('img');
    imgElementSuite5.src = URL.createObjectURL(imagesSuite5[i]);
    imgElementSuite5.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite5').appendChild(imgElementSuite5);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite5 = new bootstrap.Modal(document.getElementById('imageModalSuite5'));
  imageModalSuite5.show();

  document.getElementById('fotoHabBanoSuite5').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite5 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite5 = Array.from(fileListSuite5);
  });

}

function openModalSuite6() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite6').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite6.length; i++) {
    const imgElementSuite6 = document.createElement('img');
    imgElementSuite6.src = URL.createObjectURL(imagesSuite6[i]);
    imgElementSuite6.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite6').appendChild(imgElementSuite6);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite6 = new bootstrap.Modal(document.getElementById('imageModalSuite6'));
  imageModalSuite6.show();

  document.getElementById('fotoHabBanoSuite6').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite6 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite6 = Array.from(fileListSuite6);
  });

}

function openModalSuite7() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite7').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite7.length; i++) {
    const imgElementSuite7 = document.createElement('img');
    imgElementSuite7.src = URL.createObjectURL(imagesSuite7[i]);
    imgElementSuite7.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite7').appendChild(imgElementSuite7);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite7 = new bootstrap.Modal(document.getElementById('imageModalSuite7'));
  imageModalSuite7.show();

  document.getElementById('fotoHabBanoSuite7').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite7 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite7 = Array.from(fileListSuite7);
  });

}

function openModalSuite8() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite8').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite8.length; i++) {
    const imgElementSuite8 = document.createElement('img');
    imgElementSuite8.src = URL.createObjectURL(imagesSuite8[i]);
    imgElementSuite8.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite8').appendChild(imgElementSuite8);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite8 = new bootstrap.Modal(document.getElementById('imageModalSuite8'));
  imageModalSuite8.show();

  document.getElementById('fotoHabBanoSuite8').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite8 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite8 = Array.from(fileListSuite8);
  });

}

function openModalSuite9() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite9').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite9.length; i++) {
    const imgElementSuite9 = document.createElement('img');
    imgElementSuite9.src = URL.createObjectURL(imagesSuite9[i]);
    imgElementSuite9.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite9').appendChild(imgElementSuite9);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite9 = new bootstrap.Modal(document.getElementById('imageModalSuite9'));
  imageModalSuite9.show();

  document.getElementById('fotoHabBanoSuite9').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite9 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite9 = Array.from(fileListSuite9);
  });

}

function openModalSuite10() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerSuite10').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesSuite10.length; i++) {
    const imgElementSuite10 = document.createElement('img');
    imgElementSuite10.src = URL.createObjectURL(imagesSuite10[i]);
    imgElementSuite10.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerSuite10').appendChild(imgElementSuite10);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalSuite10 = new bootstrap.Modal(document.getElementById('imageModalSuite10'));
  imageModalSuite10.show();

  document.getElementById('fotoHabBanoSuite10').addEventListener('change', function (event) {
    // Obtener las imágenes seleccionadas por el usuario
    const fileListSuite10 = event.target.files;
  
    // Convertir el objeto FileList a un array para facilitar su manejo
    imagesSuite10 = Array.from(fileListSuite10);
  });

}

//Para familyroom
const checkboxfamilyroom = document.getElementById("familyroom");
const familyroomDivFotos = document.getElementById("familyroomDiv");
const fotosInputfamily = document.getElementById("fotoFamilyRoom");

checkboxfamilyroom.addEventListener("change", function() {
  if (checkboxfamilyroom.checked) {
    familyroomDivFotos.classList.remove("visually-hidden");
  } else{
    familyroomDivFotos.classList.add("visually-hidden");
  }
});

function openModalFamilyRoom() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerFamilyRoom').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imagesFamilyRoom.length; i++) {
    const imgElementFamilyRoom = document.createElement('img');
    imgElementFamilyRoom.src = URL.createObjectURL(imagesFamilyRoom[i]);
    imgElementFamilyRoom.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerFamilyRoom').appendChild(imgElementFamilyRoom);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalFamilyRoom = new bootstrap.Modal(document.getElementById('imageModalFamilyRoom'));
  imageModalFamilyRoom.show();
}

document.getElementById('fotoFamilyRoom').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListFamilyRoom = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imagesFamilyRoom = Array.from(fileListFamilyRoom);
});

//Para home Ofice

const checkboxHomeoffice = document.getElementById("homeoffice");
const homeofficeDivFotos = document.getElementById("homeofficeDiv");
const fotosInputoffice = document.getElementById("homeofficeFotos");

checkboxHomeoffice.addEventListener("change", function() {
  if (checkboxHomeoffice.checked) {
    homeofficeDivFotos.classList.remove("visually-hidden");
  } else{
    homeofficeDivFotos.classList.add("visually-hidden");
  }
});

function openModalhomeoffice() {
  // Vaciar el contenedor de imágenes antes de agregar las nuevas
  document.getElementById('imageContainerhomeoffice').innerHTML = '';

  // Recorrer el array de imágenes y crear elementos <img> para mostrarlas en el modal
  for (let i = 0; i < imageshomeoffice.length; i++) {
    const imgElementhomeoffice = document.createElement('img');
    imgElementhomeoffice.src = URL.createObjectURL(imageshomeoffice[i]);
    imgElementhomeoffice.classList.add('img-fluid', 'mb-2');

    document.getElementById('imageContainerhomeoffice').appendChild(imgElementhomeoffice);
  }

  // Mostrar el modal utilizando el método "modal" de Bootstrap
  const imageModalhomeoffice = new bootstrap.Modal(document.getElementById('imageModalhomeoffice'));
  imageModalhomeoffice.show();
}

document.getElementById('fotoHomeOffice').addEventListener('change', function (event) {
  // Obtener las imágenes seleccionadas por el usuario
  const fileListhomeoffice = event.target.files;

  // Convertir el objeto FileList a un array para facilitar su manejo
  imageshomeoffice = Array.from(fileListhomeoffice);
});




// ================> Con esto creo un campo para que el usuario coloque el Rol en caso de haberlo marcado <============

function mostrarCampoTexto() {
  var checkrolbodega = document.getElementById("checkrolbodega");
  var campotextobodega = document.getElementById("rolbodega");
  var checkrolestacionamiento = document.getElementById("checkrolestacionamiento");
  var campotextoestacionamiento = document.getElementById("rolestacionamiento");
  
  if (checkrolbodega.checked) {
    campotextobodega.disabled = false;
  } else {
    campotextobodega.disabled = true;
  }

  if (checkrolestacionamiento.checked) {
    campotextoestacionamiento.disabled = false;
  } else {
    campotextoestacionamiento.disabled = true;
  }


}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();



  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
  const tlfregex = /^\d{9}$/;
  const emailregex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//=================================> Sección de datos personales <================================================================
     // Obtiene el valor del campo del nombre
     const nombre = document.getElementById('nombre').value;
     // Valida el nombre utilizando una expresión regular
     if (!nombreRegex.test(nombre)) {
      alert('El nombre es inválido. Por favor, introduce solo letras y espacios.');
      document.getElementById('nombre').scrollIntoView();
      return
    }
  
   // Obtiene el valor del campo del apellido
   const apellido = document.getElementById('apellido').value;
   // Valida el nombre utilizando una expresión regular
   if (!nombreRegex.test(apellido)) {
     alert('El apellido es inválido. Por favor, introduce solo letras y espacios.');
     document.getElementById('apellido').scrollIntoView();
     return;
   }

   //RUT
   const primerosdigitos= document.getElementById('primerosdigitos').value;
   const verificador = document.getElementById('verificador').value;

   // Validar que se haya seleccionado un dígito verificador
   if (verificador === "") {
    alert("Por favor, seleccione un dígito verificador");
    return;
}

// Validar que los primeros dígitos sean numéricos y estén completos
if (!/^\d{1,8}$/.test(primerosdigitos)) {
    alert("Los primeros dígitos del RUT deben ser numéricos y tener entre 1 y 8 dígitos");
    document.getElementById('primerosdigitos').scrollIntoView();
    return;
}

const rut = primerosdigitos + "-" + verificador;

   const telefono = document.getElementById('telefono').value;
   if (!tlfregex.test(telefono)) {
     alert('Por favor, introduce un número de teléfono válido.');
     document.getElementById('telefono').scrollIntoView();
     return;
   }

   const confirmartelefono = document.getElementById('confirmartelefono').value;
   
   if (telefono!==confirmartelefono){
    alert('Los teléfonos no coinciden');
    document.getElementById('confirmartelefono').scrollIntoView();
    return;
   }

   const correo = document.getElementById('correo').value;
   if (!emailregex.test(correo)) {
     alert('Por favor, introduce un correo válido.');
     document.getElementById('correo').scrollIntoView();
     return;
   }

   const confcorreo = document.getElementById('confcorreo').value;
   
   if (correo!==confcorreo){
    alert('Los correos no coinciden');
    document.getElementById('confcorreo').scrollIntoView();
    return;
   }

  const razon=document.getElementById('razon').value
   if (razon === "") {
    alert('Por favor, selecciona una opción');
    return;
  }

  //=================================> Fin de Sección de datos personales <================================================================

    //=================================> Sección de datos del departamento <================================================================
  const bienhechuria = document.getElementById('bienhechuria').value
  if (bienhechuria === "") {
    alert('Por favor, selecciona una opción');
    return;
  }
  const enTramiteText = document.getElementById('enTramiteText').value;
  const parcialText = document.getElementById('parcialText').value;
  const rol=document.getElementById('rol').value
  const inputPrueba = document.getElementById('inputPrueba').files;
  

  //=================================> Fin Sección de datos del departamento <================================================================


  //=================================> Sección de dirección del departamento <================================================================
  var comuna = document.getElementById('comuna').value;
  const calle = document.getElementById('calle').value;
  const casa = document.getElementById('casa').value;
  
  

  const anos = document.getElementById('anos').value;
  const mconstruidos = document.getElementById('mconstruidos').value
  const sector = document.getElementById('sector').value
  const mtotales = document.getElementById('mtotales').value
  const mterraza = document.getElementById('mterraza').value;
  const nPisos = document.getElementById('nPisos').value;
  const conserjeriaPregunta = document.getElementById('conserjeriaPregunta').value;
  const horario = document.getElementById('horario').value;
  const amoblada = document.getElementById('amoblada').value;
  const articuloscasa = document.getElementById('articuloscasa').value
  
  const articulosamoblada = document.getElementById('articulosamoblada').files;
  //=================================> Fin Sección de dirección del departamento <================================================================
  

  //=================================> prueba <================================================================
  
  
  


  //=================================> Suites <================================================================
  var numeroSuite= document.getElementById('numeroSuite', numeroSuite).value
  if (numeroSuite === ""){
    numeroSuite = 'No aplica'
  }

  var pisoSuite1 = document.getElementById('pisoSuite1').value
  if (pisoSuite1 === ""){
    pisoSuite1 = 'No aplica'
  }

  var pisoSuite2 = document.getElementById('pisoSuite2').value
  if (pisoSuite2 === ""){
    pisoSuite2 = 'No aplica'
  }

  var pisoSuite3 = document.getElementById('pisoSuite3').value
  if (pisoSuite3 === ""){
    pisoSuite3 = 'No aplica'
  }

  var pisoSuite4 = document.getElementById('pisoSuite4').value
  if (pisoSuite4 === ""){
    pisoSuite4 = 'No aplica'
  }

  var pisoSuite5 = document.getElementById('pisoSuite5').value
  if (pisoSuite5 === ""){
    pisoSuite5 = 'No aplica'
  }

  var pisoSuite6 = document.getElementById('pisoSuite6').value
  if (pisoSuite6 === ""){
    pisoSuite6 = 'No aplica'
  }

  var pisoSuite7 = document.getElementById('pisoSuite7').value
  if (pisoSuite7 === ""){
    pisoSuite7 = 'No aplica'
  }

  var pisoSuite8 = document.getElementById('pisoSuite8').value
  if (pisoSuite8 === ""){
    pisoSuite8 = 'No aplica'
  }

  var pisoSuite9 = document.getElementById('pisoSuite9').value
  if (pisoSuite9 === ""){
    pisoSuite9 = 'No aplica'
  }

  var pisoSuite10 = document.getElementById('pisoSuite10').value
  if (pisoSuite10 === ""){
    pisoSuite10 = 'No aplica'
  }

  var pisoSuiteBano1 = document.getElementById('pisoSuiteBano1').value
  if (pisoSuiteBano1 === ""){
    pisoSuiteBano1 = 'No aplica'
  }

  var pisoSuiteBano2 = document.getElementById('pisoSuiteBano2').value
  if (pisoSuiteBano2 === ""){
    pisoSuiteBano2 = 'No aplica'
  }

  var pisoSuiteBano3 = document.getElementById('pisoSuiteBano3').value
  if (pisoSuiteBano3 === ""){
    pisoSuiteBano3 = 'No aplica'
  }

  var pisoSuiteBano4 = document.getElementById('pisoSuiteBano4').value
  if (pisoSuiteBano4 === ""){
    pisoSuiteBano4 = 'No aplica'
  }

  var pisoSuiteBano5 = document.getElementById('pisoSuiteBano5').value
  if (pisoSuiteBano5 === ""){
    pisoSuiteBano5 = 'No aplica'
  }

  var pisoSuiteBano6 = document.getElementById('pisoSuiteBano6').value
  if (pisoSuiteBano6 === ""){
    pisoSuiteBano6 = 'No aplica'
  }

  var pisoSuiteBano7 = document.getElementById('pisoSuiteBano7').value
  if (pisoSuiteBano7 === ""){
    pisoSuiteBano7 = 'No aplica'
  }

  var pisoSuiteBano8 = document.getElementById('pisoSuiteBano8').value
  if (pisoSuiteBano8 === ""){
    pisoSuiteBano8 = 'No aplica'
  }

  var pisoSuiteBano9 = document.getElementById('pisoSuiteBano9').value
  if (pisoSuiteBano9 === ""){
    pisoSuiteBano9 = 'No aplica'
  }

  var pisoSuiteBano10 = document.getElementById('pisoSuiteBano10').value
  if (pisoSuiteBano10 === ""){
    pisoSuiteBano10 = 'No aplica'
  }



  const fotoHabBanoSuite1 = document.getElementById('fotoHabBanoSuite1').files;
  const fotoHabBanoSuite2 = document.getElementById('fotoHabBanoSuite2').files;
  const fotoHabBanoSuite3 = document.getElementById('fotoHabBanoSuite3').files;
  const fotoHabBanoSuite4 = document.getElementById('fotoHabBanoSuite4').files;
  const fotoHabBanoSuite5 = document.getElementById('fotoHabBanoSuite5').files;
  const fotoHabBanoSuite6 = document.getElementById('fotoHabBanoSuite6').files;
  const fotoHabBanoSuite7 = document.getElementById('fotoHabBanoSuite7').files;
  const fotoHabBanoSuite8 = document.getElementById('fotoHabBanoSuite8').files;
  const fotoHabBanoSuite9 = document.getElementById('fotoHabBanoSuite9').files;
  const fotoHabBanoSuite10 = document.getElementById('fotoHabBanoSuite10').files;

//=================================> Dormitorios <================================================================
var numeroDormitorios = document.getElementById('numeroDormitorios').value

var pisoDormitorio1 = document.getElementById('pisoDormitorio1').value
if (pisoDormitorio1 ===""){
  pisoDormitorio1 = "No aplica"
}
var pisoDormitorio2 = document.getElementById('pisoDormitorio2').value
if (pisoDormitorio2 ===""){
  pisoDormitorio2 = "No aplica"
}
var pisoDormitorio3 = document.getElementById('pisoDormitorio3').value
if (pisoDormitorio3 ===""){
  pisoDormitorio3 = "No aplica"
}
var pisoDormitorio4 = document.getElementById('pisoDormitorio4').value
if (pisoDormitorio4 ===""){
  pisoDormitorio4 = "No aplica"
}
var pisoDormitorio5 = document.getElementById('pisoDormitorio5').value
if (pisoDormitorio5 ===""){
  pisoDormitorio5 = "No aplica"
}
var pisoDormitorio6 = document.getElementById('pisoDormitorio6').value
if (pisoDormitorio6 ===""){
  pisoDormitorio6 = "No aplica"
}
var pisoDormitorio7 = document.getElementById('pisoDormitorio7').value
if (pisoDormitorio7 ===""){
  pisoDormitorio7 = "No aplica"
}
var pisoDormitorio8 = document.getElementById('pisoDormitorio8').value
if (pisoDormitorio8 ===""){
  pisoDormitorio8 = "No aplica"
}
var pisoDormitorio9 = document.getElementById('pisoDormitorio9').value
if (pisoDormitorio9 ===""){
  pisoDormitorio9 = "No aplica"
}
var pisoDormitorio10 = document.getElementById('pisoDormitorio10').value
if (pisoDormitorio10 ===""){
  pisoDormitorio10 = "No aplica"
}



const fotoHab1 = document.getElementById('fotoHab1').files;
const fotoHab2 = document.getElementById('fotoHab2').files; 
const fotoHab3 = document.getElementById('fotoHab3').files; 
const fotoHab4 = document.getElementById('fotoHab4').files; 
const fotoHab5 = document.getElementById('fotoHab5').files; 
const fotoHab6 = document.getElementById('fotoHab6').files; 
const fotoHab7 = document.getElementById('fotoHab7').files; 
const fotoHab8 = document.getElementById('fotoHab8').files; 
const fotoHab9 = document.getElementById('fotoHab9').files; 
const fotoHab10 = document.getElementById('fotoHab10').files; 
//=================================> Pieza de servicio <================================================================
var numeroPiezasServicio = document.getElementById('numeroPiezasServicio').value
if (numeroPiezasServicio ===""){
  numeroPiezasServicio = "No aplica"
}


var ayudaPiezaservicio = document.getElementById('ayudaPiezaservicio');

var pisoPiezasServicio1 = document.getElementById('pisoPiezasServicio1').value;
  if (pisoPiezasServicio1 ===""){
    pisoPiezasServicio1 = "No aplica"
  }
  var pisoPiezasServicio2 = document.getElementById('pisoPiezasServicio2').value;
  if (pisoPiezasServicio2 ===""){
    pisoPiezasServicio2 = "No aplica"
  }
  var pisoPiezasServicio3 = document.getElementById('pisoPiezasServicio3').value;
  if (pisoPiezasServicio3 ===""){
    pisoPiezasServicio3 = "No aplica"
  }
  var pisoPiezasServicio4 = document.getElementById('pisoPiezasServicio4').value;
  if (pisoPiezasServicio4 ===""){
    pisoPiezasServicio4 = "No aplica"
  }
  var pisoPiezasServicio5 = document.getElementById('pisoPiezasServicio5').value;
  if (pisoPiezasServicio5 ===""){
    pisoPiezasServicio5 = "No aplica"
  }

  const fotoPiezasServicio1 = document.getElementById('fotoPiezasServicio1').files;
  const fotoPiezasServicio2 = document.getElementById('fotoPiezasServicio2').files;
  const fotoPiezasServicio3 = document.getElementById('fotoPiezasServicio3').files;
  const fotoPiezasServicio4 = document.getElementById('fotoPiezasServicio4').files;
  const fotoPiezasServicio5 = document.getElementById('fotoPiezasServicio5').files;

//=================================> Baños <================================================================
  var numeroBanos = document.getElementById('numeroBanos').value
  if (numeroBanos ===""){
    numeroBanos = "No aplica"
  }

  var pisoBano1 = document.getElementById('pisoBano1').value;
  if (pisoBano1 ===""){
    pisoBano1 = "No aplica"
  }
  var pisoBano2 = document.getElementById('pisoBano2').value;
  if (pisoBano2 ===""){
    pisoBano2 = "No aplica"
  }
  var pisoBano3 = document.getElementById('pisoBano3').value;
  if (pisoBano3 ===""){
    pisoBano3 = "No aplica"
  }
  var pisoBano4 = document.getElementById('pisoBano4').value;
  if (pisoBano4 ===""){
    pisoBano4 = "No aplica"
  }
  var pisoBano5 = document.getElementById('pisoBano5').value;
  if (pisoBano5 ===""){
    pisoBano5 = "No aplica"
  }
  var pisoBano6 = document.getElementById('pisoBano6').value;
  if (pisoBano6 ===""){
    pisoBano6 = "No aplica"
  }
  var pisoBano7 = document.getElementById('pisoBano7').value;
  if (pisoBano7 ===""){
    pisoBano7 = "No aplica"
  }
  var pisoBano8 = document.getElementById('pisoBano8').value;
  if (pisoBano8 ===""){
    pisoBano8 = "No aplica"
  }
  var pisoBano9 = document.getElementById('pisoBano9').value;
  if (pisoBano9 ===""){
    pisoBano9 = "No aplica"
  }
  var pisoBano10 = document.getElementById('pisoBano10').value;
  if (pisoBano10 ===""){
    pisoBano10 = "No aplica"
  }
  
  
  
  
  
  const fotoBano1 = document.getElementById('fotoBano1').files;
  const fotoBano2 = document.getElementById('fotoBano2').files;
  const fotoBano3 = document.getElementById('fotoBano3').files;
  const fotoBano4 = document.getElementById('fotoBano4').files;
  const fotoBano5 = document.getElementById('fotoBano5').files;
  const fotoBano6 = document.getElementById('fotoBano6').files;
  const fotoBano7 = document.getElementById('fotoBano7').files;
  const fotoBano8 = document.getElementById('fotoBano8').files;
  const fotoBano9 = document.getElementById('fotoBano9').files;
  const fotoBano10 = document.getElementById('fotoBano10').files;
  //=================================> Baño de servicio <================================================================
  var numeroBanosServicio = document.getElementById('numeroBanosServicio').value
  if (numeroBanosServicio ===""){
    numeroBanosServicio = "No aplica"
  }



  var pisoBanosServicio1 = document.getElementById('pisoBanosServicio1').value;
  if (pisoBanosServicio1 ===""){
    pisoBanosServicio1 = "No aplica"
  }
  var pisoBanosServicio2 = document.getElementById('pisoBanosServicio2').value;
  if (pisoBanosServicio2 ===""){
    pisoBanosServicio2 = "No aplica"
  }
  
  var pisoBanosServicio3 = document.getElementById('pisoBanosServicio3').value;
  if (pisoBanosServicio3 ===""){
    pisoBanosServicio3 = "No aplica"
  }
  
  var pisoBanosServicio4 = document.getElementById('pisoBanosServicio4').value;
  if (pisoBanosServicio4 ===""){
    pisoBanosServicio4 = "No aplica"
  }
  
  var pisoBanosServicio5 = document.getElementById('pisoBanosServicio5').value;
  if (pisoBanosServicio5 ===""){
    pisoBanosServicio5 = "No aplica"
  }
  
  const fotoBanosServicio1 = document.getElementById('fotoBanosServicio1').files;
  const fotoBanosServicio2 = document.getElementById('fotoBanosServicio2').files;
  const fotoBanosServicio3 = document.getElementById('fotoBanosServicio3').files;
  const fotoBanosServicio4 = document.getElementById('fotoBanosServicio4').files;
  const fotoBanosServicio5 = document.getElementById('fotoBanosServicio5').files;

  
const pisococina = document.getElementById('pisococina').value;
if (pisococina === ""){
  pisococina = 'No aplica'
}
const cocina = document.getElementById('cocina').files;

const pisocomedor = document.getElementById('pisocomedor').value;
if (pisocomedor === ""){
  pisocomedor = "No aplica"
}
const comedor = document.getElementById('comedor').files;
  
const pisoliving = document.getElementById('pisoliving').value;
if (pisoliving === ""){
  pisoliving = "No aplica"
}
const living = document.getElementById('living').files;

const pisohall = document.getElementById('pisohall').value;
if (pisohall === ""){
  pisohall = "No aplica"
}
const hall = document.getElementById('hall').files;

//=================================> Sección de famlyRoom <================================================================
var pisoFamilyRoom = document.getElementById('pisoFamilyRoom').value
  if (pisoFamilyRoom === ""){
    pisoFamilyRoom = 'No aplica'
  }

  const fotoFamilyRoom = document.getElementById('fotoFamilyRoom').files;


//=================================> Sección de información adicional <================================================================

  const mueblecocina = document.getElementById('mueblecocina').value;
  const aislacion = document.getElementById('aislacion').value;
  const tipogas = document.getElementById('tipogas').value;
  const termopanel = document.getElementById('termopanel').value;
  const termopanelText = document.getElementById('termopanelText').value;
  const aguacaliente = document.getElementById('aguacaliente').value;
  const tipococina = document.getElementById('tipococina').value;
  const estacionamientos = document.getElementById('estacionamientos').value;
  const estacionamientosTechados = document.getElementById('estacionamientosTechados').value;
  const construccion=document.getElementById('construccion').value
   if (construccion === "") {
    alert('Por favor, selecciona una opción');
    return;
  }
  const tipoventana = document.getElementById('tipoventana').value;
  const techo=document.getElementById('techo').value
   if (techo === "") {
    alert('Por favor, selecciona una opción');
    return;
  }  
//El checkbox de características adicionales
var selectedOptions = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"].ampliaciones:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    selectedOptions.push(checkboxes[i].value);
  }

//FIn del checbox
var rolbodega = document.getElementById('rolbodega').value;
var rolestacionamiento = document.getElementById('rolestacionamiento').value

//Campos del home office
const pisoHomeOffice = document.getElementById('pisoHomeOffice').value;
const fotoHomeOffice = document.getElementById('fotoHomeOffice').files;





const housePhotos=document.getElementById('housePhotos').files;

const adicional = document.getElementById('adicional').value;

var terminos = document.getElementById('terminos');
if (!terminos.checked) {
  alert("Debe aceptar los términos y condiciones para continuar.");
  return false;
}


  const formData = new FormData();
  //Datos personales
  formData.append('nombre', nombre); 
  formData.append('apellido', apellido); 
  formData.append('rut', rut); 
  formData.append('telefono', telefono); 
  formData.append('correo', correo); 
  formData.append('razon', razon);
  //Datos del departamento
  formData.append('bienhechuria', bienhechuria);
  formData.append('enTramiteText',enTramiteText);
  formData.append('parcialText',parcialText);
  formData.append('rol', rol); 
  if (inputPrueba.length > 5){
    alert('No se pueden subir más de 5 archivossss');
    return;
  }
  for (var i=0; i<inputPrueba.length; i++){
    formData.append('inputPrueba',inputPrueba[i]);
  }
  
  //Sección dirección
  formData.append('comuna', comuna);
  formData.append('calle', calle);
  formData.append('casa', casa);
  
  

  formData.append('anos', anos); 
  formData.append('mconstruidos', mconstruidos); 
  formData.append('mtotales', mtotales);
  formData.append('sector', sector);
  formData.append('nPisos', nPisos);
  formData.append('conserjeriaPregunta',conserjeriaPregunta);
  formData.append('horario', horario);
  formData.append('mterraza',mterraza); 
  formData.append('amoblada', amoblada); 
  formData.append('articuloscasa', articuloscasa);
  if (articulosamoblada.length > 20) {
    alert('No se pueden subir más de 20 imágenes de los artículos.');
    return;
  }
  for (var i = 0; i < articulosamoblada.length; i++) {
    formData.append('articulosamoblada', articulosamoblada[i]);
  }
  //Terraza

  
  //Suites
  formData.append('numeroSuite', numeroSuite);
  formData.append ('pisoSuite1', pisoSuite1);
  formData.append ('pisoSuite2', pisoSuite2);
  formData.append ('pisoSuite3', pisoSuite3);
  formData.append ('pisoSuite4', pisoSuite4);
  formData.append ('pisoSuite5', pisoSuite5);
  formData.append ('pisoSuite6', pisoSuite6);
  formData.append ('pisoSuite7', pisoSuite7);
  formData.append ('pisoSuite8', pisoSuite8);
  formData.append ('pisoSuite9', pisoSuite9);
  formData.append ('pisoSuite10', pisoSuite10);
  formData.append ('pisoSuiteBano1', pisoSuiteBano1);
  formData.append ('pisoSuiteBano2', pisoSuiteBano2);
  formData.append ('pisoSuiteBano3', pisoSuiteBano3);
  formData.append ('pisoSuiteBano4', pisoSuiteBano4);
  formData.append ('pisoSuiteBano5', pisoSuiteBano5);
  formData.append ('pisoSuiteBano6', pisoSuiteBano6);
  formData.append ('pisoSuiteBano7', pisoSuiteBano7);
  formData.append ('pisoSuiteBano8', pisoSuiteBano8);
  formData.append ('pisoSuiteBano9', pisoSuiteBano9);
  formData.append ('pisoSuiteBano10', pisoSuiteBano10);
  if (fotoHabBanoSuite1.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #1');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite1.length; i++){
    formData.append('fotoHabBanoSuite1',fotoHabBanoSuite1[i]);
  }
  
  if (fotoHabBanoSuite4.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #4');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite4.length; i++){
    formData.append('fotoHabBanoSuite4',fotoHabBanoSuite4[i]);
  }

  if (fotoHabBanoSuite2.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #2');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite2.length; i++){
    formData.append('fotoHabBanoSuite2',fotoHabBanoSuite2[i]);
  }

  if (fotoHabBanoSuite3.length > 3){
    alert('No se pueden subir más de 2 imágenes de la suite #3');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite3.length; i++){
    formData.append('fotoHabBanoSuite3',fotoHabBanoSuite3[i]);
  }

  if (fotoHabBanoSuite5.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #5');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite5.length; i++){
    formData.append('fotoHabBanoSuite5',fotoHabBanoSuite5[i]);
  }

  if (fotoHabBanoSuite6.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #6');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite6.length; i++){
    formData.append('fotoHabBanoSuite6',fotoHabBanoSuite6[i]);
  }

  if (fotoHabBanoSuite7.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #7');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite7.length; i++){
    formData.append('fotoHabBanoSuite7',fotoHabBanoSuite7[i]);
  }

  if (fotoHabBanoSuite8.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #8');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite8.length; i++){
    formData.append('fotoHabBanoSuite8',fotoHabBanoSuite8[i]);
  }

  if (fotoHabBanoSuite9.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #9');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite9.length; i++){
    formData.append('fotoHabBanoSuite9',fotoHabBanoSuite9[i]);
  }

  if (fotoHabBanoSuite10.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #10');
    return;
  }
  for (var i=0; i<fotoHabBanoSuite10.length; i++){
    formData.append('fotoHabBanoSuite10',fotoHabBanoSuite10[i]);
  }  //Dormitorios
  formData.append('numeroDormitorios', numeroDormitorios);
  
  formData.append('pisoDormitorio1', pisoDormitorio1);
  formData.append('pisoDormitorio2', pisoDormitorio2);
  formData.append('pisoDormitorio3', pisoDormitorio3);
  formData.append('pisoDormitorio4', pisoDormitorio4);
  formData.append('pisoDormitorio5', pisoDormitorio5);
  formData.append('pisoDormitorio6', pisoDormitorio6);
  formData.append('pisoDormitorio7', pisoDormitorio7);
  formData.append('pisoDormitorio8', pisoDormitorio8);
  formData.append('pisoDormitorio9', pisoDormitorio9);
  formData.append('pisoDormitorio10', pisoDormitorio10);

  if (fotoHab1.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #1');
    return;
  }
  for (var i=0; i<fotoHab1.length; i++){
    formData.append('fotoHab1',fotoHab1[i]);
  }

  if (fotoHab2.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #2');
    return;
  }
  for (var i=0; i<fotoHab2.length; i++){
    formData.append('fotoHab2',fotoHab2[i]);
  }

  if (fotoHab3.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #3');
    return;
  }
  for (var i=0; i<fotoHab3.length; i++){
    formData.append('fotoHab3',fotoHab3[i]);
  }

  if (fotoHab4.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #4');
    return;
  }
  for (var i=0; i<fotoHab4.length; i++){
    formData.append('fotoHab4',fotoHab4[i]);
  }

  if (fotoHab5.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #5');
    return;
  }
  for (var i=0; i<fotoHab5.length; i++){
    formData.append('fotoHab5',fotoHab5[i]);
  }

  if (fotoHab6.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #6');
    return;
  }
  for (var i=0; i<fotoHab6.length; i++){
    formData.append('fotoHab6',fotoHab6[i]);
  }

  if (fotoHab7.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #7');
    return;
  }
  for (var i=0; i<fotoHab7.length; i++){
    formData.append('fotoHab7',fotoHab7[i]);
  }

  if (fotoHab8.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #8');
    return;
  }
  for (var i=0; i<fotoHab8.length; i++){
    formData.append('fotoHab8',fotoHab8[i]);
  }

  if (fotoHab9.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #9');
    return;
  }
  for (var i=0; i<fotoHab9.length; i++){
    formData.append('fotoHab9',fotoHab9[i]);
  }

  if (fotoHab10.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #10');
    return;
  }
  for (var i=0; i<fotoHab10.length; i++){
    formData.append('fotoHab10',fotoHab10[i]);
  }



//Pieza de servicio

formData.append('numeroPiezasServicio', numeroPiezasServicio);
formData.append('pisoPiezasServicio1', pisoPiezasServicio1);
formData.append('pisoPiezasServicio2', pisoPiezasServicio2);
formData.append('pisoPiezasServicio3', pisoPiezasServicio3);
formData.append('pisoPiezasServicio4', pisoPiezasServicio4);
formData.append('pisoPiezasServicio5', pisoPiezasServicio5);

if (fotoPiezasServicio1.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #1');
  return;
}
for (var i=0; i<fotoPiezasServicio1.length; i++){
  formData.append('fotoPiezasServicio1',fotoPiezasServicio1[i]);
}

if (fotoPiezasServicio2.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #2');
  return;
}
for (var i=0; i<fotoPiezasServicio2.length; i++){
  formData.append('fotoPiezasServicio2',fotoPiezasServicio2[i]);
}

if (fotoPiezasServicio3.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #3');
  return;
}
for (var i=0; i<fotoPiezasServicio3.length; i++){
  formData.append('fotoPiezasServicio3',fotoPiezasServicio3[i]);
}

if (fotoPiezasServicio4.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #4');
  return;
}
for (var i=0; i<fotoPiezasServicio4.length; i++){
  formData.append('fotoPiezasServicio4',fotoPiezasServicio4[i]);
}

if (fotoPiezasServicio5.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #5');
  return;
}
for (var i=0; i<fotoPiezasServicio5.length; i++){
  formData.append('fotoPiezasServicio5',fotoPiezasServicio5[i]);
}


//Baños
formData.append('numeroBanos', numeroBanos);
formData.append('pisoBano1', pisoBano1);
formData.append('pisoBano2', pisoBano2);
formData.append('pisoBano3', pisoBano3);
formData.append('pisoBano4', pisoBano4);
formData.append('pisoBano5', pisoBano5);
formData.append('pisoBano6', pisoBano6);
formData.append('pisoBano7', pisoBano7);
formData.append('pisoBano8', pisoBano8);
formData.append('pisoBano9', pisoBano9);
formData.append('pisoBano10', pisoBano10);

  

  if (fotoBano1.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #1');
    return;
  }
  for (var i=0; i<fotoBano1.length; i++){
    formData.append('fotoBano1',fotoBano1[i]);
  }

  if (fotoBano2.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #2');
    return;
  }
  for (var i=0; i<fotoBano2.length; i++){
    formData.append('fotoBano2',fotoBano2[i]);
  }

  if (fotoBano3.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #3');
    return;
  }
  for (var i=0; i<fotoBano3.length; i++){
    formData.append('fotoBano3',fotoBano3[i]);
  }

  if (fotoBano4.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #4');
    return;
  }
  for (var i=0; i<fotoBano4.length; i++){
    formData.append('fotoBano4',fotoBano4[i]);
  }

  if (fotoBano5.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #5');
    return;
  }
  for (var i=0; i<fotoBano5.length; i++){
    formData.append('fotoBano5',fotoBano5[i]);
  }

  if (fotoBano6.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #6');
    return;
  }
  for (var i=0; i<fotoBano6.length; i++){
    formData.append('fotoBano6',fotoBano6[i]);
  }

  if (fotoBano7.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #7');
    return;
  }
  for (var i=0; i<fotoBano7.length; i++){
    formData.append('fotoBano7',fotoBano7[i]);
  }

  if (fotoBano8.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #8');
    return;
  }
  for (var i=0; i<fotoBano8.length; i++){
    formData.append('fotoBano8',fotoBano8[i]);
  }

  if (fotoBano9.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #9');
    return;
  }
  for (var i=0; i<fotoBano9.length; i++){
    formData.append('fotoBano9',fotoBano9[i]);
  }

  if (fotoBano10.length > 2){
    alert('No se pueden subir más de 2 imágenes del baño #10');
    return;
  }
  for (var i=0; i<fotoBano10.length; i++){
    formData.append('fotoBano10',fotoBano10[i]);
  }
//Baño de servicio

formData.append('numeroBanosServicio', numeroBanosServicio);
formData.append('pisoBanosServicio1', pisoBanosServicio1);
formData.append('pisoBanosServicio2', pisoBanosServicio2);
formData.append('pisoBanosServicio3', pisoBanosServicio3);
formData.append('pisoBanosServicio4', pisoBanosServicio4);
formData.append('pisoBanosServicio5', pisoBanosServicio5);

if (fotoBanosServicio1.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #1');
  return;
}
for (var i=0; i<fotoBanosServicio1.length; i++){
  formData.append('fotoBanosServicio1',fotoBanosServicio1[i]);
}

if (fotoBanosServicio2.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #2');
  return;
}
for (var i=0; i<fotoBanosServicio2.length; i++){
  formData.append('fotoBanosServicio2',fotoBanosServicio2[i]);
}

if (fotoBanosServicio3.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #3');
  return;
}
for (var i=0; i<fotoBanosServicio3.length; i++){
  formData.append('fotoBanosServicio3',fotoBanosServicio3[i]);
}

if (fotoBanosServicio4.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #4');
  return;
}
for (var i=0; i<fotoBanosServicio4.length; i++){
  formData.append('fotoBanosServicio4',fotoBanosServicio4[i]);
}
if (fotoBanosServicio5.length > 2){
  alert('No se pueden subir más de 2 imágenes del baño de servicio #5');
  return;
}
for (var i=0; i<fotoBanosServicio5.length; i++){
  formData.append('fotoBanosServicio5',fotoBanosServicio5[i]);
}



//Cocina
  formData.append('pisococina', pisococina); //LISTO
  if (cocina.length > 2) {
    alert('No se pueden subir más de 2 imágenes de la cocina.');
    return;
  }
  for (var i = 0; i < cocina.length; i++) {
    formData.append('cocina', cocina[i]);
  }

  //Comedor
  formData.append('pisocomedor', pisocomedor);
  if (comedor.length > 2) {
    alert('No se pueden subir más de 2 imágenes del comedor.');
    return;
  }
  for (var i = 0; i < comedor.length; i++) {
    formData.append('comedor', comedor[i]);
  } 
  //Living
  formData.append('pisoliving', pisoliving);
  //
  if (living.length > 2) {
    alert('No se pueden subir más de 2 imágenes del living.');
    return;
  }
  for (var i = 0; i < living.length; i++) {
    formData.append('living', living[i]);
  }
  //Hall
  formData.append('pisohall', pisohall);
  if (hall.length > 2) {
    alert('No se pueden subir más de 2 imágenes del hall.');
    return;
  }
  for (var i = 0; i < hall.length; i++) {
    formData.append('hall', hall[i]);
  }
  
  //Piscina

  //FamilyRoom

  formData.append ('pisoFamilyRoom', pisoFamilyRoom);
  if (fotoFamilyRoom.length > 2){
    alert('No se pueden subir más de 2 imágenes de la suite #1');
    return;
  }
  for (var i=0; i<fotoFamilyRoom.length; i++){
    formData.append('fotoFamilyRoom',fotoFamilyRoom[i]);
  }
 

//Información adicional
  formData.append('mueblecocina', mueblecocina);
  formData.append('aislacion', aislacion);
  formData.append('tipogas', tipogas);
  formData.append('termopanel', termopanel);
  formData.append('termopanelText', termopanelText);
  formData.append('aguacaliente', aguacaliente);
  formData.append('tipococina', tipococina);
  formData.append('estacionamientos', estacionamientos);
  formData.append('estacionamientosTechados', estacionamientosTechados);
  formData.append('construccion', construccion);
  formData.append('tipoventana', tipoventana);
  formData.append('techo', techo);
   //Selected options hace referencia a las cosas opcionales que puede tener la casa
  formData.append('selectedOptions', selectedOptions); 
  //Rol adicional
  formData.append('rolbodega', rolbodega); //LISTO
  formData.append('rolestacionamiento', rolestacionamiento);
// Las fotos
  

  for (var i = 0; i < housePhotos.length; i++) {
    formData.append('housePhotos', housePhotos[i]);
  }

  //Campos del home office
formData.append('pisoHomeOffice', pisoHomeOffice); 
if (fotoHomeOffice.length > 2) {
  alert('No se pueden subir más de 2 imágenes del home office.');
  return;
}

for (var i = 0; i < fotoHomeOffice.length; i++) {
  formData.append('fotoHomeOffice', fotoHomeOffice[i]);
}


  
  formData.append('adicional', adicional);

  // ===============> La animación de "cargando" <==============
// Muestra el overlay de carga
document.getElementById('overlay').style.display = 'flex';

// Simulación de retraso de envío (solo con fines de demostración)
setTimeout(function() {
  // Oculta el overlay de carga
  document.getElementById('overlay').style.display = 'none';

  // Envío del formulario
  enviarFormularioReal(formData);
}, 30000);
  
// ========> Envío los datos al servidor <=========
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/enviar', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
      formulario.reset();
    }
  };
  xhr.send(formData);
});
