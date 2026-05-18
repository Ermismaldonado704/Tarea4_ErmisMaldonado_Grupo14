// ===================================================
// BASE DE DATOS: TIENDA DE PRODUCTOS VEGETALES
// CURSO: BIG DATA
// ===================================================

// Crear base de datos
use tienda_vegetales

// Crear colección e insertar productos iniciales
db.productos.insertMany([

{nombre:"Tomate",categoria:"Verdura",precio:3500,stock:50,proveedor:"AgroCampo"},
{nombre:"Papa",categoria:"Tuberculo",precio:2800,stock:100,proveedor:"CampoFresco"},
{nombre:"Cebolla",categoria:"Verdura",precio:3000,stock:70,proveedor:"AgroCampo"},
{nombre:"Zanahoria",categoria:"Verdura",precio:2500,stock:80,proveedor:"VerdeNatural"},
{nombre:"Lechuga",categoria:"Hortaliza",precio:2000,stock:40,proveedor:"Huerta Viva"},
{nombre:"Pepino",categoria:"Verdura",precio:2700,stock:60,proveedor:"AgroCampo"},
{nombre:"Pimenton",categoria:"Verdura",precio:4200,stock:30,proveedor:"CampoFresco"},
{nombre:"Brocoli",categoria:"Verdura",precio:5000,stock:25,proveedor:"Huerta Viva"},
{nombre:"Coliflor",categoria:"Verdura",precio:4800,stock:20,proveedor:"VerdeNatural"},
{nombre:"Espinaca",categoria:"Hortaliza",precio:3200,stock:35,proveedor:"Huerta Viva"},
{nombre:"Ajo",categoria:"Condimento",precio:7000,stock:45,proveedor:"CampoFresco"},
{nombre:"Apio",categoria:"Verdura",precio:2900,stock:50,proveedor:"VerdeNatural"},
{nombre:"Yuca",categoria:"Tuberculo",precio:3500,stock:60,proveedor:"CampoFresco"},
{nombre:"Platano",categoria:"Fruta",precio:2200,stock:90,proveedor:"AgroCampo"},
{nombre:"Banano",categoria:"Fruta",precio:1800,stock:100,proveedor:"VerdeNatural"},
{nombre:"Manzana",categoria:"Fruta",precio:4500,stock:75,proveedor:"Frutas del Campo"},
{nombre:"Pera",categoria:"Fruta",precio:4200,stock:60,proveedor:"Frutas del Campo"},
{nombre:"Uva",categoria:"Fruta",precio:8000,stock:40,proveedor:"AgroCampo"},
{nombre:"Naranja",categoria:"Fruta",precio:3000,stock:85,proveedor:"CampoFresco"}

])

// Insertar más de 100 documentos automáticamente

for(let i=1; i<=100; i++){

db.productos.insertOne({

nombre:"Producto Vegetal " + i,

categoria:[
"Verdura",
"Fruta",
"Hortaliza",
"Tuberculo"
][Math.floor(Math.random()*4)],

precio:Math.floor(Math.random()*9000)+1000,

stock:Math.floor(Math.random()*100)+1,

proveedor:[
"AgroCampo",
"CampoFresco",
"Huerta Viva",
"VerdeNatural"
][Math.floor(Math.random()*4)]

})

}

// Verificar cantidad de documentos
db.productos.countDocuments()
