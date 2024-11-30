let express = require('express');
let router = express.Router();
let LibroController = require('../controllers/LibroController');

router.get('/libros', LibroController.obtenerLibros);
router.post('/libros', LibroController.crearLibro);
router.put('/libros/:id', LibroController.actualizarLibro);
router.delete('/libros/:id', LibroController.eliminarLibro);
router.get('/mas-solicitados', LibroController.librosMasSolicitados);
router.get('/prestamos-recientes', LibroController.prestamosMasRecientes);


module.exports = router;
