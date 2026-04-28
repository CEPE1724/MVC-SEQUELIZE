const { Sequelize } = require("sequelize");
const path = require("path");


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "../db-portafolio.sqlite"),
    logging: false 
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Se ha conectado a la base de datos SQLite correctamente");

        await sequelize.sync({ alter: true });
        console.log("Tablas sincronizadas correctamente");
    } catch (error) {
        console.error(error);
        throw new Error("No se ha podido establecer la conexión a la base de datos");
    }
};

module.exports = { connection, sequelize };
