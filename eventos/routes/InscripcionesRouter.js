const express = require('express');
const InscripcionController = require('../controllers/InscripcionesController'); 
const router = express.Router();

router.get('/inscripciones', InscripcionController.obtenerInscripciones);
router.post('/inscripciones', InscripcionController.agregarInscripcion);
router.delete('/inscripciones/:id', InscripcionController.eliminarInscripcion);

module.exports = router;
