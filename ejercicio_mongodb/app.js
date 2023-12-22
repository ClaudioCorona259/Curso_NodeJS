const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Empresa", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Define el esquema y el modelo de la tabla de Clientes

const clienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String,
});

const Cliente = mongoose.model("Cliente", clienteSchema);

// Crea un nuevo Cliente

// const nuevoCliente = new Cliente({
//     nombre: 'Claudio',
//     edad: 24,
//     email: 'claudio@gmail.com'
// })

// const result = nuevoCliente
//     .save()
//     .then(() => {
//         console.log('Cliente guardado exitosamente')
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Recupera y muestra todos los clientes

// Cliente.find({})
// .then((clientes) => {
//     console.log('Clientes encontrados: ', clientes)
// })
// .catch((err) => {
//     console.error('Error al recuperar los clientes:', error)
// })

// Actualizar un cliente existente

// Cliente.updateOne({ nombre: "Claudio" }, { edad: 23 })
//   .then(() => {
//     console.log("Cliente actualizado correctamente");
//   })
//   .catch((err) => {
//     console.error("Error al actualizar el cliente", err);
//   });

// Eliminar un Cliente

Cliente.deleteOne({nombre: 'Claudio'})
.then(() => {
    console.log('Cliente eliminado correctamente')
})
.catch((err) => {
    console.error('Error al eliminar el cliente', err)
})