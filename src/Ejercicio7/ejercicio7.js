"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bajoStock(p) {
    if (p.categoria === "alimentos")
        return p.cantidad < 20;
    if (p.categoria === "tecnologia")
        return p.cantidad < 5;
    return p.cantidad < 50;
}
const producto = {
    id: 1,
    nombre: "Arroz",
    cantidad: 10,
    categoria: "alimentos"
};
console.log("Ejercicio 7:", bajoStock(producto));
//# sourceMappingURL=ejercicio7.js.map