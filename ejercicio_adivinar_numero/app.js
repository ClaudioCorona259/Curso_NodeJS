const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");
const obtenerNumeroUsuario = () => {
    const numeroUsuario = readlineSync.question("Ingresa un numero: ");
    return parseInt(numeroUsuario)
};
const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;
  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");
  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
};
juegoAdivinanza(); 


