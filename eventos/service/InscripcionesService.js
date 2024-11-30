const Inscripcion = require('../models/InscripcionesModels');

const InscripcionService = {
    async obtenerTodas() {
        try {
            return await Inscripcion.findAll();
        } catch (e) {
            throw new Error('No se pudieron obtener las inscripciones: ' + e.message);
        }
    },

    async agregarInscripcion(datos) {
        try {
            return await Inscripcion.create(datos);
        } catch (e) {
            throw new Error('No se pudo agregar la inscripción: ' + e.message);
        }
    },

    async eliminarInscripcion(id) {
        try {
            const resultado = await Inscripcion.destroy({ where: { id } });
            if (resultado === 0) throw new Error('Inscripción no encontrada');
            return 'Inscripción eliminada correctamente';
        } catch (e) {
            throw new Error('No se pudo eliminar la inscripción: ' + e.message);
        }
    }
};

module.exports = InscripcionService;
