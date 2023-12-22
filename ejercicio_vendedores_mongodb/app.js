const express = require("express");
const app = express();
const routeVendedores = require('./routes/route_vendedores')

app.use(express.json());
app.use('/vendedores', routeVendedores)

// Inicio del Servidor

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
