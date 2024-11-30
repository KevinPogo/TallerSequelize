const Usuario = require('../models/UsuarioModels'); 

const UsuarioService = {
    async obtenerTodos() {
        try {
            return await Usuario.findAll();
        } catch (e) {
            console.log("Error al obtener usuarios:", e);
            throw new Error('No se pudieron obtener los usuarios');
        }
    },


    async crearUsuario(datos) {
        try {
            return await Usuario.create(datos);
        } catch (e) {
            console.log("Error al crear usuario:", e);
            throw new Error('No se pudo crear el usuario');
        }
    },

    async actualizarUsuario(id, datos) {
        try {
            const usuario = await Usuario.update(datos, { where: { id } });
            if (usuario[0] === 0) throw new Error('Usuario no encontrado');
            return 'Usuario actualizado correctamente';
        } catch (e) {
            console.log("Error al actualizar usuario:", e);
            throw new Error('No se pudo actualizar el usuario');
        }
    },

    async eliminarUsuario(id) {
        try {
            const resultado = await Usuario.destroy({ where: { id } });
            if (resultado === 0) throw new Error('Usuario no encontrado');
            return 'Usuario eliminado correctamente';
        } catch (e) {
            console.log("Error al eliminar usuario:", e);
            throw new Error('No se pudo eliminar el usuario');
        }
    }
};

module.exports = UsuarioService;
