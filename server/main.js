const express = require("express");
const conectarBD = require("./config/conn.js");

const app = express();
conectarBD();
const PORT = process.env.PORT || 4000;

app.use("/api/usuarios", require("./routes/usuarios.js"));

app.listen(PORT, () => {
  console.log("server run");
});
