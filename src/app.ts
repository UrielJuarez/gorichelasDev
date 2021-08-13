//import express from 'express';
//import morgan from 'morgan';
//import path from 'path';
//import cors from 'cors';

const express = require("express")
//const morgan = require("morgan")
const path = require("path")
//const cors = require("cors")


//import usuarioRoutes from './routes/usuario';
//import productoRoutes from './routes/producto';
//import ordenRoutes from './routes/orden';

//const usuarioRoutes = require("./routes/usuario")
//const productoRoutes = require("./routes/producto")
//const ordenRoutes = require("./routes/orden")

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares : ver peticiones http (morgan)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//rutas
app.use('/api', usuarioRoutes);
app.use('/api', productoRoutes);
app.use('/api', ordenRoutes);

//carpeta para archivos
app.use('/uploads', express.static(path.resolve('uploads')))

//export default app;