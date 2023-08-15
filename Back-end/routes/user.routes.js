const express = require("express");
const {
  traerCanciones,
  traerFiltros,
  crearLista,
} = require("../controller/user.controller");
const userRoutes = express.Router();

//Traer canciones
userRoutes.get("/canciones", traerCanciones);
//Traer filtros
userRoutes.get("/filtros", traerFiltros);

//crear playlist
userRoutes.post("/crearlista", crearLista);

module.exports = userRoutes;
