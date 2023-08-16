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
    res.status(500).json({ error: "Hubo un error al obtener las canciones." });
  }
};

exports.traerArtistas = async (req, res) => {
  try {
    const artistas = await knex("artistas").select("*");
    res.status(200).json({ artistas });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener los artistas." });
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

exports.crearContextual = async (req, res) => {
  try {
    const { nombreLista, generoID, estadoID, ocasionID, climaID } = req.body;
    const usuarioID = req.usuario.id;

    const playlist = await knex("playlists")
      .insert({
        nombre: nombreLista,
        usuario_id: usuarioID,
      })
      .returning("id");

    const cancionesFiltradas = await knex("canciones")
      .select("id")
      .whereIn("genero_id", generoID)
      .andWhere("estadodeanimo_id", estadoID)
      .andWhere("ocasion_id", ocasionID)
      .andWhere("clima_id", climaID);

    if (cancionesFiltradas.length === 0) {
      return res
        .status(400)
        .json({ error: "No existe esa combinacion de canciones" });
    }

    await Promise.all(
      cancionesFiltradas.map(async (cancion) => {
        await knex("playlists_canciones").insert({
          playlist_id: playlist[0].id,
          cancion_id: cancion.id,
        });
      })
    );

    return res.status(200).json({ playlist: "Lista creada perfectamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear la playlist" });
  }
};

exports.crearCupido = async (req, res) => {
  try {
    const { nombreLista, artistaID } = req.body;
    const usuarioID = req.usuario.id;

    const playlist = await knex("playlists")
      .insert({
        nombre: nombreLista,
        usuario_id: usuarioID,
      })
      .returning("id");

    const cancionesFiltradas = await knex("canciones")
      .select("id")
      .whereIn("artista_id", artistaID);

    await Promise.all(
      cancionesFiltradas.map(async (cancion) => {
        await knex("playlists_canciones").insert({
          playlist_id: playlist[0].id,
          cancion_id: cancion.id,
        });
      })
    );

    return res.status(200).json({ mensaje: "Lista creada perfectamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear la playlist" });
  }
};
