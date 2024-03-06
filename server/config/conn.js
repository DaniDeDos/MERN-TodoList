const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.Promise = global.Promise;

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {});
    console.log("conectado a bd");
  } catch (error) {
    console.log("error al conectarce a la bd: ");
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarBD;
