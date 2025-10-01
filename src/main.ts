import { sumar, restar, multiplicar, dividir } from "./calculadora";

// Punto de entrada imperativo
function main(): void {
  console.log("=== Calculadora ===");
  console.log("Suma 10 + 5:", sumar(10, 5));
  console.log("Resta 10 - 5:", restar(10, 5));
  console.log("Multiplicación 10 * 5:", multiplicar(10, 5));
  console.log("División 10 / 5:", dividir(10, 5));
}

main();