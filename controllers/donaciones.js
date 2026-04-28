const Donaciones = require("../models/donaciones");


const save = async (req, res) => {
    const body = req.body;

    if (
        body.id_categoria === undefined ||
        !body.titulo ||
        !body.descripcion ||
        body.cantidad === undefined ||
        !body.unidad_medida ||
        !body.fecha_disponible ||
        !body.estado
    ) {
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        });
    }

    try {
        const donacion = await Donaciones.create(body);
        return res.status(200).send({
            status: "success",
            donacion: donacion
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error al guardar la donacion",
            error
        });
    }
};


const donaciones = async (req, res) => {
    try {
        const allDonaciones = await Donaciones.findAll();
        if (!allDonaciones.length) {
            return res.status(404).send({
                status: "error",
                message: "No hay donaciones para mostrar"
            });
        }
        return res.status(200).send({
            status: "success",
            donaciones: allDonaciones
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error al listar las donaciones",
            error
        });
    }
};


const donacion = async (req, res) => {
    const id = req.params.id;

    try {
        const found = await Donaciones.findByPk(id);
        if (!found) {
            return res.status(404).send({
                status: "error",
                message: "No se ha encontrado la donacion"
            });
        }
        return res.status(200).send({
            status: "success",
            donacion: found
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error al buscar la donacion",
            error
        });
    }
};


const deleteDonacion = async (req, res) => {
    const id = req.params.id;

    try {
        const found = await Donaciones.findByPk(id);
        if (!found) {
            return res.status(404).send({
                status: "error",
                message: "No se ha encontrado la donacion"
            });
        }
        await found.destroy();
        return res.status(200).send({
            status: "success",
            message: "Donacion eliminada correctamente",
            donacion: found
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error al eliminar la donacion",
            error
        });
    }
};

const update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const found = await Donaciones.findByPk(id);
        if (!found) {
            return res.status(404).send({
                status: "error",
                message: "No se ha encontrado la donacion"
            });
        }
        await found.update(body);
        return res.status(200).send({
            status: "success",
            donacion: found
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error al actualizar la donacion",
            error
        });
    }
};

module.exports = {
    save,
    donaciones,
    donacion,
    deleteDonacion,
    update
};