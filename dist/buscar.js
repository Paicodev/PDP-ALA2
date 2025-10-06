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
exports.menuBuscar = menuBuscar;
// buscar.js
//modulos importados
const data_1 = require("./data");
const entradas_1 = require("./entradas");
const detalles_1 = require("./detalles");
//la funcion imprime un menu de busqueda
function menuBuscar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n=== BUSCAR TAREA ===");
        //se pide al usuario un texto para buscar el titulo
        let clave = (yield (0, entradas_1.input)("Introduce el título de una tarea para buscarla: ")).trim().toLowerCase();
        //evalua si esta vacia la variable clave, null o undefined.
        if (clave === "") {
            console.log("No ingresaste ninguna clave.\n");
            yield (0, entradas_1.input)("Presiona cualquier tecla para continuar…");
            return; // volver al menú principal
        }
        // buscar tareas cuyo título contenga la clave 
        //en este arreglo se almacenaran posiciones coincidentes
        const indices = [];
        let contador = 0;
        //recorre todas las tareas
        for (let i = 0; i < data_1.tareas.length; i++) {
            //convierte ambos a minusculas, includes verifica si el titulo contiene la palabra clave
            if (data_1.tareas[i].titulo.toLowerCase().includes(clave)) {
                indices[contador] = i;
                contador++;
                //si hay coincidencia se guarda el indice de esa tarea en indices
            }
        }
        //Si no hay coincidencias muestra el mensaje por consola
        if (contador === 0) {
            console.log(`\nNo hay tareas relacionadas con la búsqueda.\n`);
            yield (0, entradas_1.input)("Presiona cualquier tecla para continuar…");
            return;
        }
        //muestra todas las tareas coincidentes con numeracion local
        console.log("\nEstas son las tareas relacionadas:");
        for (let j = 0; j < contador; j++) {
            console.log(`[${j + 1}] ${data_1.tareas[indices[j]].titulo} [${data_1.tareas[indices[j]].estado}]`);
        }
        console.log("");
        //bucle infinito hasta validar si elige 0 o el numero
        while (true) {
            let opcion = yield (0, entradas_1.input)("Introduce el número para verla o 0 para volver: ");
            let num = parseInt(opcion, 10);
            //detecta si la opcion es invalida.
            if (isNaN(num) || num < 0 || num > contador) {
                console.log("Opción inválida, intenta nuevamente.\n");
                continue;
            }
            if (num === 0)
                return; // volver al menú principal
            yield (0, detalles_1.menuDetalles)(indices[num - 1]);
            return; // cuando vuelve de detalles, regresa al menú principal
        }
    });
}
