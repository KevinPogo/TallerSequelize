const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');  
const router = express.Router();

router.get('/usuarios', UsuarioController.obtenerUsuarios);
router.post('/usuarios', UsuarioController.crearUsuario);
router.put('/usuarios/:id', UsuarioController.actualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.eliminarUsuario);
module.exports = router;
