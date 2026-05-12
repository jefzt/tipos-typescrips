"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validarPago(p) {
    if (p.metodo === "tarjeta")
        return !!p.numero && !!p.cvv;
    if (p.metodo === "transferencia")
        return !!p.banco && !!p.cuenta;
    return true;
}
console.log("Ejercicio 10:", validarPago({
    metodo: "tarjeta",
    numero: "1234",
    cvv: "999"
}));
//# sourceMappingURL=ejercicio10.js.map