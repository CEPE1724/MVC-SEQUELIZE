require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
require('./models/producto');

const productoRoutes = require('./routes/productoRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API MVC-Sequelize funcionando correctamente' });
});

app.use('/api/productos', productoRoutes);

const iniciar = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
  console.log('Conexión a la base de datos establecida y tablas sincronizadas.');
};

module.exports = { app, iniciar };
