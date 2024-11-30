let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Libro = sequelize.define('Libros', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anio_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true,  
    tableName: 'Libros'
});

module.exports = Libro;
