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

exports.login = async (req, res, next) => {
  const { nombre, contrasenia } = req.body;

  const usuario = await knex("usuarios").where("nombre", nombre).first();

  if (!usuario) {
    res.status(404).json({ mensaje: "usuario/contraseña incorrecta" });
    next();
    return;
  }

  const contraseniaValida = await bcrypt.compare(
    contrasenia,
    usuario.contrasenia
  );

  if (!contraseniaValida) {
    res.status(404).json({ mensaje: "usuario/contraseña incorrecta" });
    next();
    return;
  }

  sendToken(res, next, usuario.mail, usuario.nombre);
};

const secret = "mi secreto para firmar el jwt";
exports.secret = secret;

exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashContrasenia = await bcrypt.hash(req.body.contrasenia, salt);

  await knex("usuarios").insert({ ...req.body, contrasenia: hashContrasenia });

  sendToken(res, next, req.body.mail, req.body.nombre);
};

const sendToken = (res, next, mail, nombre) => {
  const token = jwt.sign({ mail, nombre }, secret);
  res.json({ token });
  next();
};
