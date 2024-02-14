const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const sharp = require('sharp');
const mime = require('mime-types');
 const fs= require('fs');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb('Solo se permiten archivos de imagen y PDF.', false);
    }
  }
}).fields([
  { name: 'inputPrueba', maxCount: 5 },
  { name:'articulosamoblada', maxCount: 20},
  { name:'fotoHabBanoSuite1', maxCount: 2},
  { name:'fotoHabBanoSuite2', maxCount: 2},
  { name:'fotoHabBanoSuite3', maxCount: 2},
  { name:'fotoHabBanoSuite4', maxCount: 2},
  { name:'fotoHabBanoSuite5', maxCount: 2},
  { name:'fotoHabBanoSuite6', maxCount: 2},
  { name:'fotoHabBanoSuite7', maxCount: 2},
  { name:'fotoHabBanoSuite8', maxCount: 2},
  { name:'fotoHabBanoSuite9', maxCount: 2},
  { name:'fotoHabBanoSuite10', maxCount: 2},
  { name:'fotoHab1', maxCount: 2},
  { name:'fotoHab2', maxCount: 2},
  { name:'fotoHab3', maxCount: 2},
  { name:'fotoHab4', maxCount: 2},
  { name:'fotoHab5', maxCount: 2},
  { name:'fotoHab6', maxCount: 2},
  { name:'fotoHab7', maxCount: 2},
  { name:'fotoHab8', maxCount: 2},
  { name:'fotoHab9', maxCount: 2},
  { name:'fotoHab10', maxCount: 2},
  { name:'fotoPiezasServicio1', maxCount: 2},
  { name:'fotoPiezasServicio2', maxCount: 2},
  { name:'fotoPiezasServicio3', maxCount: 2},
  { name:'fotoPiezasServicio4', maxCount: 2},
  { name:'fotoPiezasServicio5', maxCount: 2},
  { name:'fotoBano1', maxCount: 2},
  { name:'fotoBano2', maxCount: 2},
  { name:'fotoBano3', maxCount: 2},
  { name:'fotoBano4', maxCount: 2},
  { name:'fotoBano5', maxCount: 2},
  { name:'fotoBano6', maxCount: 2},
  { name:'fotoBano7', maxCount: 2},
  { name:'fotoBano8', maxCount: 2},
  { name:'fotoBano9', maxCount: 2},
  { name:'fotoBano10', maxCount: 2},
  { name:'fotoBanosServicio1', maxCount: 2},
  { name:'fotoBanosServicio2', maxCount: 2},
  { name:'fotoBanosServicio3', maxCount: 2},
  { name:'fotoBanosServicio4', maxCount: 2},
  { name:'fotoBanosServicio5', maxCount: 2},


  { name: 'cocina', maxCount: 2 },
  { name: 'comedor', maxCount: 2 },
  { name: 'living', maxCount: 2 },
  { name: 'hall', maxCount: 2 },
  { name: 'fotoFamilyRoom', maxCount: 2 },
 /* { name: 'fachada', maxCount: 1 },
  { name: 'entrada', maxCount: 2 },
  { name: 'garaje', maxCount: 2 },
  { name: 'patiojardin', maxCount: 2 },*/
  { name: 'fotoHomeOffice', maxCount: 2 },
  { name: 'housePhotos', maxCount: 25 }
]);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
  host:'mail.tasarinmuebles.cl',
        port:465,
  auth: {
    user:'enviar-formulario@tasarinmuebles.cl',
        pass:process.env.CLAVE,
  }
});

app.post('/enviar', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.send('Error al subir los archivos.');
    } else {
      //Datos personales
      const nombre = req.body.nombre;
      const apellido = req.body.apellido;
      const rut = req.body.rut;
      const telefono = req.body.telefono;
      const correo = req.body.correo;
      const razon = req.body.razon;
      //Datos del departamento
      const bienhechuria = req.body.bienhechuria;
      const enTramiteText = req.body.enTramiteText;
      const parcialText = req.body.parcialText;
      const rol = req.body.rol;
      const inputPrueba = req.files['inputPrueba'];
       //Dirección
      const comuna=req.body.comuna;
      const calle = req.body.calle;
      const casa = req.body.casa;
      
      

      const anos = req.body.anos;
      const mconstruidos = req.body.mconstruidos;
      const mtotales = req.body.mtotales;
      const sector = req.body.sector;
      const nPisos = req.body.nPisos;
      const mterraza = req.body.mterraza;
      const amoblada = req.body.amoblada;
      const articuloscasa = req.body.articuloscasa;
      const articulosamoblada = req.files['articulosamoblada'];
      //Terraza      
      //Suites
      const numeroSuite=req.body.numeroSuite;
      const pisoSuite1=req.body.pisoSuite1;
      const pisoSuite2=req.body.pisoSuite2;
      const pisoSuite3=req.body.pisoSuite3;
      const pisoSuite4=req.body.pisoSuite4;
      const pisoSuite5=req.body.pisoSuite5;
      const pisoSuite6=req.body.pisoSuite6;
      const pisoSuite7=req.body.pisoSuite7;
      const pisoSuite8=req.body.pisoSuite8;
      const pisoSuite9=req.body.pisoSuite9;
      const pisoSuite10=req.body.pisoSuite10;
      const pisoSuiteBano1=req.body.pisoSuiteBano1;
      const pisoSuiteBano2=req.body.pisoSuiteBano2;
      const pisoSuiteBano3=req.body.pisoSuiteBano3;
      const pisoSuiteBano4=req.body.pisoSuiteBano4;
      const pisoSuiteBano5=req.body.pisoSuiteBano5;
      const pisoSuiteBano6=req.body.pisoSuiteBano6;
      const pisoSuiteBano7=req.body.pisoSuiteBano7;
      const pisoSuiteBano8=req.body.pisoSuiteBano8;
      const pisoSuiteBano9=req.body.pisoSuiteBano9;
      const pisoSuiteBano10=req.body.pisoSuiteBano10;
      const fotoHabBanoSuite1 = req.files['fotoHabBanoSuite1'];
      const fotoHabBanoSuite2 = req.files['fotoHabBanoSuite2'];
      const fotoHabBanoSuite3 = req.files['fotoHabBanoSuite3'];
      const fotoHabBanoSuite4 = req.files['fotoHabBanoSuite4'];
      const fotoHabBanoSuite5 = req.files['fotoHabBanoSuite5'];
      const fotoHabBanoSuite6 = req.files['fotoHabBanoSuite6'];
      const fotoHabBanoSuite7 = req.files['fotoHabBanoSuite7'];
      const fotoHabBanoSuite8 = req.files['fotoHabBanoSuite8'];
      const fotoHabBanoSuite9 = req.files['fotoHabBanoSuite9'];
      const fotoHabBanoSuite10 = req.files['fotoHabBanoSuite10'];      
      
      //Dormitorios
      const numeroDormitorios = req.body.numeroDormitorios;
      
      const pisoDormitorio1 = req.body.pisoDormitorio1;
      const pisoDormitorio2 = req.body.pisoDormitorio2;
      const pisoDormitorio3 = req.body.pisoDormitorio3;
      const pisoDormitorio4 = req.body.pisoDormitorio4;
      const pisoDormitorio5 = req.body.pisoDormitorio5;
      const pisoDormitorio6 = req.body.pisoDormitorio6;
      const pisoDormitorio7 = req.body.pisoDormitorio7;
      const pisoDormitorio8 = req.body.pisoDormitorio8;
      const pisoDormitorio9 = req.body.pisoDormitorio9;
      const pisoDormitorio10 = req.body.pisoDormitorio10;
      const fotoHab1 = req.files['fotoHab1'];
      const fotoHab2 = req.files['fotoHab2'];
      const fotoHab3 = req.files['fotoHab3'];
      const fotoHab4 = req.files['fotoHab4'];
      const fotoHab5 = req.files['fotoHab5'];
      const fotoHab6 = req.files['fotoHab6'];
      const fotoHab7 = req.files['fotoHab7'];
      const fotoHab8 = req.files['fotoHab8'];
      const fotoHab9 = req.files['fotoHab9'];
      const fotoHab10 = req.files['fotoHab10'];
      
      //Pieza de servicio
      const numeroPiezasServicio = req.body.numeroPiezasServicio;
      const pisoPiezasServicio1 = req.body.pisoPiezasServicio1;
      const pisoPiezasServicio2 = req.body.pisoPiezasServicio2;
      const pisoPiezasServicio3 = req.body.pisoPiezasServicio3;
      const pisoPiezasServicio4 = req.body.pisoPiezasServicio4;
      const pisoPiezasServicio5 = req.body.pisoPiezasServicio5;
      const fotoPiezasServicio1 = req.files['fotoPiezasServicio1'];
      const fotoPiezasServicio2 = req.files['fotoPiezasServicio2'];
      const fotoPiezasServicio3 = req.files['fotoPiezasServicio3'];
      const fotoPiezasServicio4 = req.files['fotoPiezasServicio4'];
      const fotoPiezasServicio5 = req.files['fotoPiezasServicio5'];
      //Baños
      const numeroBanos = req.body.numeroBanos;
      
      const pisoBano1 = req.body.pisoBano1;
      const pisoBano2 = req.body.pisoBano2;
      const pisoBano3 = req.body.pisoBano3;
      const pisoBano4 = req.body.pisoBano4;
      const pisoBano5 = req.body.pisoBano5;
      const pisoBano6 = req.body.pisoBano6;
      const pisoBano7 = req.body.pisoBano7;
      const pisoBano8 = req.body.pisoBano8;
      const pisoBano9 = req.body.pisoBano9;
      const pisoBano10 = req.body.pisoBano10;
      const fotoBano1 = req.files['fotoBano1'];
      const fotoBano2 = req.files['fotoBano2'];
      const fotoBano3 = req.files['fotoBano3'];
      const fotoBano4 = req.files['fotoBano4'];
      const fotoBano5 = req.files['fotoBano5'];
      const fotoBano6 = req.files['fotoBano6'];
      const fotoBano7 = req.files['fotoBano7'];
      const fotoBano8 = req.files['fotoBano8'];
      const fotoBano9 = req.files['fotoBano9'];
      const fotoBano10 = req.files['fotoBano10'];
      
      //Baño de servicio
      const numeroBanosServicio = req.body.numeroBanosServicio;
      const pisoBanosServicio1 = req.body.pisoBanosServicio1;
      const pisoBanosServicio2 = req.body.pisoBanosServicio2;
      const pisoBanosServicio3 = req.body.pisoBanosServicio3;
      const pisoBanosServicio4 = req.body.pisoBanosServicio4;
      const pisoBanosServicio5 = req.body.pisoBanosServicio5;
      const fotoBanosServicio1 = req.files['fotoBanosServicio1'];
      const fotoBanosServicio2 = req.files['fotoBanosServicio2'];
      const fotoBanosServicio3 = req.files['fotoBanosServicio3'];
      const fotoBanosServicio4 = req.files['fotoBanosServicio4'];
      const fotoBanosServicio5 = req.files['fotoBanosServicio5'];
      //
      const pisococina = req.body.pisococina;
      const cocina=req.files['cocina'];
      const pisocomedor = req.body.pisocomedor;
      const comedor=req.files['comedor'];
      const pisoliving = req.body.pisoliving;
      const living = req.files['living'];
      const pisohall = req.body.pisohall;
      const hall = req.files['hall'];
      const pisoFamilyRoom = req.body.pisoFamilyRoom;
      const fotoFamilyRoom = req.files['fotoFamilyRoom'];
 
      //Información adicional
      const aislacion = req.body.aislacion;
      const tipogas = req.body.tipogas;
      const termopanel = req.body.termopanel;
      const termopanelText = req.body.termopanelText;
      const aguacaliente = req.body.aguacaliente;
      const tipococina = req.body.tipococina;
      const estacionamientos = req.body.estacionamientos;
      const estacionamientosTechados = req.body.estacionamientosTechados;
      const construccion = req.body.construccion;
      const construcciones = req.body.construcciones;
      const tipoventana = req.body.tipoventana;
      const techo = req.body.techo;
      const selectedOptions = req.body.selectedOptions;
      const rolbodega = req.body.rolbodega;
      const rolestacionamiento = req.body.rolestacionamiento;
      const alcantarillado = req.body.alcantarillado;
      const tipoagua = req.body.tipoagua;
      const Formaterreno = req.body.Formaterreno;

      
      const adicional = req.body.adicional;
      /*const fachada=req.files['fachada'][0]
      const entrada=req.files['entrada'];
      const garaje=req.files['garaje'];
      const patiojardin=req.files['patiojardin'];*/
      const housePhotos = req.files['housePhotos'];
      //homeOffice
      
      const pisoHomeOffice = req.body.pisoHomeOffice;
      const fotoHomeOffice = req.files['fotoHomeOffice'];

            

     /* sharp(fachada.path)
    .resize(500)
    .toFormat('jpeg')
    .toFile(`public/uploads/compressed_${fachada.originalname}`, (err, info) => {
      if (err) {
        console.error('Error al comprimir la imagen de la fachada:', err);
      } else {
        // Borrar el archivo original sin comprimir.
        // fs.unlinkSync(fachada.path);
        console.log('Imagen de la fachada comprimida y guardada.');
      }
    });*/




      const destinatario1 = 'recibir-formulario@tasarinmuebles.cl';
      const destinatario2 = correo;

      var min = 1000000;
      var max = 10000000;
      var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

      const emailTasadorHTML = `
      <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
          .claseBoton{
              width: 30%;
                  background-color: #fcae3b;
                  border: 2px solid #fcae3b;
                  color: black; 
                  padding: 16px 32px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
          }
          .claseBoton:hover{
              background-color: #000000;
              color: #ffffff;
          }
          .imag{
              width: 20px;
              height: 20px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
      </style>
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
          .claseBoton{
              width: 30%;
                  background-color: #fcae3b;
                  border: 2px solid #fcae3b;
                  color: black; 
                  padding: 16px 32px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
          }
          .claseBoton:hover{
              background-color: #000000;
              color: #ffffff;
          }
          .imag{
              width: 20px;
              height: 20px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
      </style>
  </head>
  <body>
      <div style="width: 100%; background-color: #e3e3e3;">
          <div style="padding: 20px 10px 20px 10px;">
              <!-- Imagen inicial -->
              <div style="background-color: rgb(40,94,192); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  <img src="cid:simb.webp" alt="" style="width: 70px; height: 70px;">
                    <p style="color: white">Tasar Inmuebles</p>
              </div>
              <!-- Imagen inicial -->
              <!-- Contenido principal -->
              <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
              <h1>¡Tienes una tasación por realizar! ✅</h1>
              <p style="text-align: left;">Hola <strong>Freda</strong>,</p>
            <p style="text-align: left;">Es un gusto saludarte. Mediante este correo electrónico, te enviamos una tasación pendiente por realizar con el número de referencia <strong>${numeroAleatorio}</strong>. Recuerda que debes tener la tasación lista en los próximos cinco días hábiles.</p>
                <h3 style="text-align: left;">Datos personales 👨🏻</h3>
                <p style="text-align: left;">Nombre: ${nombre} ${apellido}</p>
                <p style="text-align: left;">Rut: ${rut}</p>
                <p style="text-align: left;">Teléfono: ${telefono}</p>
                <p style="text-align: left;">Correo: ${correo}</p>
                <p style="text-align: left;">Motivo de la tasación: ${razon}</p>
                <h3 style="text-align: left;">Datos de la parcela</h3>
                <p style="text-align: left;">ROL: ${rol}</p>
                <p style="text-align: left;">¿El inmueble tiene construciones?: ${construcciones}</p>
                <p style="text-align: left;">¿Los metrajes y bienhechurías están regularizados?:${bienhechuria}, ${enTramiteText}${parcialText}</p>
                <p style="text-align: left;">m2 de terreno: ${mtotales}</p>
                <p style="text-align: left;">Alcantarillado: ${alcantarillado}</p>
                <p style="text-align: left;">Tipo de agua: ${tipoagua}</p>
                <p style="text-align: left;">Forma del terreno: ${Formaterreno}</p>
                <h3 style="text-align: left;">Dirección 📌</h3>
                <p style="text-align: left;">Comuna: ${comuna}</p>
                <p style="text-align: left;">Calle: ${calle}</p>
                <p style="text-align: left;">Sector: ${sector}</p>
                <p style="text-align: left;">N°: ${casa}</p>
                <h3 style="text-align: left;">Datos de la casa (si aplica) 🏠</h3>
                <p style="text-align: left;">N° de pisos: ${nPisos}</p>
                <p style="text-align: left;">Año de construcción: ${anos}</p>
                <p style="text-align: left;">m2 construídos: ${mconstruidos}</p>
                <p style="text-align: left;">m2 de terraza: ${mterraza}</p>
                <p style="text-align: left;">Amoblado: ${amoblada}</p>
                <h3 style="text-align: left;">Suites</h3>
                <p style="text-align: left;">N° de suites: ${numeroSuite}</p>
                <p style="text-align: left;"><strong>Material del piso de las habitaciones de las suites:</strong></p>
                <p style="text-align: left;">#1: ${pisoSuite1}</p>
                <p style="text-align: left;">#2: ${pisoSuite2}</p>
                <p style="text-align: left;">#3: ${pisoSuite3}</p>
                <p style="text-align: left;">#4: ${pisoSuite4}</p>
                <p style="text-align: left;">#5: ${pisoSuite5}</p>
                <p style="text-align: left;">#6: ${pisoSuite6}</p>
                <p style="text-align: left;">#7: ${pisoSuite7}</p>
                <p style="text-align: left;">#8: ${pisoSuite8}</p>
                <p style="text-align: left;">#9: ${pisoSuite9}</p>
                <p style="text-align: left;">#10: ${pisoSuite10}</p>
                <p style="text-align: left;"><strong>Material del piso de los baños de las suites:</strong></p>
                <p style="text-align: left;">#1: ${pisoSuiteBano1}</p>
                <p style="text-align: left;">#2: ${pisoSuiteBano2}</p>
                <p style="text-align: left;">#3: ${pisoSuiteBano3}</p>
                <p style="text-align: left;">#4: ${pisoSuiteBano4}</p>
                <p style="text-align: left;">#5: ${pisoSuiteBano5}</p>
                <p style="text-align: left;">#6: ${pisoSuiteBano6}</p>
                <p style="text-align: left;">#7: ${pisoSuiteBano7}</p>
                <p style="text-align: left;">#8: ${pisoSuiteBano8}</p>
                <p style="text-align: left;">#9: ${pisoSuiteBano9}</p>
                <p style="text-align: left;">#10: ${pisoSuiteBano10}</p>
                <h3 style="text-align: left;">Dormitorios</h3>
                <p style="text-align: left;">Nº de dormitorios: ${numeroDormitorios}</p>
                <p style="text-align: left;"><strong>Material del piso de las habitaciones:</strong></p>
                <p style="text-align: left;">#1: ${pisoDormitorio1}</p>
                <p style="text-align: left;">#2: ${pisoDormitorio2}</p>
                <p style="text-align: left;">#3: ${pisoDormitorio3}</p>
                <p style="text-align: left;">#4: ${pisoDormitorio4}</p>
                <p style="text-align: left;">#5: ${pisoDormitorio5}</p>
                <p style="text-align: left;">#6: ${pisoDormitorio6}</p>
                <p style="text-align: left;">#7: ${pisoDormitorio7}</p>
                <p style="text-align: left;">#8: ${pisoDormitorio8}</p>
                <p style="text-align: left;">#9: ${pisoDormitorio9}</p>
                <p style="text-align: left;">#10: ${pisoDormitorio10}</p>
                <h3 style="text-align: left;">Piezas de servicio</h3>
                <p style="text-align: left;">N° de Piezas de servicio: ${numeroPiezasServicio}</p>
                <p style="text-align: left;"><strong>Tipo de piso de las Piezas de servicio:</strong></p>
                <p style="text-align: left;">#1: ${pisoPiezasServicio1}</p>
                <p style="text-align: left;">#2: ${pisoPiezasServicio2}</p>
                <p style="text-align: left;">#3: ${pisoPiezasServicio3}</p>
                <p style="text-align: left;">#4: ${pisoPiezasServicio4}</p>
                <p style="text-align: left;">#5: ${pisoPiezasServicio5}</p>
                <h3 style="text-align: left;">Baños</h3>
                <p style="text-align: left;">Nº de baños: ${numeroBanos}</p>
                <p style="text-align: left;"><strong>Tipo de piso de los baños:</strong></p>
                <p style="text-align: left;">#1: ${pisoBano1}</p>
                <p style="text-align: left;">#2: ${pisoBano2}</p>
                <p style="text-align: left;">#3: ${pisoBano3}</p>
                <p style="text-align: left;">#4: ${pisoBano4}</p>
                <p style="text-align: left;">#5: ${pisoBano5}</p>
                <p style="text-align: left;">#6: ${pisoBano6}</p>
                <p style="text-align: left;">#7: ${pisoBano7}</p>
                <p style="text-align: left;">#8: ${pisoBano8}</p>
                <p style="text-align: left;">#9: ${pisoBano9}</p>
                <p style="text-align: left;">#10: ${pisoBano10}</p>
                <h3 style="text-align: left;">Baños de servicio</h3>
                <p style="text-align: left;">N° de baños de servicio: ${numeroBanosServicio}</p>
                <p style="text-align: left;"><strong>Tipo de piso de los baños de servicio:</strong></p>
                <p style="text-align: left;">#1: ${pisoBanosServicio1}</p>
                <p style="text-align: left;">#2: ${pisoBanosServicio2}</p>
                <p style="text-align: left;">#3: ${pisoBanosServicio3}</p>
                <p style="text-align: left;">#4: ${pisoBanosServicio4}</p>
                <p style="text-align: left;">#5: ${pisoBanosServicio5}</p>
                <h3 style="text-align: left;">Family Room</h3>
                <p style="text-align: left;">Piso del family room: ${pisoFamilyRoom}</p>
                <h3 style="text-align: left;">Cocina</h3>
                <p style="text-align: left;">Tipo de piso de la cocina: ${pisococina}</p>
                <h3 style="text-align: left;">Comedor</h3>
                <p style="text-align: left;">Tipo de piso del comedor: ${pisocomedor}</p>
                <h3 style="text-align: left;">Living</h3>
                <p style="text-align: left;">Tipo de piso del living: ${pisoliving}</p>
                <h3 style="text-align: left;">Hall de entrada</h3>
                <p style="text-align: left;">Tipo de piso del hall de entrada: ${pisohall}</p>
                <h3 style="text-align: left;">Home Office</h3><p>${pisoHomeOffice}</p>
                <h3 style="text-align: left;">Información Adicional</h3>
                <p style="text-align: left;">Tipo de muebles de cocina: ${mueblecocina}</p>
                <p style="text-align: left;">Aislación: ${aislacion}</p>
                <p style="text-align: left;">Gas: ${tipogas}</p>
                <p style="text-align: left;">Termopanel: ${termopanel}</p>
                <p style="text-align: left;">Información adicional del Termopanel: ${termopanelText}</p>
                <p style="text-align: left;">Agua caliente: ${aguacaliente}</p>
                <p style="text-align: left;">Tipo de cocina: ${tipococina}</p>
                <p style="text-align: left;">Ventanas: ${tipoventana}</p>
                <p style="text-align: left;">Material de las paredes: ${construccion}</p>
                
                <p style="text-align: left;">Material del techo: ${techo}</p>
                <p style="text-align: left;">Nº de estacionamientos no techados: ${estacionamientos}</p>
                <p style="text-align: left;">Nº de estacionamientos techados: ${estacionamientosTechados}</p>
                <p style="text-align: left;">Rol estacionamiento: ${rolestacionamiento}</p>
                <p style="text-align: left;">Rol bodega: ${rolbodega}</p>

                

                <p style="text-align: left;">Características adicionales de la vivienda: ${selectedOptions}</p>
                <p style="text-align: left;">Información adicional: ${adicional}</p>
                <p style="text-align: left;">Artículos que incluye la casa (si aplica): ${articuloscasa}</p>
                
                  <!-- Gracias -->
                  <p>Saludos cordiales,</p>
                  <p style="margin-bottom: 50px;"><br>Pedro Pérez<br>Gerente de atención al cliente<br>Correo: <a href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a></p>
              <!-- Contenido principal -->
              <!-- Footer -->
                  <p style="background-color: rgb(2,33,89); padding: 10px 0px 10px 0px; font-size: 12px !important;">
                      © 2023 TasarInmuebles.cl, todos los derechos reservados.
                  </p>
              <!-- Footer -->
          </div>
      </div>
  </body>


</html>`;      

      // Configuración del correo electrónico que irá al correo del hosting
      const mailOptions = {
        from: '"Tasar Inmuebles 🏡"<enviar-formulario@tasarinmuebles.cl>',
        to: destinatario1,
        subject: `Nueva tasación por realizar ⚠️ #${numeroAleatorio}`,
        html:emailTasadorHTML,
        attachments: [
          { },
        ]
      };

      if (inputPrueba){
        for (const file of inputPrueba) {
          let i = 0
          if (file.mimetype.startsWith('image')) {
            sharp(file.path)
            .resize(500)
            .toFormat('jpeg')
            .toFile(`public/uploads/compressed_${file.originalname}`, (err, info) => {
              if (err) {
                console.error('Error al comprimir una foto del documento de regularización:', err);
              } else {
                // Borrar el archivo original sin comprimir.
                // fs.unlinkSync(file.path);
                console.log('Foto del documento de regularización comprimida y guardada.');
              }
            });
  
            mailOptions.attachments.push({
              filename: `DOCUMENTOS_${file.originalname}`,
              path: `public/uploads/compressed_${file.originalname}`
            });
          } else if (file.mimetype === 'application/pdf') {
              mailOptions.attachments.push({ filename: file.originalname, path: file.path});
          }
        i++
      }
    }
    
      if (articulosamoblada) {
        // Comprimir y adjuntar fotos adicionales.
        articulosamoblada.forEach((articulosamoblad) => {
          sharp(articulosamoblad.path)
            .resize(500)
            .toFormat('jpeg')
            .toFile(`public/uploads/compressed_${articulosamoblad.originalname}`, (err, info) => {
              if (err) {
                console.error('Error al comprimir una foto de los artículos:', err);
              } else {
                // Borrar el archivo original sin comprimir.
                // fs.unlinkSync(articulosamoblad.path);
                console.log('Foto del artículo comprimida y guardada.');
              }
            });
        });
  
         // Agregar fotos adicionales al correo electrónico.
         articulosamoblada.forEach((articulosamoblad) => {
        mailOptions.attachments.push({
          filename: `ARTICULOS_VENTA_${articulosamoblad.originalname}`,
          path: `public/uploads/compressed_${articulosamoblad.originalname}`
        });
      });
    }

  if (fotoHabBanoSuite1) {
    // Comprimir y adjuntar fotos adicionales.
    fotoHabBanoSuite1.forEach((fotoHabBanoSuite1a) => {
      sharp(fotoHabBanoSuite1a.path)
        .resize(500)
        .toFormat('jpeg')
        .toFile(`public/uploads/compressed_${fotoHabBanoSuite1a.originalname}`, (err, info) => {
          if (err) {
            console.error('Error al comprimir una foto de la suite 1:', err);
          } else {
            // Borrar el archivo original sin comprimir.
            // fs.unlinkSync(fotoHabBanoSuite1a.path);
            console.log('Foto de la suite 1 comprimida y guardada.');
          }
        });
    });

     // Agregar fotos adicionales al correo electrónico.
     fotoHabBanoSuite1.forEach((fotoHabBanoSuite1a) => {
    mailOptions.attachments.push({
      filename: `SUITE1_${fotoHabBanoSuite1a.originalname}`,
      path: `public/uploads/compressed_${fotoHabBanoSuite1a.originalname}`
    });
  });
}

if (fotoHabBanoSuite2) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite2.forEach((fotoHabBanoSuite2a) => {
    sharp(fotoHabBanoSuite2a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite2a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite2a.path);
          console.log('Foto de la suite 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite2.forEach((fotoHabBanoSuite2a) => {
  mailOptions.attachments.push({
    filename: `SUITE2_${fotoHabBanoSuite2a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite2a.originalname}`
  });
});
}

if (fotoHabBanoSuite3) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite3.forEach((fotoHabBanoSuite3a) => {
    sharp(fotoHabBanoSuite3a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite3a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 3:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite3a.path);
          console.log('Foto de la suite 3 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite3.forEach((fotoHabBanoSuite3a) => {
  mailOptions.attachments.push({
    filename: `SUITE3_${fotoHabBanoSuite3a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite3a.originalname}`
  });
});
}

if (fotoHabBanoSuite4) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite4.forEach((fotoHabBanoSuite4a) => {
    sharp(fotoHabBanoSuite4a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite4a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 4:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite4a.path);
          console.log('Foto de la suite 4 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite4.forEach((fotoHabBanoSuite4a) => {
  mailOptions.attachments.push({
    filename: `SUITE4_${fotoHabBanoSuite4a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite4a.originalname}`
  });
});
}

if (fotoHabBanoSuite5) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite5.forEach((fotoHabBanoSuite5a) => {
    sharp(fotoHabBanoSuite5a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite5a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 5:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite5a.path);
          console.log('Foto de la suite 5 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite5.forEach((fotoHabBanoSuite5a) => {
  mailOptions.attachments.push({
    filename: `SUITE5_${fotoHabBanoSuite5a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite5a.originalname}`
  });
});
}

if (fotoHabBanoSuite6) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite6.forEach((fotoHabBanoSuite6a) => {
    sharp(fotoHabBanoSuite6a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite6a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 6:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite6a.path);
          console.log('Foto de la suite 6 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite6.forEach((fotoHabBanoSuite6a) => {
  mailOptions.attachments.push({
    filename: `SUITE6_${fotoHabBanoSuite6a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite6a.originalname}`
  });
});
}

if (fotoHabBanoSuite7) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite7.forEach((fotoHabBanoSuite7a) => {
    sharp(fotoHabBanoSuite7a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite7a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 7:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite7a.path);
          console.log('Foto de la suite 7 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite7.forEach((fotoHabBanoSuite7a) => {
  mailOptions.attachments.push({
    filename: `SUITE7_${fotoHabBanoSuite7a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite7a.originalname}`
  });
});
}

if (fotoHabBanoSuite8) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite8.forEach((fotoHabBanoSuite8a) => {
    sharp(fotoHabBanoSuite8a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite8a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 8:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite8a.path);
          console.log('Foto de la suite 8 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite8.forEach((fotoHabBanoSuite8a) => {
  mailOptions.attachments.push({
    filename: `SUITE8_${fotoHabBanoSuite8a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite8a.originalname}`
  });
});
}

if (fotoHabBanoSuite9) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite9.forEach((fotoHabBanoSuite9a) => {
    sharp(fotoHabBanoSuite9a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite9a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 9:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite9a.path);
          console.log('Foto de la suite 9 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite9.forEach((fotoHabBanoSuite9a) => {
  mailOptions.attachments.push({
    filename: `SUITE9_${fotoHabBanoSuite9a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite9a.originalname}`
  });
});
}

if (fotoHabBanoSuite10) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHabBanoSuite10.forEach((fotoHabBanoSuite10a) => {
    sharp(fotoHabBanoSuite10a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHabBanoSuite10a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto de la suite 10:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHabBanoSuite10a.path);
          console.log('Foto de la suite 10 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHabBanoSuite10.forEach((fotoHabBanoSuite10a) => {
  mailOptions.attachments.push({
    filename: `SUITE10_${fotoHabBanoSuite10a.originalname}`,
    path: `public/uploads/compressed_${fotoHabBanoSuite10a.originalname}`
  });
});
}

if (fotoHab1) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab1.forEach((fotoHab1a) => {
    sharp(fotoHab1a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab1a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 1:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab1a.path);
          console.log('Foto del dormitorio 1 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab1.forEach((fotoHab1a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO1_${fotoHab1a.originalname}`,
    path: `public/uploads/compressed_${fotoHab1a.originalname}`
  });
});
}

if (fotoHab2) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab2.forEach((fotoHab2a) => {
    sharp(fotoHab2a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab2a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab2a.path);
          console.log('Foto del dormitorio 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab2.forEach((fotoHab2a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO2_${fotoHab2a.originalname}`,
    path: `public/uploads/compressed_${fotoHab2a.originalname}`
  });
});
}

if (fotoHab3) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab3.forEach((fotoHab3a) => {
    sharp(fotoHab3a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab3a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 3:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab3a.path);
          console.log('Foto del dormitorio 3 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab3.forEach((fotoHab3a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO3_${fotoHab3a.originalname}`,
    path: `public/uploads/compressed_${fotoHab3a.originalname}`
  });
});
}

if (fotoHab4) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab4.forEach((fotoHab4a) => {
    sharp(fotoHab4a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab4a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 4:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab4a.path);
          console.log('Foto del dormitorio 4 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab4.forEach((fotoHab4a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO4_${fotoHab4a.originalname}`,
    path: `public/uploads/compressed_${fotoHab4a.originalname}`
  });
});
}

if (fotoHab5) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab5.forEach((fotoHab5a) => {
    sharp(fotoHab5a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab5a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 5:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab5a.path);
          console.log('Foto del dormitorio 5 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab5.forEach((fotoHab5a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO5_${fotoHab5a.originalname}`,
    path: `public/uploads/compressed_${fotoHab5a.originalname}`
  });
});
}

if (fotoHab6) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab6.forEach((fotoHab6a) => {
    sharp(fotoHab6a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab6a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 6:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab6a.path);
          console.log('Foto del dormitorio 6 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab6.forEach((fotoHab6a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO6_${fotoHab6a.originalname}`,
    path: `public/uploads/compressed_${fotoHab6a.originalname}`
  });
});
}

if (fotoHab7) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab7.forEach((fotoHab7a) => {
    sharp(fotoHab7a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab7a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 7:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab7a.path);
          console.log('Foto del dormitorio 7 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab7.forEach((fotoHab7a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO7_${fotoHab7a.originalname}`,
    path: `public/uploads/compressed_${fotoHab7a.originalname}`
  });
});
}

if (fotoHab8) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab8.forEach((fotoHab8a) => {
    sharp(fotoHab8a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab8a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 8:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab8a.path);
          console.log('Foto del dormitorio 8 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab8.forEach((fotoHab8a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO8_${fotoHab8a.originalname}`,
    path: `public/uploads/compressed_${fotoHab8a.originalname}`
  });
});
}

if (fotoHab9) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab9.forEach((fotoHab9a) => {
    sharp(fotoHab9a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab9a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 9:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab9a.path);
          console.log('Foto del dormitorio 9 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab9.forEach((fotoHab9a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO9_${fotoHab9a.originalname}`,
    path: `public/uploads/compressed_${fotoHab9a.originalname}`
  });
});
}

if (fotoHab10) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHab10.forEach((fotoHab10a) => {
    sharp(fotoHab10a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHab10a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del dormitorio 10:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHab10a.path);
          console.log('Foto del dormitorio 10 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHab10.forEach((fotoHab10a) => {
  mailOptions.attachments.push({
    filename: `DORMITORIO10_${fotoHab10a.originalname}`,
    path: `public/uploads/compressed_${fotoHab10a.originalname}`
  });
});
}

if (fotoPiezasServicio1) {
  // Comprimir y adjuntar fotos adicionales.
  fotoPiezasServicio1.forEach((fotoPiezasServicio1a) => {
    sharp(fotoPiezasServicio1a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoPiezasServicio1a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del PiezasServicio 1:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoPiezasServicio1a.path);
          console.log('Foto del PiezasServicio 1 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoPiezasServicio1.forEach((fotoPiezasServicio1a) => {
  mailOptions.attachments.push({
    filename: `PiezasServicio1_${fotoPiezasServicio1a.originalname}`,
    path: `public/uploads/compressed_${fotoPiezasServicio1a.originalname}`
  });
});
}

if (fotoPiezasServicio2) {
  // Comprimir y adjuntar fotos adicionales.
  fotoPiezasServicio2.forEach((fotoPiezasServicio2a) => {
    sharp(fotoPiezasServicio2a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoPiezasServicio2a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del PiezasServicio 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoPiezasServicio2a.path);
          console.log('Foto del PiezasServicio 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoPiezasServicio2.forEach((fotoPiezasServicio2a) => {
  mailOptions.attachments.push({
    filename: `PiezasServicio2_${fotoPiezasServicio2a.originalname}`,
    path: `public/uploads/compressed_${fotoPiezasServicio2a.originalname}`
  });
});
}

if (fotoPiezasServicio3) {
  // Comprimir y adjuntar fotos adicionales.
  fotoPiezasServicio3.forEach((fotoPiezasServicio3a) => {
    sharp(fotoPiezasServicio3a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoPiezasServicio3a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del PiezasServicio 3:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoPiezasServicio3a.path);
          console.log('Foto del PiezasServicio 3 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoPiezasServicio3.forEach((fotoPiezasServicio3a) => {
  mailOptions.attachments.push({
    filename: `PiezasServicio3_${fotoPiezasServicio3a.originalname}`,
    path: `public/uploads/compressed_${fotoPiezasServicio3a.originalname}`
  });
});
}

if (fotoPiezasServicio4) {
  // Comprimir y adjuntar fotos adicionales.
  fotoPiezasServicio4.forEach((fotoPiezasServicio4a) => {
    sharp(fotoPiezasServicio4a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoPiezasServicio4a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del PiezasServicio 4:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoPiezasServicio4a.path);
          console.log('Foto del PiezasServicio 4 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoPiezasServicio4.forEach((fotoPiezasServicio4a) => {
  mailOptions.attachments.push({
    filename: `PiezasServicio4_${fotoPiezasServicio4a.originalname}`,
    path: `public/uploads/compressed_${fotoPiezasServicio4a.originalname}`
  });
});
}

if (fotoPiezasServicio5) {
  // Comprimir y adjuntar fotos adicionales.
  fotoPiezasServicio5.forEach((fotoPiezasServicio5a) => {
    sharp(fotoPiezasServicio5a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoPiezasServicio5a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del PiezasServicio 5:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoPiezasServicio5a.path);
          console.log('Foto del PiezasServicio 5 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoPiezasServicio5.forEach((fotoPiezasServicio5a) => {
  mailOptions.attachments.push({
    filename: `PiezasServicio5_${fotoPiezasServicio5a.originalname}`,
    path: `public/uploads/compressed_${fotoPiezasServicio5a.originalname}`
  });
});
}

if (fotoBano1) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano1.forEach((fotoBano1a) => {
    sharp(fotoBano1a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano1a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 1:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano1a.path);
          console.log('Foto del BANO 1 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano1.forEach((fotoBano1a) => {
  mailOptions.attachments.push({
    filename: `BANO1_${fotoBano1a.originalname}`,
    path: `public/uploads/compressed_${fotoBano1a.originalname}`
  });
});
}

if (fotoBano2) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano2.forEach((fotoBano2a) => {
    sharp(fotoBano2a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano2a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano2a.path);
          console.log('Foto del BANO 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano2.forEach((fotoBano2a) => {
  mailOptions.attachments.push({
    filename: `BANO2_${fotoBano2a.originalname}`,
    path: `public/uploads/compressed_${fotoBano2a.originalname}`
  });
});
}

if (fotoBano3) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano3.forEach((fotoBano3a) => {
    sharp(fotoBano3a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano3a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 3:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano3a.path);
          console.log('Foto del BANO 3 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano3.forEach((fotoBano3a) => {
  mailOptions.attachments.push({
    filename: `BANO3_${fotoBano3a.originalname}`,
    path: `public/uploads/compressed_${fotoBano3a.originalname}`
  });
});
}

if (fotoBano4) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano4.forEach((fotoBano4a) => {
    sharp(fotoBano4a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano4a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 4:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano4a.path);
          console.log('Foto del BANO 4 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano4.forEach((fotoBano4a) => {
  mailOptions.attachments.push({
    filename: `BANO4_${fotoBano4a.originalname}`,
    path: `public/uploads/compressed_${fotoBano4a.originalname}`
  });
});
}

if (fotoBano5) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano5.forEach((fotoBano5a) => {
    sharp(fotoBano5a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano5a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 5:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano5a.path);
          console.log('Foto del BANO 5 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano5.forEach((fotoBano5a) => {
  mailOptions.attachments.push({
    filename: `BANO5_${fotoBano5a.originalname}`,
    path: `public/uploads/compressed_${fotoBano5a.originalname}`
  });
});
}

if (fotoBano6) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano6.forEach((fotoBano6a) => {
    sharp(fotoBano6a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano6a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 6:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano6a.path);
          console.log('Foto del BANO 6 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano6.forEach((fotoBano6a) => {
  mailOptions.attachments.push({
    filename: `BANO6_${fotoBano6a.originalname}`,
    path: `public/uploads/compressed_${fotoBano6a.originalname}`
  });
});
}

if (fotoBano7) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano7.forEach((fotoBano7a) => {
    sharp(fotoBano7a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano7a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 7:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano7a.path);
          console.log('Foto del BANO 7 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano7.forEach((fotoBano7a) => {
  mailOptions.attachments.push({
    filename: `BANO7_${fotoBano7a.originalname}`,
    path: `public/uploads/compressed_${fotoBano7a.originalname}`
  });
});
}

if (fotoBano8) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano8.forEach((fotoBano8a) => {
    sharp(fotoBano8a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano8a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 8:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano8a.path);
          console.log('Foto del BANO 8 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano8.forEach((fotoBano8a) => {
  mailOptions.attachments.push({
    filename: `BANO8_${fotoBano8a.originalname}`,
    path: `public/uploads/compressed_${fotoBano8a.originalname}`
  });
});
}

if (fotoBano9) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano9.forEach((fotoBano9a) => {
    sharp(fotoBano9a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano9a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 9:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano9a.path);
          console.log('Foto del BANO 9 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano9.forEach((fotoBano9a) => {
  mailOptions.attachments.push({
    filename: `BANO9_${fotoBano9a.originalname}`,
    path: `public/uploads/compressed_${fotoBano9a.originalname}`
  });
});
}

if (fotoBano10) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBano10.forEach((fotoBano10a) => {
    sharp(fotoBano10a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBano10a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BANO 10:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBano10a.path);
          console.log('Foto del BANO 10 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBano10.forEach((fotoBano10a) => {
  mailOptions.attachments.push({
    filename: `BANO10_${fotoBano10a.originalname}`,
    path: `public/uploads/compressed_${fotoBano10a.originalname}`
  });
});
}

if (fotoBanosServicio1) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBanosServicio1.forEach((fotoBanosServicio1a) => {
    sharp(fotoBanosServicio1a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBanosServicio1a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BanosServicio 1:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBanosServicio1a.path);
          console.log('Foto del BanosServicio 1 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBanosServicio1.forEach((fotoBanosServicio1a) => {
  mailOptions.attachments.push({
    filename: `BanosServicio1_${fotoBanosServicio1a.originalname}`,
    path: `public/uploads/compressed_${fotoBanosServicio1a.originalname}`
  });
});
}

if (fotoBanosServicio2) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBanosServicio2.forEach((fotoBanosServicio2a) => {
    sharp(fotoBanosServicio2a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBanosServicio2a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BanosServicio 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBanosServicio2a.path);
          console.log('Foto del BanosServicio 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBanosServicio2.forEach((fotoBanosServicio2a) => {
  mailOptions.attachments.push({
    filename: `BanosServicio2_${fotoBanosServicio2a.originalname}`,
    path: `public/uploads/compressed_${fotoBanosServicio2a.originalname}`
  });
});
}

if (fotoBanosServicio3) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBanosServicio3.forEach((fotoBanosServicio3a) => {
    sharp(fotoBanosServicio3a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBanosServicio3a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BanosServicio 3:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBanosServicio3a.path);
          console.log('Foto del BanosServicio 3 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBanosServicio3.forEach((fotoBanosServicio3a) => {
  mailOptions.attachments.push({
    filename: `BanosServicio3_${fotoBanosServicio3a.originalname}`,
    path: `public/uploads/compressed_${fotoBanosServicio3a.originalname}`
  });
});
}

if (fotoBanosServicio4) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBanosServicio4.forEach((fotoBanosServicio4a) => {
    sharp(fotoBanosServicio4a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBanosServicio4a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BanosServicio 4:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBanosServicio4a.path);
          console.log('Foto del BanosServicio 4 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBanosServicio4.forEach((fotoBanosServicio4a) => {
  mailOptions.attachments.push({
    filename: `BanosServicio4_${fotoBanosServicio4a.originalname}`,
    path: `public/uploads/compressed_${fotoBanosServicio4a.originalname}`
  });
});
}

if (fotoBanosServicio5) {
  // Comprimir y adjuntar fotos adicionales.
  fotoBanosServicio5.forEach((fotoBanosServicio5a) => {
    sharp(fotoBanosServicio5a.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoBanosServicio5a.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del BanosServicio 5:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoBanosServicio5a.path);
          console.log('Foto del BanosServicio 5 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoBanosServicio5.forEach((fotoBanosServicio5a) => {
  mailOptions.attachments.push({
    filename: `BanosServicio5_${fotoBanosServicio5a.originalname}`,
    path: `public/uploads/compressed_${fotoBanosServicio5a.originalname}`
  });
});
}

    


    if (cocina) {
      // Comprimir y adjuntar fotos adicionales.
      cocina.forEach((cocin) => {
        sharp(cocin.path)
          .resize(500)
          .toFormat('jpeg')
          .toFile(`public/uploads/compressed_${cocin.originalname}`, (err, info) => {
            if (err) {
              console.error('Error al comprimir una foto adicional:', err);
            } else {
              // Borrar el archivo original sin comprimir.
              // fs.unlinkSync(cocin.path);
              console.log('Foto de la cocina comprimida y guardada.');
            }
          });
      });

       // Agregar fotos adicionales al correo electrónico.
       cocina.forEach((cocin) => {
      mailOptions.attachments.push({
        filename: `COCINA_${cocin.originalname}`,
        path: `public/uploads/compressed_${cocin.originalname}`
      });
    });
  }

  if (comedor) {
    // Comprimir y adjuntar fotos adicionales.
    comedor.forEach((comedo) => {
      sharp(comedo.path)
        .resize(500)
        .toFormat('jpeg')
        .toFile(`public/uploads/compressed_${comedo.originalname}`, (err, info) => {
          if (err) {
            console.error('Error al comprimir una foto adicional:', err);
          } else {
            // Borrar el archivo original sin comprimir.
            // fs.unlinkSync(comedo.path);
            console.log('Foto del comedor comprimida y guardada.');
          }
        });
    });

     // Agregar fotos adicionales al correo electrónico.
     comedor.forEach((comedo) => {
    mailOptions.attachments.push({
      filename: `COMEDOR_${comedo.originalname}`,
      path: `public/uploads/compressed_${comedo.originalname}`
    });
  });
}

    if (living) {
      // Comprimir y adjuntar fotos adicionales.
      living.forEach((livin) => {
        sharp(livin.path)
          .resize(500)
          .toFormat('jpeg')
          .toFile(`public/uploads/compressed_${livin.originalname}`, (err, info) => {
            if (err) {
              console.error('Error al comprimir una foto adicional:', err);
            } else {
              // Borrar el archivo original sin comprimir.
              // fs.unlinkSync(livin.path);
              console.log('Foto del living comprimida y guardada.');
            }
          });
      });

       // Agregar fotos adicionales al correo electrónico.
       living.forEach((livin) => {
      mailOptions.attachments.push({
        filename: `LIVING_${livin.originalname}`,
        path: `public/uploads/compressed_${livin.originalname}`
      });
    });
  }

  if (hall) {
    // Comprimir y adjuntar fotos adicionales.
    hall.forEach((hal) => {
      sharp(hal.path)
        .resize(500)
        .toFormat('jpeg')
        .toFile(`public/uploads/compressed_${hal.originalname}`, (err, info) => {
          if (err) {
            console.error('Error al comprimir una foto adicional:', err);
          } else {
            // Borrar el archivo original sin comprimir.
            // fs.unlinkSync(hal.path);
            console.log('Foto del hall comprimida y guardada.');
          }
        });
    });

     // Agregar fotos adicionales al correo electrónico.
     hall.forEach((hal) => {
    mailOptions.attachments.push({
      filename: `HALL_${hal.originalname}`,
      path: `public/uploads/compressed_${hal.originalname}`
    });
  });
}

if (fotoFamilyRoom) {
  // Comprimir y adjuntar fotos adicionales.
  fotoFamilyRoom.forEach((fotoFamilyRooma) => {
    sharp(fotoFamilyRooma.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoFamilyRooma.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del Balcon 2:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoFamilyRooma.path);
          console.log('Foto del Balcon 2 comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoFamilyRoom.forEach((fotoFamilyRooma) => {
  mailOptions.attachments.push({
    filename: `FamilyRoom_${fotoFamilyRooma.originalname}`,
    path: `public/uploads/compressed_${fotoFamilyRooma.originalname}`
  });
});
}

/*if (entrada) {
  // Comprimir y adjuntar fotos adicionales.
  entrada.forEach((entra) => {
    sharp(entra.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${entra.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto adicional:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(entra.path);
          console.log('Foto del jardin comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   entrada.forEach((entra) => {
  mailOptions.attachments.push({
    filename: `JARDIN${entra.originalname}`,
    path: `public/uploads/compressed_${entra.originalname}`
  });
});
}

if (garaje) {
  // Comprimir y adjuntar fotos adicionales.
  garaje.forEach((garaj) => {
    sharp(garaj.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${garaj.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto adicional:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(garaj.path);
          console.log('Foto del garaje comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   garaje.forEach((garaj) => {
  mailOptions.attachments.push({
    filename: `GARAJE${garaj.originalname}`,
    path: `public/uploads/compressed_${garaj.originalname}`
  });
});
}*

if (patiojardin) {
  // Comprimir y adjuntar fotos adicionales.
  patiojardin.forEach((patiojardi) => {
    sharp(patiojardi.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${patiojardi.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto adicional:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(patiojardi.path);
          console.log('Foto del patio trasero comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   patiojardin.forEach((patiojardi) => {
  mailOptions.attachments.push({
    filename: `PATIO_TRASERO${patiojardi.originalname}`,
    path: `public/uploads/compressed_${patiojardi.originalname}`
  });
});
}*/

if (fotoHomeOffice) {
  // Comprimir y adjuntar fotos adicionales.
  fotoHomeOffice.forEach((fotoHomeOfficea) => {
    sharp(fotoHomeOfficea.path)
      .resize(500)
      .toFormat('jpeg')
      .toFile(`public/uploads/compressed_${fotoHomeOfficea.originalname}`, (err, info) => {
        if (err) {
          console.error('Error al comprimir una foto del Home Office:', err);
        } else {
          // Borrar el archivo original sin comprimir.
          // fs.unlinkSync(fotoHomeOfficea.path);
          console.log('Foto del Home Office comprimida y guardada.');
        }
      });
  });

   // Agregar fotos adicionales al correo electrónico.
   fotoHomeOffice.forEach((fotoHomeOfficea) => {
  mailOptions.attachments.push({
    filename: `HomeOffice_${fotoHomeOfficea.originalname}`,
    path: `public/uploads/compressed_${fotoHomeOfficea.originalname}`
  });
});
}

      if (housePhotos) {
        // Comprimir y adjuntar fotos adicionales.
        housePhotos.forEach((housePhoto) => {
          sharp(housePhoto.path)
            .resize(500)
            .toFormat('jpeg')
            .toFile(`public/uploads/compressed_${housePhoto.originalname}`, (err, info) => {
              if (err) {
                console.error('Error al comprimir una foto adicional:', err);
              } else {
                // Borrar el archivo original sin comprimir.
                // fs.unlinkSync(housePhoto.path);
                console.log('Foto adicional comprimida y guardada.');
              }
            });
        });
  
         // Agregar fotos adicionales al correo electrónico.
      housePhotos.forEach((housePhoto) => {
        mailOptions.attachments.push({
          filename: `ADICIONALES_${housePhoto.originalname}`,
          path: `public/uploads/compressed_${housePhoto.originalname}`
        });
      });
    }

    
    
      // Envío del correo electrónico
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error al enviar el correo electrónico.');
        } else {
          console.log('Correo electrónico enviado: ' + info.response);
          res.send('Formulario enviado correctamente.');
        }
      });

      const emailHTML = `
    <html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
        h1{ font-size: 30px !important;}
        h2{ font-size: 25px !important;}
        h3{ font-size: 18px !important;}
        h4{ font-size: 16px !important;}
        p, a{font-size: 15px !important;}

        .claseBoton{
            width: 30%;
                background-color: #fcae3b;
                border: 2px solid #fcae3b;
                color: black; 
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
        }
        .claseBoton:hover{
            background-color: #000000;
            color: #ffffff;
        }
        .imag{
            width: 20px;
            height: 20px;
        }
        .contA{
            margin: 0px 5px 0 5px;
        }
        .afooter{
            color: #ffffff !important; 
            text-decoration: none;
            font-size: 13px !important;
        }
    </style>
</head>
<body>
    <div style="width: 100%; background-color: #e3e3e3;">
        <div style="padding: 20px 10px 20px 10px;">
            <!-- Imagen inicial -->
            <div style="background-color: rgb(40,94,192); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                <img src="cid:simb.webp" alt="" style="width: 70px; height: 70px;">
                  <p style="color: white">Tasar Inmuebles</p>
            </div>
            <!-- Imagen inicial -->

            <!-- Contenido principal -->
            <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                <h1>¡Hemos recibido tu formulario! ✅</h1>
                <p style="text-align: left;">Estimado <strong>${nombre} ${apellido}</strong>,</p>
              <p style="text-align: left;">Es un gusto saludarte. Mediante este correo electrónico, te confirmamos la recepción de tu formulario con el número de referencia <strong>${numeroAleatorio}</strong>. Agradecemos tu interés en nuestros servicios.</p>
              
              <p style="text-align: left;">Dentro de los próximos cinco días hábiles, nuestro equipo de tasadores revisará detalladamente la información proporcionada. En caso de ser necesario, nos pondremos en contacto contigo para solicitar cualquier aclaración adicional.</p>
              <p style="text-align: left">Si tienes alguna pregunta o requieres mayor información, no dudes en contactarnos. Agradecemos nuevamente tu confianza en nuestros servicios y te aseguramos que estaremos trabajando diligentemente para atender tu solicitud. Te mantendremos informado(a) sobre cualquier avance o actualización relevante relacionada con tu tasación.</p>

                <!-- Gracias -->
                <p>Saludos cordiales,</p>
                <p style="margin-bottom: 50px;"><br>Pedro Pérez<br>Gerente de atención al cliente<br>Correo: <a href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a></p>
            <!-- Contenido principal -->

            <!-- Footer -->
            <div style="background-color: rgb(40,94,192); color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                <!-- Redes sociales -->
                <a href="https://www.facebook.com/pretwor" class="contA"><img src="cid:facebook.png" class="imag" /></a>
                <a href="https://www.instagram.com/pretwor/" class="contA"><img src="cid:instagram.png" class="imag" /></a>
                <a href="https://wa.me/573224294332" class="contA"><img src="cid:whatsapp.png" class="imag" /></a>
                <a href="mailto:contacto@pretwor.com" class="contA"><img src="cid:correo-electronico.png" class="imag" /></a>
                <!-- Redes sociales -->

                <h4>Soporte</h4>
                <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                    Comunícate con nosotros por los siguientes medios:<br>
                    Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a><br>
                    Whatsapp: <a class="afooter" href="https://wa.me/573224294332">+57 322 429 4332</a><br>
                </p>
                <p style="background-color: rgb(2,33,89); padding: 10px 0px 10px 0px; font-size: 12px !important;">
                    © 2023 TasarInmuebles.cl, todos los derechos reservados.
                </p>
            </div>
            <!-- Footer -->



        </div>
    </div>
</body>
</html>`;

      //Configuración del correo electrónico del usuario
      const mailOptions2 = {
        from: '"Tasar Inmuebles 🏡"<enviar-formulario@tasarinmuebles.cl>',
        to: [destinatario1, destinatario2].join(','),
        subject: `Confirmación de recepción de formulario #${numeroAleatorio}`,
        html: emailHTML,
        attachments: [
        { filename: 'simb.webp', path: 'public/simb.webp',cid:'simb.webp'},
        {filename: 'facebook.png', path: 'public/facebook.png',cid:'facebook.png'},
        {filename: 'whatsapp.png', path: 'public/whatsapp.png',cid:'whatsapp.png'},
        {filename: 'instagram.png', path: 'public/instagram.png',cid:'instagram.png'},
        {filename: 'correo-electronico.png', path: 'public/correo-electronico.png',cid:'correo-electronico.png'},
          ]

        };

      // Envío del correo electrónico del usuario
      transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error al enviar el correo electrónico.');
        } else {
          console.log('Correo electrónico enviado: ' + info.response);
          res.send('Formulario enviado correctamente.');
        }
      });

    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
