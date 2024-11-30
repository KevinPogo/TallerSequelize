let express = require('express');
let router = express.Router();
let UsuarioController = require('../controllers/UsuarioController');

router.get('/usuarios', UsuarioController.obtenerUsuarios);
router.post('/usuarios', UsuarioController.crearUsuario);

module.exports = router;
