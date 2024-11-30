let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Usuario = sequelize.define('Usuarios', {
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rol: {
        type: DataTypes.ENUM('usuario', 'administrador'),
        defaultValue: 'usuario'
    }
}, {
    timestamps: true,
    tableName: 'Usuarios'
});

module.exports = Usuario;
