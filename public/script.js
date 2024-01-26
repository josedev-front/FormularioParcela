const formulario = document.getElementById('formulario')

//Validación en tiempo real de teléfono
telefono.addEventListener("blur", function(){
  const tlfregex = /^\d{9}$/;
  const telefono = document.getElementById('telefono').value;
   if (!tlfregex.test(telefono)) {
     alert('Por favor, introduce un número de teléfono válido.');
     return;
   }
})

confirmartelefono.addEventListener("blur",function(){
  const confirmartelefono = document.getElementById('confirmartelefono').value;
  const telefono = document.getElementById('telefono').value;
  if (telefono!==confirmartelefono){
   alert('Los teléfonos no coinciden');
   return;
  }
})

//Validación en tiempo real de correo
correo.addEventListener("blur", function(){
  const emailregex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const correo = document.getElementById('correo').value;
  if (!emailregex.test(correo)) {
    alert('Por favor, introduce un correo válido.');
    return;
  }
})

confcorreo.addEventListener("blur", function(){
  const confcorreo = document.getElementById('confcorreo').value;
  const correo = document.getElementById('correo').value;
  if (correo!==confcorreo){
   alert('Los correos no coinciden');
   return;
  }
})


function validarBootstrap(){
  formulario.classList.add('was-validated');
  }

function aceptarCookies() {
      const cookie = document.getElementById('cookieNotification');
      cookie.classList.add('visually-hidden');
    }

function openModalAmoblada(){
      openModal('articulosamoblada')
    }


function openModalCocina() {
  openModal('cocina')
}

function openModalComedor() {
openModal('comedor')
}


function openModalLiving() {
openModal('living')
}


function openModalHall() {
openModal('hall')
}


function openModalFachada() {
openModal('fachada')
}

function openModalAreascomunes() {
openModal('areascomunes')
}


function openModalAdicionales() {
openModal('housePhotos')
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

//Función para mostrar/ocultar el texto de recepcion final en Trámite y parcial
function togglerecepcion() { 
const bienhechuria = document.getElementById("bienhechuria");
const enTramiteText = document.getElementById("enTramiteText");
const enTramiteTextdiv = document.getElementById("enTramiteTextdiv"); 

const parcialText = document.getElementById("parcialText");
const parcialTextdiv = document.getElementById("parcialTextdiv"); 

if (bienhechuria.value === "En tramite") {
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

function generarCamposDeSeleccion(tipo, numeroTotal, nombrePieza){
  console.log(nombrePieza);
  var contenedorSelect = document.getElementById('contenedorSelect'+tipo);
  contenedorSelect.innerHTML = "";
  var contenedorFotos = document.getElementById('contenedorFotos'+tipo);
  contenedorFotos.innerHTML = "";
  
  var tipoPisoButton = document.getElementById('tipoPisoButton'+tipo);
  
  if (numeroTotal!=0){
    tipoPisoButton.classList.remove('visually-hidden');
  } else {
    tipoPisoButton.classList.add('visually-hidden');
  }
  
  for (var i = 1; i<=10;i++){
  //Creo el label
  var labelInput = document.createElement('label');
    labelInput.innerHTML = `<i class="fa-solid fa-circle-arrow-down fa-xl"></i><kbd>Fotos de ${nombrePieza} #` + i + `</kbd><i class="fa-solid fa-circle-arrow-down fa-xl"></i>`;
    labelInput.setAttribute('for', 'foto'+ tipo + i);
    labelInput.classList.add('form-label');
  //Creo el div que mete las col dentro del row
  var divForm = document.createElement('div');
      divForm.classList.add('mb-3');
      divForm.classList.add('flexRight');
  //Creo el div del input-group
  var divGroup = document.createElement('div');
      divGroup.classList.add('input-group');
  //Creo el input para subir las fotos
  var input = document.createElement('input');
      input.type = "file";
      input.accept = "image/*";
      input.multiple = true;
      input.max = "2";
      input.name = "foto" + tipo + i;
      input.id = "foto" + tipo + i;
      input.classList.add("visually-hidden");
      input.classList.add('form-control');
  //Creo el botón donde se verán las fotos
  var buttonPhotos = document.createElement('button');
      buttonPhotos.setAttribute("onclick", `openModal${tipo}${i}()`);
      buttonPhotos.classList.add('btn');
      buttonPhotos.classList.add('btn-primary');
      buttonPhotos.classList.add('visually-hidden');
      buttonPhotos.id = tipo + "Photos" + i;
  //Creo el icono
  var icono = document.createElement('i');
  icono.classList.add('fa-solid');
  icono.classList.add('fa-eye');
  icono.classList.add('fa-xl');
  
  contenedorFotos.classList.add('d-flex');
  contenedorFotos.classList.add('flex-wrap');
  contenedorFotos.appendChild(divForm);
  
  divForm.appendChild(labelInput);
  divForm.appendChild(divGroup);
  
  divGroup.appendChild(input);
  divGroup.appendChild(buttonPhotos);
  
  buttonPhotos.appendChild(icono);
  
  if (i <= numeroTotal) {
    input.classList.remove("visually-hidden");
    buttonPhotos.classList.remove('visually-hidden');
    input.required = true;
  }
  
  if (i > numeroTotal) {
    labelInput.hidden = true;
  }
  
  }
  
  //Creo los Selects del tipo de piso
  for (var i = 1; i <= 10; i++) {
    var label = document.createElement("label");
    var divForm = document.createElement("div");
  
  
  
    label.innerHTML = `Piso de ${nombrePieza} #`+i;
    label.setAttribute("for", "piso" + tipo + i);
    
    var select = document.createElement("select");
      select.name = "piso" + tipo + i;
      select.id = "piso" + tipo + i;
      select.required = false;
      select.classList.add("visually-hidden");
      select.classList.add("form-select");
    divForm.classList.add("form-floating");
    divForm.classList.add("mb-3");
    divForm.classList.add("flexRight");
    divForm.classList.add("d-inline-flex");
    contenedorSelect.appendChild(divForm);
  
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
  
    divForm.appendChild(select);
  
    divForm.appendChild(label);
  
    if (i <= numeroTotal) {
      select.classList.remove("visually-hidden");
    }
  
    if (i > numeroTotal) {
      select.disabled = true
      label.hidden = true;
      select.required=true;
    }
  }
  
  }

function openModal(inputFoto) {
    const imageContainer = document.getElementById('imageContainer');
    const fileInput = document.getElementById(inputFoto);
  
    // Limpiar el contenedor de imágenes antes de agregar nuevas imágenes
    imageContainer.innerHTML = '';
  
    // Recorrer los archivos seleccionados y agregar miniaturas al contenedor
    for (const file of fileInput.files) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('img-thumbnail','img-fluid', 'm-2');
        imageContainer.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    }
  
    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  
  }
  

  function mostrarCamposDeSeleccionDormitorios() {
    generarCamposDeSeleccion("Dormitorio", parseInt(document.getElementById("numeroDormitorios").value),"Dormitorio")
  }

function openModalDormitorio1(){
  openModal('fotoDormitorio1')
}
  
function openModalDormitorio2(){
  openModal('fotoDormitorio2')
}

function openModalDormitorio3(){
  openModal('fotoDormitorio3')
}

function openModalDormitorio4(){
  openModal('fotoDormitorio4')
}

function openModalDormitorio5(){
  openModal('fotoDormitorio5')
}

function openModalDormitorio6(){
  openModal('fotoDormitorio6')
}

function openModalDormitorio7(){
  openModal('fotoDormitorio7')
}

function openModalDormitorio8(){
  openModal('fotoDormitorio8')
}

function openModalDormitorio9(){
  openModal('fotoDormitorio9')
}

function openModalDormitorio10(){
  openModal('fotoDormitorio10')
}



function mostrarCamposDeSeleccionPiezasServicio() {
  generarCamposDeSeleccion("PiezasServicio", parseInt(document.getElementById("numeroPiezasServicio").value),"Pieza de servicio")
}

function openModalPiezasServicio1(){
  openModal('fotoPiezasServicio1')
}

function openModalPiezasServicio2(){
  openModal('fotoPiezasServicio2')
}

function openModalPiezasServicio3(){
  openModal('fotoPiezasServicio3')
}

function openModalPiezasServicio4(){
  openModal('fotoPiezasServicio4')
}

function openModalPiezasServicio5(){
  openModal('fotoPiezasServicio5')
}



function mostrarCamposDeSeleccionBanos() {
  generarCamposDeSeleccion("Bano", parseInt(document.getElementById("numeroBanos").value),"Baño")
}

function openModalBano1(){
  openModal('fotoBano1')
}
  
function openModalBano2(){
  openModal('fotoBano2')
}

function openModalBano3(){
  openModal('fotoBano3')
}

function openModalBano4(){
  openModal('fotoBano4')
}

function openModalBano5(){
  openModal('fotoBano5')
}

function openModalBano6(){
  openModal('fotoBano6')
}

function openModalBano7(){
  openModal('fotoBano7')
}

function openModalBano8(){
  openModal('fotoBano8')
}

function openModalBano9(){
  openModal('fotoBano9')
}

function openModalBano10(){
  openModal('fotoBano10')
}



function mostrarCamposDeSeleccionBanosServicio() {
  
  generarCamposDeSeleccion("BanosServicio", parseInt(document.getElementById("numeroBanosServicio").value),"Baño de servicio")
}

function openModalBanosServicio1(){
  openModal('fotoBanosServicio1')
}
  
function openModalBanosServicio2(){
  openModal('fotoBanosServicio2')
}

function openModalBanosServicio3(){
  openModal('fotoBanosServicio3')
}

function openModalBanosServicio4(){
  openModal('fotoBanosServicio4')
}

function openModalBanosServicio5(){
  openModal('fotoBanosServicio5')
}

function mostrarCamposDeSeleccionBalcon() {
  generarCamposDeSeleccion('Balcon', parseInt(document.getElementById("numeroBalcon").value),'Terraza')
}

function openModalBalcon1(){
  openModal('fotoBalcon1')
}
  
function openModalBalcon2(){
  openModal('fotoBalcon2')
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
      inputHab.required=true;
    }

    if (i > numeroSuite) {
      labelInputHab.hidden = true;
    }


  }
  //Creo los Selects del tipo de piso del dormitorio de la suite
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
      select.required=true;
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
      select2.required=true;
    }

    if (i > numeroSuite) {
      select2.disabled = true
      label2.hidden = true;
    }
  }
}

function openModalSuite1(){
  openModal('fotoHabBanoSuite1')
}
  
function openModalSuite2(){
  openModal('fotoHabBanoSuite2')
}

function openModalSuite3(){
  openModal('fotoHabBanoSuite3')
}

function openModalSuite4(){
  openModal('fotoHabBanoSuite4')
}

function openModalSuite5(){
  openModal('fotoHabBanoSuite5')
}

function openModalSuite6(){
  openModal('fotoHabBanoSuite6')
}

function openModalSuite7(){
  openModal('fotoHabBanoSuite7')
}

function openModalSuite8(){
  openModal('fotoHabBanoSuite8')
}

function openModalSuite9(){
  openModal('fotoHabBanoSuite9')
}

function openModalSuite10(){
  openModal('fotoHabBanoSuite10')
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

function openModalFamilyRoom(){
  openModal('fotoFamilyRoom')
}


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

function openModalHomeOffice1(){
  openModal('fotoHomeOffice1')
}


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
  const tipoApartamento = document.getElementById('tipoApartamento').value
  const bienhechuria = document.getElementById('bienhechuria').value
  if (bienhechuria === "") {
    alert('Por favor, selecciona una opción');
    return;
  }
  const enTramiteText = document.getElementById('enTramiteText').value;
  const parcialText = document.getElementById('parcialText').value;
  const numPisos = document.getElementById('numPisos').value
  const rol=document.getElementById('rol').value
  const inputPrueba = document.getElementById('inputPrueba').files;


  //=================================> Fin Sección de datos del departamento <================================================================


  //=================================> Sección de dirección del departamento <================================================================
  var comuna = document.getElementById('comuna').value;
  const calle = document.getElementById('calle').value;
  const piso = document.getElementById('piso').value;
  const casa = document.getElementById('casa').value;
  const block = document.getElementById('block').value;
  const pisox = document.getElementById('pisox').value;
  const etapaTorre = document.getElementById('etapaTorre').value;
  const anos = document.getElementById('anos').value;
  const mconstruidos = document.getElementById('mconstruidos').value
  const sector = document.getElementById('sector').value
  const mtotales = document.getElementById('mtotales').value
  const mterraza = document.getElementById('mterraza').value;
  const amoblada = document.getElementById('amoblada').value;
  const articuloscasa = document.getElementById('articuloscasa').value
  
  const articulosamoblada = document.getElementById('articulosamoblada').files;
  //=================================> Fin Sección de dirección del departamento <================================================================
  

  //=================================> Terraza <================================================================
  const numeroTerraza = document.getElementById('numeroBalcon').value;
  
  var pisoBalcon1 = document.getElementById('pisoBalcon1').value
  if (pisoBalcon1 === ""){
    pisoBalcon1 = 'No aplica'
  }

  var pisoBalcon2 = document.getElementById('pisoBalcon2').value
  if (pisoBalcon2 === ""){
    pisoBalcon2 = 'No aplica'
  }

  const fotoBalcon1 = document.getElementById('fotoBalcon1').files
  const fotoBalcon2 = document.getElementById('fotoBalcon2').files


  //=================================> Suites <================================================================
  var numeroSuite= document.getElementById('numeroSuite', numeroSuite).value

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
if (pisoDormitorio1 === ""){
  pisoDormitorio1 = "No aplica"
}
var pisoDormitorio2 = document.getElementById('pisoDormitorio2').value
if (pisoDormitorio2 === ""){
  pisoDormitorio2 = "No aplica"
}
var pisoDormitorio3 = document.getElementById('pisoDormitorio3').value
if (pisoDormitorio3 === ""){
  pisoDormitorio3 = "No aplica"
}
var pisoDormitorio4 = document.getElementById('pisoDormitorio4').value
if (pisoDormitorio4 === ""){
  pisoDormitorio4 = "No aplica"
}
var pisoDormitorio5 = document.getElementById('pisoDormitorio5').value
if (pisoDormitorio5 === ""){
  pisoDormitorio5 = "No aplica"
}
var pisoDormitorio6 = document.getElementById('pisoDormitorio6').value
if (pisoDormitorio6 === ""){
  pisoDormitorio6 = "No aplica"
}
var pisoDormitorio7 = document.getElementById('pisoDormitorio7').value
if (pisoDormitorio7 === ""){
  pisoDormitorio7 = "No aplica"
}
var pisoDormitorio8 = document.getElementById('pisoDormitorio8').value
if (pisoDormitorio8 === ""){
  pisoDormitorio8 = "No aplica"
}
var pisoDormitorio9 = document.getElementById('pisoDormitorio9').value
if (pisoDormitorio9 === ""){
  pisoDormitorio9 = "No aplica"
}
var pisoDormitorio10 = document.getElementById('pisoDormitorio10').value
if (pisoDormitorio10 === ""){
  pisoDormitorio10 = "No aplica"
}



const fotoDormitorio1 = document.getElementById('fotoDormitorio1').files;
const fotoDormitorio2 = document.getElementById('fotoDormitorio2').files; 
const fotoDormitorio3 = document.getElementById('fotoDormitorio3').files; 
const fotoDormitorio4 = document.getElementById('fotoDormitorio4').files; 
const fotoDormitorio5 = document.getElementById('fotoDormitorio5').files; 
const fotoDormitorio6 = document.getElementById('fotoDormitorio6').files; 
const fotoDormitorio7 = document.getElementById('fotoDormitorio7').files; 
const fotoDormitorio8 = document.getElementById('fotoDormitorio8').files; 
const fotoDormitorio9 = document.getElementById('fotoDormitorio9').files; 
const fotoDormitorio10 = document.getElementById('fotoDormitorio10').files; 
//=================================> Pieza de servicio <================================================================
var numeroPiezasServicio = document.getElementById('numeroPiezasServicio').value


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
const cocina = document.getElementById('cocina').files;

const pisocomedor = document.getElementById('pisocomedor').value;
const comedor = document.getElementById('comedor').files;
  
const pisoliving = document.getElementById('pisoliving').value;
const living = document.getElementById('living').files;

const pisohall = document.getElementById('pisohall').value;
const hall = document.getElementById('hall').files;

const numPiscinas = document.getElementById('numPiscinas').value
const numPiscinasNormales = document.getElementById('numPiscinasNormales').value

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

//El checkbox de áreas comunes
var selectedOptions2 = [];
  var checkboxes2 = document.querySelectorAll('input[type="checkbox"].ampliaciones2:checked');
  for (var i = 0; i < checkboxes2.length; i++) {
    selectedOptions2.push(checkboxes2[i].value);
  }
//FIn del checbox

//Campos del home office
const pisoHomeOffice = document.getElementById('pisoHomeOffice').value;
const fotoHomeOffice = document.getElementById('fotoHomeOffice').files;

const fachada = document.getElementById('fachada').files[0];
const housePhotos=document.getElementById('housePhotos').files;
const areascomunes = document.getElementById('areascomunes').files;

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
  formData.append('tipoApartamento', tipoApartamento);
  formData.append('bienhechuria', bienhechuria);
  formData.append('enTramiteText',enTramiteText);
  formData.append('parcialText',parcialText);
  formData.append('numPisos', numPisos);
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
  formData.append('piso',piso);
  formData.append('casa', casa);
  formData.append('block', block);
  formData.append('pisox', pisox);
  formData.append('etapaTorre',etapaTorre);
  formData.append('anos', anos); 
  formData.append('mconstruidos', mconstruidos); 
  formData.append('mtotales', mtotales);
  formData.append('sector', sector);
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
  formData.append('numeroTerraza', numeroTerraza);
  formData.append('pisoBalcon1', pisoBalcon1);
  formData.append('pisoBalcon2', pisoBalcon2);

  if (fotoBalcon1.length > 2){
    alert('No se pueden subir más de 2 imágenes de la terrza #1');
    return;
  }
  for (var i=0; i<fotoBalcon1.length; i++){
    formData.append('fotoBalcon1',fotoBalcon1[i]);
  }
  
  if (fotoBalcon2.length > 2){
    alert('No se pueden subir más de 2 imágenes de la terraza #2');
    return;
  }
  for (var i=0; i<fotoBalcon2.length; i++){
    formData.append('fotoBalcon2',fotoBalcon2[i]);
  }

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
  }
  //Dormitorios
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

  if (fotoDormitorio1.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #1');
    return;
  }
  for (var i=0; i<fotoDormitorio1.length; i++){
    formData.append('fotoDormitorio1',fotoDormitorio1[i]);
  }

  if (fotoDormitorio2.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #2');
    return;
  }
  for (var i=0; i<fotoDormitorio2.length; i++){
    formData.append('fotoDormitorio2',fotoDormitorio2[i]);
  }

  if (fotoDormitorio3.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #3');
    return;
  }
  for (var i=0; i<fotoDormitorio3.length; i++){
    formData.append('fotoDormitorio3',fotoDormitorio3[i]);
  }

  if (fotoDormitorio4.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #4');
    return;
  }
  for (var i=0; i<fotoDormitorio4.length; i++){
    formData.append('fotoDormitorio4',fotoDormitorio4[i]);
  }

  if (fotoDormitorio5.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #5');
    return;
  }
  for (var i=0; i<fotoDormitorio5.length; i++){
    formData.append('fotoDormitorio5',fotoDormitorio5[i]);
  }

  if (fotoDormitorio6.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #6');
    return;
  }
  for (var i=0; i<fotoDormitorio6.length; i++){
    formData.append('fotoDormitorio6',fotoDormitorio6[i]);
  }

  if (fotoDormitorio7.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #7');
    return;
  }
  for (var i=0; i<fotoDormitorio7.length; i++){
    formData.append('fotoDormitorio7',fotoDormitorio7[i]);
  }

  if (fotoDormitorio8.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #8');
    return;
  }
  for (var i=0; i<fotoDormitorio8.length; i++){
    formData.append('fotoDormitorio8',fotoDormitorio8[i]);
  }

  if (fotoDormitorio9.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #9');
    return;
  }
  for (var i=0; i<fotoDormitorio9.length; i++){
    formData.append('fotoDormitorio9',fotoDormitorio9[i]);
  }

  if (fotoDormitorio10.length > 2){
    alert('No se pueden subir más de 2 imágenes del dormitorio #10');
    return;
  }
  for (var i=0; i<fotoDormitorio10.length; i++){
    formData.append('fotoDormitorio10',fotoDormitorio10[i]);
  }

//Pieza de servicio
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
  formData.append('numPiscinas', numPiscinas);
  formData.append('numPiscinasNormales', numPiscinasNormales);

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
  formData.append('selectedOptions2', selectedOptions2)
// Las fotos
  formData.append('fachada', fachada);
  if (housePhotos.length > 25) {
    alert('No se pueden subir más de 25 imágenes opcionales.');
    return;
  }

  for (var i = 0; i < housePhotos.length; i++) {
    formData.append('housePhotos', housePhotos[i]);
  }

  if (areascomunes.length > 25) {
    alert('No se pueden subir más de 25 imágenes de las áreas comunes.');
    return;
  }

  for (var i = 0; i < areascomunes.length; i++) {
    formData.append('areascomunes', areascomunes[i]);
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
