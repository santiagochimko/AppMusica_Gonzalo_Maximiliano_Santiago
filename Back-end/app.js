const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());
const routes = require("./routes");
const { authMiddleWare } = require("./middleware");
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Estas escuchando el puerto ${port}`);
});

module.exports = app;
