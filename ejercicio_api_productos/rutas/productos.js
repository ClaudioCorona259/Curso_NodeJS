const express = require("express");
const route = express.Router();

let productos = [
  { id: 1, nombre: "Producto 1", precio: 10.99 },
  { id: 2, nombre: "Producto 2", precio: 11.99 },
  { id: 3, nombre: "Producto 3", precio: 12.99 },
];

// Leer todos los Productos

route.get("/", (req, res, next) => {
  try {
    res.json(productos);
  } catch (err) {
    next(err);
  }
});

// Leer un Producto especifico

route.get("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    } else {
      res.json(producto);
    }
  } catch (err) {
    next(err);
  }
});

// Agregar un producto

route.post("/", (req, res, next) => {
  try {
    const { nombre, precio } = req.body;
    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      precio,
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    next(err);
  }
});

//Modificar un Producto

route.put("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, precio } = req.body;

    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    } else {
      producto.nombre = nombre || producto.nombre;
      producto.precio = precio || producto.precio;

      res.json(producto);
    }
  } catch (err) {
    next(err);
  }
});

// Eliminar un Producto

route.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const index = productos.findIndex((p) => p.id === id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    } else {
      const productoEliminado = productos.splice(index, 1);
      res.json(productoEliminado[0]);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = route;
