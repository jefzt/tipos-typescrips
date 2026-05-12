"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumaPorTipo(transacciones) {
    return transacciones.reduce((acc, cur) => {
        if (cur.tipo === "ingreso") {
            acc.ingreso += cur.monto;
        }
        else {
            acc.egreso += cur.monto;
        }
        return acc;
    }, { ingreso: 0, egreso: 0 });
}
const datos = [
    { monto: 1000, tipo: "ingreso", categoria: "salario" },
    { monto: 200, tipo: "egreso", categoria: "comida" },
    { monto: 500, tipo: "ingreso", categoria: "extra" }
];
console.log("Ejercicio 2:", sumaPorTipo(datos));
//# sourceMappingURL=ejercicio2.js.map