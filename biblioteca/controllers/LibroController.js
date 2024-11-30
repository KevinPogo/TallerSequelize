const LibroService = require('../service/LibroService');
const PrestamoService = require('../service/PrestamoService');
const Usuario = require('../models/UsuarioModels'); 

class LibroController {
    static async obtenerLibros(req, res) {
        try {
            const libros = await LibroService.obtenerTodos();
            res.json({ libros });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

        static async crearLibro(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const libro = await LibroService.crearLibro(req.body);
            res.json(libro);
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async actualizarLibro(req, res) {
        try {
            const { usuarioId } = req.body;

            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const mensaje = await LibroService.actualizarLibro(req.params.id, req.body);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async eliminarLibro(req, res) {
        try {
            const { usuarioId } = req.body;
            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario || usuario.rol !== 'administrador') {
                return res.json({ error: "paila, no sos admin" });
            }

            const mensaje = await LibroService.eliminarLibro(req.params.id);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async librosMasSolicitados(req, res) {
        try {
            const libros = await PrestamoService.librosMasSolicitados();
            res.json({ libros });
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async prestamosMasRecientes(req, res) {
        try {
            const prestamos = await PrestamoService.prestamosMasRecientes();
            res.json({ prestamos });
        } catch (e) {
            res.json({ error: e.message });
        }
    }
}

module.exports = LibroController;
