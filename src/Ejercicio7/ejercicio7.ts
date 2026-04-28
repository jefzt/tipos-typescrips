type Producto = {
  id: number;
  nombre: string;
  cantidad: number;
  categoria: "alimentos" | "tecnologia" | "papeleria";
};

function bajoStock(p: Producto): boolean {
  if (p.categoria === "alimentos") return p.cantidad < 20;
  if (p.categoria === "tecnologia") return p.cantidad < 5;
  return p.cantidad < 50;
}


const producto: Producto = {
  id: 1,
  nombre: "Arroz",
  cantidad: 10,
  categoria: "alimentos"
};

console.log("Ejercicio 7:", bajoStock(producto));