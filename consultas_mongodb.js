// ===================================================
// CONSULTAS MONGODB
// TIENDA DE PRODUCTOS VEGETALES
// ===================================================


// =====================================
// 1. INSERTAR DOCUMENTO
// =====================================

db.productos.insertOne({

nombre:"Remolacha",
categoria:"Verdura",
precio:3600,
stock:25,
proveedor:"Huerta Viva"

})


// =====================================
// 2. SELECCIONAR TODOS LOS DOCUMENTOS
// =====================================

db.productos.find()

// Vista organizada
db.productos.find().pretty()


// =====================================
// 3. FILTROS
// =====================================

// Productos con precio mayor a 5000

db.productos.find({

precio:{$gt:5000}

})


// Buscar frutas

db.productos.find({

categoria:"Fruta"

})


// Productos con stock menor a 20

db.productos.find({

stock:{$lt:20}

})


// =====================================
// 4. ACTUALIZAR DOCUMENTO
// =====================================

db.productos.updateOne(

{nombre:"Tomate"},

{$set:{precio:4000}}

)


// Verificar actualización

db.productos.find({

nombre:"Tomate"

})



// =====================================
// 5. ELIMINAR DOCUMENTO
// =====================================

db.productos.deleteOne({

nombre:"Remolacha"

})


// Verificar eliminación

db.productos.find({

nombre:"Remolacha"

})



// =====================================
// 6. CONTAR DOCUMENTOS
// =====================================

db.productos.countDocuments()



// =====================================
// 7. SUMAR PRECIOS
// =====================================

db.productos.aggregate([

{

$group:{

_id:null,

sumaPrecios:{$sum:"$precio"}

}

}

])




// =====================================
// 8. PROMEDIO DE PRECIOS
// =====================================

db.productos.aggregate([

{

$group:{

_id:null,

promedioPrecio:{$avg:"$precio"}

}

}

])




// =====================================
// 9. CONTAR PRODUCTOS POR CATEGORIA
// =====================================

db.productos.aggregate([

{

$group:{

_id:"$categoria",

cantidad:{$sum:1}

}

}

])




// =====================================
// 10. PRODUCTO MÁS COSTOSO
// =====================================

db.productos.find()

.sort({

precio:-1

})

.limit(1)




// =====================================
// 11. PRODUCTOS ORDENADOS POR PRECIO
// =====================================

db.productos.find()

.sort({

precio:1

})




// =====================================
// 12. PRODUCTOS ENTRE PRECIOS
// =====================================

db.productos.find({

precio:{

$gte:3000,

$lte:6000

}

})
