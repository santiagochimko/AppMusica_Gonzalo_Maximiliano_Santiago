const express = require("express");
const {
  traerCanciones,
  traerFiltros,
  crearListaFiltros,
  traerArtistas,
} = require("../controller/user.controller");
const userRoutes = express.Router();

//Traer canciones
userRoutes.get("/canciones", traerCanciones);

//Traer artistas
userRoutes.get("/artistas", traerArtistas);

//Traer filtros
userRoutes.get("/filtros", traerFiltros);

//crear playlist
userRoutes.post("/crearlista", crearListaFiltros);

module.exports = userRoutes;
