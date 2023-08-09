const { knex } = require("../DB/knexfile.js");

exports.traerCanciones = async (req, res) => {
  const canciones = await knex.select("*").from("canciones");
  res.status(200).json({ canciones });
};

exports.traerFiltros = async (req, res) => {
  try {
    const filtrosgen = await knex.distinct("Genero").from("canciones");
    const genero = filtrosgen.map((filtro) => filtro.Genero);

    const filtros = await knex
      .distinct("EstadoDeAnimo", "Ocasion", "Clima")
      .from("canciones");

    const estadosDeAnimo = filtros.map((filtro) => filtro.EstadoDeAnimo);
    const ocasiones = filtros.map((filtro) => filtro.Ocasion);
    const climas = filtros.map((filtro) => filtro.Clima);

    res.status(200).json({ estadosDeAnimo, ocasiones, climas, genero });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener los filtros." });
  }
};

exports.login = async (req, res) => {
  const username = req.body.Nombre;
  const password = req.body.Contrasenia;

  try {
    const user = await knex("usuarios").where("Nombre", username).first();
    if (user && user.Contrasenia == password) {
      res.json("Entranding");
    } else {
      res.json("Usuario o contrasenia incorrecta");
    }
  } catch {
    res.status(500).json("Error del server");
  }
};
