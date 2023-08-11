const jwt = require("jsonwebtoken");
const { secret } = require("../controller");

exports.authMiddleWare = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensjae: "acceso denegado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    req.usuario = payload;
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(401).json({ mensjae: "token invalido" });
    }
  }

  next();
};

exports.initalLogging = (req, res, next) => {
  const fecha = new Date();
  req.startTime = fecha;
  next();
};

exports.finalLogging = (req, res, next) => {
  const fecha = new Date();
  const tiempo = (fecha - req.startTime) / 1000;
  console.log("finaliza", res.getHeader("request-id"), tiempo);
  next();
};
