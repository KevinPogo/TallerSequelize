const UsuarioService = require('../service/UsuarioService'); 

const UsuarioController = {
    async obtenerUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.obtenerTodos();
            res.json({ usuarios });
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    async crearUsuario(req, res) {
        try {
            const usuario = await UsuarioService.crearUsuario(req.body);
            res.json(usuario);
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    async actualizarUsuario(req, res) {
        try {
            const mensaje = await UsuarioService.actualizarUsuario(req.params.id, req.body);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    async eliminarUsuario(req, res) {
        try {
            const mensaje = await UsuarioService.eliminarUsuario(req.params.id);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }
};

module.exports = UsuarioController;
