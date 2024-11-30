let DataTypes = require('sequelize');
let sequelize = require('../config/db');
let Libro = require('./LibroModels');
let Usuario = require('./UsuarioModels');

let Prestamo = sequelize.define('Prestamos', {
    fecha_prestamo: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    fecha_devolucion: {
        type: DataTypes.DATE
    }
}, {
    timestamps: true,
    tableName: 'Prestamos'
});

Prestamo.belongsTo(Libro, { foreignKey: 'libroId' });
Prestamo.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Prestamo;

