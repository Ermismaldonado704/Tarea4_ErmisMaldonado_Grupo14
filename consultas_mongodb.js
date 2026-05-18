// Crear base de datos
use tienda_vegetales

// Insertar productos
db.productos.insertMany([
{
nombre:"Tomate",
categoria:"Verdura",
precio:3500,
stock:50,
proveedor:"AgroCampo"
}
])

// Contar documentos
db.productos.countDocuments()
