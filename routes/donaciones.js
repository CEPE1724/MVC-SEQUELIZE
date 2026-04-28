const express = require("express");
const router = express.Router();

const DonacionesController = require("../controllers/donaciones");

router.post("/save", DonacionesController.save);
router.get("/buscar-donaciones", DonacionesController.donaciones);
router.get("/buscar-donacion/:id", DonacionesController.donacion);
router.delete("/eliminar-donacion/:id", DonacionesController.deleteDonacion);
router.put("/actualizar-donacion/:id", DonacionesController.update);

module.exports = router;
