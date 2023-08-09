const express = require("express");
const { traerCanciones, traerFiltros } = require("../controller");
const routes = express.Router();

//Traer canciones
routes.get("/canciones", traerCanciones);

routes.get("/filtros", traerFiltros);

module.exports = routes;
