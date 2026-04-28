const { Router } = require('express');
const {
  crear,
  listar,
  obtenerPorId,
  actualizar,
  eliminar,
} = require('../controllers/productoController');

const router = Router();

router.get('/', listar);
router.get('/:id', obtenerPorId);
router.post('/', crear);
router.put('/:id', actualizar);
router.delete('/:id', eliminar);

module.exports = router;
