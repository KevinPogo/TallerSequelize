const Usuario = require('../models/UsuarioModels');

class UsuarioService {
    // Obtener todos los usuarios
    static async obtenerTodos() {
        try {
            return await Usuario.findAll();
        } catch (e) {
            console.log("Error al obtener usuarios:", e);
            throw new Error('No se pudieron obtener los usuarios');
        }
    }

    // Crear un usuario
    static async crearUsuario(datos) {
        try {
            return await Usuario.create(datos);
        } catch (e) {
            console.log("Error al crear usuario:", e);
            throw new Error('No se pudo crear el usuario');
        }
    }
}

module.exports = UsuarioService;
