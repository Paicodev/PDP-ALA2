// index.js contiene el menu principal
//Modulos importados//
const { input, close } = require("./entradas");
const { agregarTarea } = require("./agregar");
const { menuTareas } = require("./mostrar");
const { menuBuscar } = require("./buscar");
const { tareas } = require("./data");

//función main, con while infinito hasta que se salga de este
async function main() {
  while (true) {
    console.log("==== MENÚ PRINCIPAL ====\n");
    console.log("1. Ver mis tareas\n");
    console.log("2. Buscar una tarea\n");
    console.log("3. Agregar una tarea\n");
    console.log("0. Salir\n");
    console.log("==========================\n");

    let op = await input("Elija una opción: ");

    switch (op) {
      case "1": {
        //llama a MenuTareas() para listar las tareas
        //y retornar un indice seleccionado en el menuTareas
        const seleccionadoGlobal = await menuTareas();
        //valida que el indice este dentro del rango
        if (seleccionadoGlobal >= 0 && seleccionadoGlobal < tareas.length) {
          //si es valido se importa el menu de detalles
          const { menuDetalles } = require("./detalles");
          await menuDetalles(seleccionadoGlobal);
        }
        await input("Ingrese cualquier carácter para continuar...\n");
        break;
      }
      case "2": {
        //se llama a la funcion del menu de busqueda
        await menuBuscar();
        break;
      }
      case "3": {
        // llamamos al formulario de agregarTarea
        await agregarTarea();
        await input("Presiona cualquier tecla para continuar...\n");
        break;
      }
      case "0":
        console.log("Adiooooos!!");
        close();
        return;
      default:
        console.log("Opcion invalida.");
        await input("Ingrese cualquier carácter para continuar...\n");
    }
  }
}

//invocación del main
main();
