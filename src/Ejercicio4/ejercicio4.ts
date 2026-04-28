type CampoFormulario = {
  nombre: string;
  tipo: "texto" | "numero" | "email";
  valor: string | number;
};

function validar(campos: CampoFormulario[]): string[] {
  let invalidos: string[] = [];

  campos.forEach(c => {
    if (c.tipo === "texto" && typeof c.valor !== "string") {
      invalidos.push(c.nombre);
    } else if (c.tipo === "numero" && typeof c.valor !== "number") {
      invalidos.push(c.nombre);
    } else if (c.tipo === "email") {
      if (typeof c.valor !== "string" || !c.valor.includes("@")) {
        invalidos.push(c.nombre);
      }
    }
  });

  return invalidos;
}

const campos: CampoFormulario[] = [
  { nombre: "nombre", tipo: "texto", valor: "Juan" },
  { nombre: "edad", tipo: "numero", valor: 20 },
  { nombre: "correo", tipo: "email", valor: "malcorreo" }
];

console.log("Ejercicio 4:", validar(campos));