type Transaccion = {
  monto: number;
  tipo: "ingreso" | "egreso";
  categoria: string;
};

function sumaPorTipo(transacciones: Transaccion[]) {
  return transacciones.reduce(
    (acc: { ingreso: number; egreso: number }, cur) => {
      if (cur.tipo === "ingreso") {
        acc.ingreso += cur.monto;
      } else {
        acc.egreso += cur.monto;
      }
      return acc;
    },
    { ingreso: 0, egreso: 0 }
  );
}

const datos: Transaccion[] = [
  { monto: 1000, tipo: "ingreso", categoria: "salario" },
  { monto: 200, tipo: "egreso", categoria: "comida" },
  { monto: 500, tipo: "ingreso", categoria: "extra" }
];

console.log("Ejercicio 2:", sumaPorTipo(datos));