require('dotenv').config();
const { app, iniciar } = require('./src/app');

const PORT = process.env.PORT || 3000;

iniciar()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al iniciar la aplicación:', err);
    process.exit(1);
  });
