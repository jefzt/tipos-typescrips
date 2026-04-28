type Pago =
  | { metodo: "tarjeta"; numero: string; cvv: string }
  | { metodo: "transferencia"; banco: string; cuenta: string }
  | { metodo: "efectivo" };

function validarPago(p: Pago): boolean {
  if (p.metodo === "tarjeta") return !!p.numero && !!p.cvv;
  if (p.metodo === "transferencia") return !!p.banco && !!p.cuenta;
  return true;
}

console.log("Ejercicio 10:", validarPago({
  metodo: "tarjeta",
  numero: "1234",
  cvv: "999"
}));