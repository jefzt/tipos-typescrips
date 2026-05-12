"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validar(campos) {
    let invalidos = [];
    campos.forEach(c => {
        if (c.tipo === "texto" && typeof c.valor !== "string") {
            invalidos.push(c.nombre);
        }
        else if (c.tipo === "numero" && typeof c.valor !== "number") {
            invalidos.push(c.nombre);
        }
        else if (c.tipo === "email") {
            if (typeof c.valor !== "string" || !c.valor.includes("@")) {
                invalidos.push(c.nombre);
            }
        }
    });
    return invalidos;
}
const campos = [
    { nombre: "nombre", tipo: "texto", valor: "Juan" },
    { nombre: "edad", tipo: "numero", valor: 20 },
    { nombre: "correo", tipo: "email", valor: "malcorreo" }
];
console.log("Ejercicio 4:", validar(campos));
//# sourceMappingURL=ejercicio4.js.map