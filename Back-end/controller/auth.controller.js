const { knex } = require("../DB/knexfile.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  res.json({ mensaje: "Ingreso de usuario correcto" });
};

const secret = "mi secreto para firmar el jwt";
exports.secret = secret;

exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashContrasenia = await bcrypt.hash(req.body.contrasenia, salt);

  const usuario = await knex("usuarios")
    .insert({ ...req.body, contrasenia: hashContrasenia })
    .returning("*");
  sendToken(res, next, usuario[0]);
  res.json({
    mensaje: "Registro de usuario correcto",
  });
};

const sendToken = (res, next, { id, mail, nombre }) => {
  const token = jwt.sign({ mail, nombre, id }, secret);
  res.cookie("authToken", token, { httpOnly: true, secure: true });
  res.status(200);
};
