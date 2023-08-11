const express = require("express");
const {
  traerCanciones,
  traerFiltros,
  login,
  register,
} = require("../controller");
const routes = express.Router();
const validaciones = require("../validators/user/user-validator");
const runvalidation = require("../validators");

//Traer canciones
routes.get("/canciones", traerCanciones);
//Traer filtros
routes.get("/filtros", traerFiltros);
//Login
routes.post("/login", login);
//register
routes.post("/register", validaciones, runvalidation, register);

module.exports = routes;
