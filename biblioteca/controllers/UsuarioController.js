const UsuarioService = require('../service/UsuarioService');

class UsuarioController {
    static async obtenerUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.obtenerTodos();
            res.json({ usuarios });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async crearUsuario(req, res) {
        try {
            const usuario = await UsuarioService.crearUsuario(req.body);
            res.json(usuario);
        } catch (e) {
            res.json({ error: e.message });
        }
    }
}

module.exports = UsuarioController;
