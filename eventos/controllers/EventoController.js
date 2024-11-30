const EventoService = require('../service/EventoService');
const Usuario = require('../models/UsuarioModels');

class EventoController {
    static async obtenerEventos(req, res) {
        try {
            const eventos = await EventoService.obtenerTodos();
            res.json({ eventos });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async crearEvento(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const evento = await EventoService.crearEvento(req.body);
            res.json(evento);
        } catch (e) {
            console.log(e);
            res.json({ error: e.message });
        }
    }

    static async editarEvento(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const mensaje = await EventoService.editarEvento(req.params.id, req.body);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async eliminarEvento(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const mensaje = await EventoService.eliminarEvento(req.params.id);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }
}

module.exports = EventoController;
