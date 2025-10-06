"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.js contiene el menu principal
//Modulos importados//
const entradas_1 = require("./entradas");
const agregar_1 = require("./agregar");
const mostrar_1 = require("./mostrar");
const buscar_1 = require("./buscar");
const data_1 = require("./data");
const detalles_1 = require("./detalles");
//función main, con while infinito hasta que se salga de este
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            console.log("==== MENÚ PRINCIPAL ====\n");
            console.log("1. Ver mis tareas\n");
            console.log("2. Buscar una tarea\n");
            console.log("3. Agregar una tarea\n");
            console.log("0. Salir\n");
            console.log("==========================\n");
            let op = yield (0, entradas_1.input)("Elija una opción: ");
            switch (op) {
                case "1": {
                    //llama a MenuTareas() para listar las tareas
                    //y retornar un indice seleccionado en el menuTareas
                    const seleccionadoGlobal = yield (0, mostrar_1.menuTareas)();
                    //valida que el indice este dentro del rango
                    if (seleccionadoGlobal >= 0 && seleccionadoGlobal < data_1.tareas.length) {
                        yield (0, detalles_1.menuDetalles)(seleccionadoGlobal);
                    }
                    yield (0, entradas_1.input)("Ingrese cualquier carácter para continuar...\n");
                    break;
                }
                case "2": {
                    //se llama a la funcion del menu de busqueda
                    yield (0, buscar_1.menuBuscar)();
                    break;
                }
                case "3": {
                    // llamamos al formulario de agregarTarea
                    yield (0, agregar_1.agregarTarea)();
                    yield (0, entradas_1.input)("Presiona cualquier tecla para continuar...\n");
                    break;
                }
                case "0":
                    console.log("Adiooooos!!");
                    (0, entradas_1.close)();
                    return;
                default:
                    console.log("Opcion invalida.");
                    yield (0, entradas_1.input)("Ingrese cualquier carácter para continuar...\n");
            }
        }
    });
}
//invocación del main
main();
