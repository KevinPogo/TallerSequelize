const { Sequelize } = require('sequelize');
const Prestamo = require('../models/PrestamoModels');
const Libro = require('../models/LibroModels');
const Usuario = require('../models/UsuarioModels');

class PrestamoService {
    // Realizar un préstamo
    static async realizarPrestamo(libroId, usuarioId) {
        try {
            const libro = await Libro.findByPk(libroId);
            if (!libro || !libro.disponibilidad) {
                throw new Error('El libro no está disponible');
            }

            const usuario = await Usuario.findByPk(usuarioId);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }

            const prestamo = await Prestamo.create({
                libroId,
                usuarioId
            });

            await libro.update({ disponibilidad: false });

            return prestamo;
        } catch (e) {
            console.log("Error al realizar préstamo:", e);
            throw new Error('No se pudo realizar el préstamo');
        }
    }

    static async devolverLibro(prestamoId) {
        try {
            const prestamo = await Prestamo.findByPk(prestamoId);
            if (!prestamo) throw new Error('Préstamo no encontrado');

            const libro = await Libro.findByPk(prestamo.libroId);
            if (!libro) throw new Error('Libro no encontrado');

            await prestamo.update({ fecha_devolucion: new Date() });
            await libro.update({ disponibilidad: true });

            return 'Libro devuelto correctamente';
        } catch (e) {
            console.log("Error al devolver libro:", e);
            throw new Error('No se pudo devolver el libro');
        }
    }


    static async librosMasSolicitados() {
        try {
            const libros = await Prestamo.findAll({
                attributes: [
                    'libroId',
                    [Sequelize.fn('COUNT', Sequelize.col('libroId')), 'cantidad']
                ],
                group: ['libroId'],
                order: [[Sequelize.fn('COUNT', Sequelize.col('libroId')), 'DESC']],
                limit: 5, 
                include: [
                    {
                        model: Libro,
                        attributes: ['titulo', 'autor']
                    }
                ]
            });
            return libros;
        } catch (e) {
            console.log("Error al obtener los libros más solicitados:", e);
            throw new Error('No se pudieron obtener los libros más solicitados');
        }
    }
    static async prestamosMasRecientes() {
        try {
            const prestamos = await Prestamo.findAll({
                order: [['fecha_prestamo', 'DESC']],
                limit: 5, 
                include: [
                    {
                        model: Libro,
                        attributes: ['titulo', 'autor']
                    },
                    {
                        model: Usuario,
                        attributes: ['nombre']
                    }
                ]
            });
            return prestamos;
        } catch (e) {
            console.log("Error al obtener los préstamos más recientes:", e);
            throw new Error('No se pudieron obtener los préstamos más recientes');
        }
    }
}

module.exports = PrestamoService;
