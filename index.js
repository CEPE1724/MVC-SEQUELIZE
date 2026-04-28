// Bloque 1: Importaciones
const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

// Bloque 2: Conectar a la base de datos y sincronizar modelos
connection();

// Bloque 3: Crear el servidor
const app = express();
const port = 3977;

// Bloque 4: Habilitar CORS
app.use(cors());

// Bloque 5: Parsear JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Bloque 6: Rutas
const projectRoutes = require("./routes/donaciones");
app.use("/api/donaciones", projectRoutes);

// Bloque 7: Arrancar el servidor
app.listen(port, () => {
    console.log("Servidor corriendo correctamente en el puerto: " + port);
});
