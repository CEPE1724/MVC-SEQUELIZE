const Producto = require('../models/producto');

// Crear un producto
const crear = async (req, res) => {
  try {
    const { nombre, precio, descripcion, stock } = req.body;
    if (!nombre || precio === undefined || precio === null) {
      return res.status(400).json({ error: 'Los campos nombre y precio son obligatorios' });
    }
    if (typeof precio !== 'number' || precio < 0) {
      return res.status(400).json({ error: 'El precio debe ser un número positivo' });
    }
    const producto = await Producto.create({ nombre, precio, descripcion, stock });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos los productos
const listar = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por id
const obtenerPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto
const actualizar = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    const { nombre, precio, descripcion, stock } = req.body;
    if (precio !== undefined && (typeof precio !== 'number' || precio < 0)) {
      return res.status(400).json({ error: 'El precio debe ser un número positivo' });
    }
    const campos = {};
    if (nombre !== undefined) campos.nombre = nombre;
    if (precio !== undefined) campos.precio = precio;
    if (descripcion !== undefined) campos.descripcion = descripcion;
    if (stock !== undefined) campos.stock = stock;
    await producto.update(campos);
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un producto
const eliminar = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crear, listar, obtenerPorId, actualizar, eliminar };
