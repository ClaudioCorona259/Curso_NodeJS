const express = require("express");
const app = express();
const port = 3000;
const routeProductos = require('./rutas/productos')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json());
app.use('/productos', routeProductos)
app.use('/productos', errorHandler)

app.listen(port, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});
