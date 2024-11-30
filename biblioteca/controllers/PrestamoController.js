const PrestamoService = require('../service/PrestamoService');

class PrestamoController {
    static async realizarPrestamo(req, res) {
        try {
            const prestamo = await PrestamoService.realizarPrestamo(req.body.libroId, req.body.usuarioId);
            res.json(prestamo);
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    static async devolverLibro(req, res) {
        try {
            const mensaje = await PrestamoService.devolverLibro(req.params.id);
            res.json({ mensaje });
        } catch (e) {
            res.json({ error: e.message });
        }
    }
}

module.exports = PrestamoController;
