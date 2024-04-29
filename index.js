const citas = require("./operaciones");

const argumentos = process.argv.slice(2);
const [funcion, ...args] = argumentos;

switch (funcion) {
  case "leerCitas":
    citas.leerCitas();
    break;
  case "crearCita":
    citas.crearCita(args);
    break;

  default:
    console.log("Función inválida");
}
