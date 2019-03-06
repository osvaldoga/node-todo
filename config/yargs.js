const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const opt_crear = {
    descripcion
}

const opt_actualizar = {
    descripcion,
    completado
}

const opt_borrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt_crear)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opt_actualizar)
    .command('listar', 'Listar todas las tareas')
    .command('borrar', 'Eliminar la tarea seleccionada', opt_borrar)
    .help()
    .argv;


module.exports = {
    argv
}