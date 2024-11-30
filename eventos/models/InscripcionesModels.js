let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Inscripcion = sequelize.define('Inscripciones', {
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios', 
            key: 'id'
        }
    },
    eventoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Eventos', 
            key: 'id'
        }
    }
}, {
    timestamps: true,
    tableName: 'Inscripciones'
});

module.exports = Inscripcion;
