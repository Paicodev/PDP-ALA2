// mostrar.js

//Modulos importados
const { tareas } = require("./data");
const { input } = require("./entradas");
const { menuDetalles } = require("./detalles");

/*
  listarTareas(filtro)
  - Recolecta y muestra una lista numerada (local) de las tareas que cumplen el filtro.
  - Devuelve el índice global de la tarea elegida o -1 si vuelve.
*/
async function listarTareas(filtro) {
  let indices = [];

  console.log("\n--- LISTA DE TAREAS ---");

  // 1. Recolectamos índices globales de las tareas que cumplen el filtro
  for (let i = 0; i < tareas.length; i++) {
    if (filtro === "Todas" || tareas[i].estado === filtro) {
      indices[indices.length] = i;
    }
  }

  // 2. Si no hay coincidencias, aviso y vuelvo
  if (indices.length === 0) {
    console.log("No hay tareas que coincidan con el filtro.\n");
    console.log("---------------------\n");
    return -1;
  }

  // 3. Mostrar listado numerado local
  console.log("Estas son tus tareas.");
  for (let j = 0; j < indices.length; j++) {
    const globalIdx = indices[j];
    console.log(`${j + 1}- ${tareas[globalIdx].titulo} [${tareas[globalIdx].estado}]`);
  }
  console.log("---------------------\n");

  // 4. Pedir selección
  while (true) {
    let opcion = await input(
      "¿Deseas ver los detalles de alguna? Introduce el número para verla o 0 para volver: "
    );

    let num = parseInt(opcion, 10);
    if (isNaN(num) || num < 0 || num > indices.length) {
      console.log("Opción inválida. Intenta nuevamente.");
      continue;
    }

    if (num === 0) {
      return -1; // volver sin seleccionar
    }

    // Mapeo número local -> índice global
    const seleccionadoGlobal = indices[num - 1];
    await menuDetalles(seleccionadoGlobal); // llama al menú de detalles
    return seleccionadoGlobal;
  }
}

/*
  menuTareas()
  - Submenú que permite elegir el filtro (Todas / Pendiente / En curso / Terminada).
  - Llama a listarTareas(filtro).
*/
async function menuTareas() {
  while (true) {
    console.log(`
=== ¿Qué tareas deseas ver? ===
[1] Todas
[2] Pendientes
[3] En Curso
[4] Terminadas
[0] Volver
===========================
    `);

    let op = (await input("Elija una opción: ")).trim();

    if (op === "0") return -1;

    let filtro = null;
    if (op === "1") filtro = "Todas";
    else if (op === "2") filtro = "Pendiente";
    else if (op === "3") filtro = "En Curso";
    else if (op === "4") filtro = "Terminada";
    else {
      console.log("Opción inválida, intente nuevamente.\n");
      continue;
    }

    // Listar y esperar selección (si vuelve con -1, reitera el submenú)
    await listarTareas(filtro);
  }
}

module.exports = { menuTareas, listarTareas };
