const { knex } = require("../DB/knexfile.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.traerCanciones = async (req, res) => {
  const canciones = await knex.select("*").from("canciones");
  res.status(200).json({ canciones });
};

exports.traerFiltros = async (req, res) => {
  try {
    const filtrosgen = await knex.distinct("genero").from("canciones");
    const genero = filtrosgen.map((filtro) => filtro.genero);

    const filtros = await knex
      .distinct("estadodeanimo", "ocasion", "clima")
      .from("canciones");

    const estadosDeAnimo = filtros.map((filtro) => filtro.estadodeanimo);
    const ocasiones = filtros.map((filtro) => filtro.ocasion);
    const climas = filtros.map((filtro) => filtro.clima);

    res.status(200).json({ estadosDeAnimo, ocasiones, climas, genero });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener los filtros." });
  }
};