// buscar.js
//modulos importados
const { tareas } = require("./data");
const { input } = require("./entradas");
const { menuDetalles } = require("./detalles");

//la funcion imprime un menu de busqueda
async function menuBuscar() {
  console.log("\n=== BUSCAR TAREA ===");

  //se pide al usuario un texto para buscar el titulo
  let clave = (await input("Introduce el título de una tarea para buscarla: ")).trim();

  //evalua si esta vacia la variable clave, null o undefined.
  if (!clave) {
    console.log("No ingresaste ninguna clave.\n");
    await input("Presiona cualquier tecla para continuar…");
    return; // volver al menú principal
  }

  // buscar tareas cuyo título contenga la clave 
  //en este arreglo se almacenaran posiciones coincidentes
  const indices = [];
  //recorre todas las tareas
  for (let i = 0; i < tareas.length; i++) {
    //convierte ambos a minusculas, includes verifica si el titulo contiene la palabra clave
    if (tareas[i].titulo.toLowerCase().includes(clave.toLowerCase())) {
      indices[indices.length] = i;
      //si hay coincidencia se guarda el indice de esa tarea en indices
    }
  }

  //Si no hay coincidencias muestra el mensaje por consola
  if (indices.length === 0) {
    console.log(`\nNo hay tareas relacionadas con la búsqueda.\n`);
    await input("Presiona cualquier tecla para continuar…");
    return;
  }

  //muestra todas las tareas coincidentes con numeracion local
  console.log("\nEstas son las tareas relacionadas:");
  for (let j = 0; j < indices.length; j++) {
    console.log(`[${j + 1}] ${tareas[indices[j]].titulo} [${tareas[indices[j]].estado}]`);
  }
  console.log("");

  //bucle infinito hasta validar si elige 0 o el numero
  while (true) {
    let opcion = await input("Introduce el número para verla o 0 para volver: ");

    let num = parseInt(opcion, 10);

    //detecta si la opcion es invalida.
    if (isNaN(num) || num < 0 || num > indices.length) {
      console.log("Opción inválida, intenta nuevamente.\n");
      continue;
    }

    if (num === 0) return; // volver al menú principal

    await menuDetalles(indices[num - 1]);
    return; // cuando vuelve de detalles, regresa al menú principal
  }
}

module.exports = { menuBuscar };
