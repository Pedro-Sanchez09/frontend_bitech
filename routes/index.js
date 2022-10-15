var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const response = await axios.get("http://localhost:5000/api/v1/productos/");
setTimeout(()=>{
  console.log("respuesta",(response.data.data));
  let array=response.data.data;
  
  res.render('index', { title: 'Productos', array});
},2000)
 
});

/* GET home page. */
router.get('/producto/cargar/', function(req, res, next) {
  res.render('registrar', { title: 'Registrar producto' });
});



/* GET home page. */
router.get('/producto/administrar/', async function(req, res, next) {
  const response = await axios.get("http://localhost:5000/api/v1/productos/");
setTimeout(()=>{
  console.log("respuesta",typeof(response.data.data));
  let array=response.data.data;
  
  res.render('administrar', { title: 'Editar producto', array});
},2000)
 
});

router.get('/producto/:id/editar', async function(req, res, next) {
  const response = await axios.get(`http://localhost:5000/api/v1/productos/${req.params.id}`);
setTimeout(()=>{
  
let id=response.data.data.id;
let nombre=response.data.data.nombre;
let precio=response.data.data.precio;
let stock=response.data.data.stock;
let caract=response.data.data.caracteristica;
  
  res.render('editar', { title: 'Editar producto', id,nombre,precio,stock,caract});
},2000)
 
});

module.exports = router;
