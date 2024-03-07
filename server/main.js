const express = require("express");
const conectarBD = require("./config/conn.js");
const cors = require("cors");

const app = express();
conectarBD();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/proyectos", require("./routes/proyectos.js"));
app.use("/api/tareas", require("./routes/tareas.js"));

app.listen(PORT, () => {
  console.log("server run");
});
