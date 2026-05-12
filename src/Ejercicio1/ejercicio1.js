"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filtrarTareas(lista) {
    return lista.filter(t => t.estado === "pendiente" || t.estado === "en_progreso");
}
const tareas = [
    { id: 1, descripcion: "Estudiar", completada: false, estado: "pendiente" },
    { id: 2, descripcion: "Trabajar", completada: false, estado: "en_progreso" },
    { id: 3, descripcion: "Dormir", completada: true, estado: "finalizada" }
];
console.log("Ejercicio 1:", filtrarTareas(tareas));
//# sourceMappingURL=ejercicio1.js.map