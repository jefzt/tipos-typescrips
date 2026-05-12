"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resumenCambios(lista) {
    return lista.reduce((acc, cur) => {
        acc[cur.tipo]++;
        return acc;
    }, { nombre: 0, correo: 0, password: 0 });
}
const cambios = [
    { tipo: "nombre" },
    { tipo: "correo" },
    { tipo: "nombre" }
];
console.log("Ejercicio 5:", resumenCambios(cambios));
//# sourceMappingURL=ejercicio5.js.map