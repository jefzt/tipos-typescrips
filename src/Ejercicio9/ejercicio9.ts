type Unidad = "cm" | "m" | "km";

function convertir(valor: number, de: Unidad, a: Unidad): number {
  let metros = 0;

  if (de === "cm") metros = valor / 100;
  else if (de === "m") metros = valor;
  else metros = valor * 1000;

  if (a === "cm") return metros * 100;
  if (a === "m") return metros;
  return metros / 1000;
}


console.log("Ejercicio 9:", convertir(1000, "m", "km"));