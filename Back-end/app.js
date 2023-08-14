const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const config = {origin:"http://localhost:5173", credentials:true, allowedHeaders:['Content-Type', 'Authorization'], preflightContinue: true };

app.use(express.json());
app.use(cookieParser());
app.options(cors(config));

const { authMiddleWare } = require("./middleware/auth.middleware");
const userRoutes = require("./routes/user.routes");
const authroutes = require("./routes/auth.routes");
const requestmiddle = require("./middleware/request.middleware");
const {
  initalLogging,
  finalLogging,
} = require("./middleware/loggin.middleware");


app.use(requestmiddle);
app.use(initalLogging);

app.use("/user",  cors(), authMiddleWare, userRoutes);
app.use("/auth", cors(), authroutes);


app.use(finalLogging);


app.listen(port, () => {
  console.log(`Estas escuchando el puerto ${port}`);
});


module.exports = app;
