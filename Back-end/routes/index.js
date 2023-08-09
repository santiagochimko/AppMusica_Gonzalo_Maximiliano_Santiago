const express = require("express");
const { traerCanciones, traerFiltros, login } = require("../controller");
const routes = express.Router();

//Traer canciones
routes.get("/canciones", traerCanciones);
//Traer filtros
routes.get("/filtros", traerFiltros);
//Login
routes.post("/login", login);

module.exports = routes;
