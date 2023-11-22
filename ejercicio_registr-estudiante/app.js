const readlineSync = require("readline-sync");
const { mostrarEstudiantes } = require("./lista_estudiantes");

const registrarEstudiantes = () => {
  const cantEst = readlineSync.question("Ingrese la cantidad de estudiantes: ");
  const estudiantes = [];

  for (let i = 0; i < cantEst; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i + 1} `
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre} `);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }

  mostrarEstudiantes(estudiantes);
};

registrarEstudiantes();
