const express = require('express');
const app = express();
const cors = require('cors') //LIBRERIA 
const productRoutes=require('./routes/product.routes')
const userRoutes = require('./routes/user.routes')
const categoryRoutes=require("./routes/category.routes")
const orderRoutes =  require("./routes/order.routes")

//Middlewares(aplicaciones intermedias) acciones que se ejecutan en mi servidor antes de llamara a cualquier ruta
app.use(express.json());//cuando venga un req.body poder leerlo // ES EL MARCO DE TRABAJO EXPRESS
app.use(cors()); //incorporar servivio cors a las funcionalidades, permitiendo que el frontend haga solicitudes al dominio de back.

app.use(express.static('public')) // Compartir carpeta Public, para poder ver las fotos guardadas en el front.-

app.use(express.urlencoded({ extended: true }));
//Aplicamos o Integramos las rutas a nuestro server

app.use([userRoutes,productRoutes, categoryRoutes, orderRoutes]); //que app use las rutas definidas en userRoutes/productRoutes

module.exports = app;
