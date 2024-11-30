const express = require('express');
const EventoController = require('../controllers/EventoController'); 
const router = express.Router();

router.get('/eventos', EventoController.obtenerEventos);
router.post('/eventos', EventoController.crearEvento);
router.put('/eventos/:id', EventoController.editarEvento);
router.delete('/eventos/:id', EventoController.eliminarEvento);


module.exports = router;
