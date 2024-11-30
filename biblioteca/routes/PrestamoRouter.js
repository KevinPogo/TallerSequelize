let express = require('express');
let router = express.Router();
let PrestamoController = require('../controllers/PrestamoController');

router.post('/prestamo', PrestamoController.realizarPrestamo);
router.put('/prestamo/:id', PrestamoController.devolverLibro);

module.exports = router;
