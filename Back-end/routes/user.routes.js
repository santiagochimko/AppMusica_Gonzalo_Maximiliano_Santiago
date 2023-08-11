const express = require("express");
const {
  traerCanciones,
  traerFiltros,
} = require("../controller/user.controller");
const userRoutes = express.Router();

//Traer canciones
userRoutes.get("/canciones", traerCanciones);
//Traer filtros
userRoutes.get("/filtros", traerFiltros);

module.exports = userRoutes;
