type Estado = "pendiente" | "en_progreso" | "finalizada";

type Tarea = {
  id: number;
  descripcion: string;
  completada: boolean;
  estado: Estado;
};

function filtrarTareas(lista: Tarea[]): Tarea[] {
  return lista.filter(t =>
    t.estado === "pendiente" || t.estado === "en_progreso"
  );
}

const tareas: Tarea[] = [
  { id: 1, descripcion: "Estudiar", completada: false, estado: "pendiente" },
  { id: 2, descripcion: "Trabajar", completada: false, estado: "en_progreso" },
  { id: 3, descripcion: "Dormir", completada: true, estado: "finalizada" }
];

console.log("Ejercicio 1:", filtrarTareas(tareas));