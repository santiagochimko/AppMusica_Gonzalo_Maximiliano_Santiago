const jwt = require("jsonwebtoken");
const { secret } = require("../controller/auth.controller");

exports.authMiddleWare = (req, res, next) => {
  const token = req.cookies.authToken;
//console.log(token)
  if (!token) {
    return res.status(401).json({ mensajae: "Acceso denegado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    req.usuario = payload;
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(401).json({ mensajae: "token invalido" });
    }
  }

  next();
};
