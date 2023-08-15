const { knex } = require("../DB/knexfile.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.traerCanciones = async (req, res) => {
  try {
    const canciones = await knex("canciones")
      .select(
        "canciones.nombre",
        "artistas.nombre as artista",
        "albums.nombrealbum as album",
        "canciones.album_id"
      )
      .leftJoin("artistas", "canciones.artista_id", "artistas.id")
      .leftJoin("albums", "canciones.album_id", "albums.id");
    res.status(200).json({ canciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al obtener las canciones." });
  }
};

exports.traerFiltros = async (req, res) => {
  try {
    const filtrosgen = await knex.select("nombre").from("genero");
    const genero = filtrosgen.map((filtro) => filtro.nombre);

    const filtroestado = await knex.select("nombre").from("estadodeanimo");
    const estado = filtroestado.map((filtro) => filtro.nombre);

    const filtrooca = await knex.select("nombre").from("ocasion");
    const ocasion = filtrooca.map((filtro) => filtro.nombre);

    const filtroclima = await knex.select("nombre").from("clima");
    const clima = filtroclima.map((filtro) => filtro.nombre);

    res.status(200).json({ genero, estado, ocasion, clima });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener los filtros." });
  }
};

exports.crearLista = async (req, res) => {
  try {
    const { nombreLista, cancionesFront } = req.body;
    const usuarioID = req.usuario.id;
    const playlist = await knex("playlists")
      .insert({
        nombre: nombreLista,
        usuario_id: usuarioID,
      })
      .returning("id");
    await Promise.all(
      cancionesFront.map(async (cancionID) => {
        await knex("playlists_canciones").insert({
          playlist_id: playlist[0].id,
          cancion_id: cancionID,
        });
      })
    );

    res.status(200).json({ mensaje: "Playlist creada exitosamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al crear la playlist." });
  }
};
