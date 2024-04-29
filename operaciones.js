const fs = require("fs");

const leerCitas = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  console.log("\n----- Las citas son estas: -----");
  console.log(citas);
  console.log("--------------------------------------\n");

  return citas;
};

const crearCita = (args) => {
  const [Nombre, Edad, Animal, Color, Enfermedad] = args;
  const citas = leerCitas();
  const nuevaMascota = {
    Nombre,
    Edad,
    Animal,
    Color,
    Enfermedad,
  };
  citas.push(nuevaMascota);

  fs.writeFileSync("citas.json", JSON.stringify(citas));

  console.log("\n----- Se ha agregado la siguiente mascota: -----");
  console.log(nuevaMascota);
  console.log("--------------------------------------\n");
};

module.exports = {
  crearCita,
  leerCitas,
};
