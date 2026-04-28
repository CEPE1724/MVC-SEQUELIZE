const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection");


const Donaciones = sequelize.define(
    "Donaciones",
    {
        id_donacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(120),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        cantidad: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        unidad_medida: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        fecha_disponible: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        fecha_registro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: "donaciones",
        timestamps: false,
        underscored: true
    }
);

module.exports = Donaciones;
