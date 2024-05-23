// Almacenamos nuestras tareas
let tareas = [];

function agregarTarea() {
    let titulo = prompt("Escribe el título de la tarea:");
    let descripcion = prompt("Escribe la descripción de la tarea:");
    let prioridad = prompt("Escribe la prioridad de la tarea (Alta/Media/Baja):");

    let tarea = {
        titulo: titulo,
        descripcion: descripcion,
        prioridad: prioridad
    };
    tareas.push(tarea);
}


function mostrarTareas() {
    if (tareas.length === 0) {
        console.log("No hay tareas para que puedas ver.");
    } else {
        console.log("Lista de tareas:");
        tareas.forEach(function(tarea, indice) {
            console.log(`${indice + 1}. Título: ${tarea.titulo} - Descripción: ${tarea.descripcion} - Prioridad: ${tarea.prioridad}`);
        });
    }
}


function filtrarPorPrioridad(prioridad) {
    let tareasFiltradas = tareas.filter(function(tarea) {
        return tarea.prioridad === prioridad;
    });
    console.log(`Tareas con prioridad ${prioridad}:`);
    tareasFiltradas.forEach(function(tarea, indice) {
        console.log(`${indice + 1}. Título: ${tarea.titulo} - Descripción: ${tarea.descripcion}`);
    });
}


let cantidadTareas = parseInt(prompt("¿Cuántas tareas quiere agregar?"));
for (let i = 0; i < cantidadTareas; i++) {
    agregarTarea();
}


mostrarTareas();


let prioridadAFiltrar = prompt("Escribe la prioridad por la que desea filtrar las tareas:");
filtrarPorPrioridad(prioridadAFiltrar);