"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filtrarUsuarios(lista) {
    return lista.filter(u => u.edad >= 18 && u.activo && u.rol !== "visitante");
}
const usuarios = [
    { nombre: "Ana", edad: 20, activo: true, rol: "admin" },
    { nombre: "Luis", edad: 17, activo: true, rol: "editor" },
    { nombre: "Pedro", edad: 25, activo: false, rol: "admin" }
];
console.log("Ejercicio 8:", filtrarUsuarios(usuarios));
//# sourceMappingURL=ejercicio8.js.map