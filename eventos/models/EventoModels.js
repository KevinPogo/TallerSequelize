let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Evento = sequelize.define('Eventos', {
    nombre_evento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    inscripciones_actuales: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: true,
    tableName: 'Eventos'
});

module.exports = Evento;
