const InscripcionService = require('../service/InscripcionesService');
const Usuario = require('../models/UsuarioModels');

class InscripcionController {
    static async obtenerInscripciones(req, res) {
        try {
            const inscripciones = await InscripcionService.obtenerTodas();
            res.json({ inscripciones });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async agregarInscripcion(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);

            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "Solo los administradores pueden agregar inscripciones." });
            }

            const inscripcion = await InscripcionService.agregarInscripcion(req.body);
            res.json(inscripcion);
        } catch (e) {
            res.json({ error: `No se pudo agregar la inscripción: ${e.message}` });
        }
    }

    static async eliminarInscripcion(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);

            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "Solo los administradores pueden eliminar inscripciones." });
            }

            const mensaje = await InscripcionService.eliminarInscripcion(req.params.id);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: `No se pudo eliminar la inscripción: ${e.message}` });
        }
    }
}

module.exports = InscripcionController;
