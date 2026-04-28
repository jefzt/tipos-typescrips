type Calificacion = {
  estudianteId: number;
  materia: string;
  categoria: "tareas" | "quices" | "examen";
  nota: number;
};

function promedioPorCategoria(lista: Calificacion[], id: number) {
  const filtradas = lista.filter(c => c.estudianteId === id);

  const acumulado = filtradas.reduce(
    (acc, cur) => {
      acc[cur.categoria].total += cur.nota;
      acc[cur.categoria].count++;
      return acc;
    },
    {
      tareas: { total: 0, count: 0 },
      quices: { total: 0, count: 0 },
      examen: { total: 0, count: 0 }
    }
  );

  return {
    tareas: acumulado.tareas.total / (acumulado.tareas.count || 1),
    quices: acumulado.quices.total / (acumulado.quices.count || 1),
    examen: acumulado.examen.total / (acumulado.examen.count || 1)
  };
}


const notas: Calificacion[] = [
  { estudianteId: 1, materia: "math", categoria: "tareas", nota: 4 },
  { estudianteId: 1, materia: "math", categoria: "examen", nota: 3 },
  { estudianteId: 1, materia: "math", categoria: "tareas", nota: 5 }
];

console.log("Ejercicio 6:", promedioPorCategoria(notas, 1));