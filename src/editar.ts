// editar.js
const { tareas } = require("./data");
const { input } = require("./entradas");

async function editarTarea(indice) {
  const tarea = tareas[indice];

  console.log(`\nEstas editando la tarea "${tarea.titulo}".`);
  console.log(`
- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.
- Si deseas dejar en blanco un atributo, escribe un espacio.
  `);

  // 1. Descripción
  let nuevaDesc = await input(`1. Ingresa la descripción [${tarea.descripcion || "sin descripción"}]: `);
  if (nuevaDesc === " ") tarea.descripcion = "";
  else if (nuevaDesc !== "") tarea.descripcion = nuevaDesc;

  // 2. Estado
  let nuevoEstado = await input(
    `2. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada) [${tarea.estado}]: `
  );
  if (nuevoEstado === " ") tarea.estado = "";
  else if (nuevoEstado !== "") {
    if (nuevoEstado.toUpperCase() === "P") tarea.estado = "Pendiente";
    else if (nuevoEstado.toUpperCase() === "E") tarea.estado = "En Curso";
    else if (nuevoEstado.toUpperCase() === "T") tarea.estado = "Terminada";
    else if (nuevoEstado.toUpperCase() === "C") tarea.estado = "Cancelada";
    else console.log("Valor inválido, se mantiene el estado anterior.");
  }

  // 3. Dificultad
  let nuevaDif = await input(`3. Dificultad ([1] / [2] / [3]) [${tarea.dificultad}]: `);
  if (nuevaDif === " ") tarea.dificultad = "";
  else if (nuevaDif !== "") {
    if (["1", "2", "3"].includes(nuevaDif)) tarea.dificultad = nuevaDif;
    else console.log("Valor inválido, se mantiene la dificultad anterior.");
  }

  // 4. Vencimiento
  let nuevoVenc = await input(`4. Vencimiento [${tarea.vencimiento}]: `);
  if (nuevoVenc === " ") tarea.vencimiento = "";
  else if (nuevoVenc !== "") tarea.vencimiento = nuevoVenc;

  // BONUS: actualizar "última edición"
  tarea.edicion = new Date().toLocaleString();

  console.log("\n¡Datos guardados!");
  await input("Presiona cualquier tecla para continuar…");
}

module.exports = { editarTarea };
