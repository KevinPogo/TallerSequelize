const Evento = require('../models/EventoModels');
const Inscripcion = require('../models/InscripcionesModels'); 
const Sequelize = require('sequelize');

const EventoService = {
    async obtenerTodos() {
        try {
            return await Evento.findAll();
        } catch (e) {
            throw new Error('No se pudieron obtener los eventos: ' + e.message);
        }
    },

    async crearEvento(datos) {
        try {
            return await Evento.create(datos);
        } catch (e) {
            throw new Error('No se pudo crear el evento: ' + e.message);
        }
    },

    async editarEvento(id, datos) {
        try {
            const resultado = await Evento.update(datos, { where: { id } });
            if (resultado[0] === 0) throw new Error('Evento no encontrado');
            return 'Evento actualizado correctamente';
        } catch (e) {
            throw new Error('No se pudo actualizar el evento: ' + e.message);
        }
    },

    async eliminarEvento(id) {
        try {
            const resultado = await Evento.destroy({ where: { id } });
            if (resultado === 0) throw new Error('Evento no encontrado');
            return 'Evento eliminado correctamente';
        } catch (e) {
            throw new Error('No se pudo eliminar el evento: ' + e.message);
        }
    }

};

module.exports = EventoService;
