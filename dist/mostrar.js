"use strict";
// mostrar.js
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
exports.menuTareas = menuTareas;
exports.listarTareas = listarTareas;
//Modulos importados
const data_1 = require("./data");
const entradas_1 = require("./entradas");
const detalles_1 = require("./detalles");
/*
  listarTareas(filtro)
  - Recolecta y muestra una lista numerada (local) de las tareas que cumplen el filtro.
  - Devuelve el índice global de la tarea elegida o -1 si vuelve.
*/
function listarTareas(filtro) {
    return __awaiter(this, void 0, void 0, function* () {
        let indices = [];
        //creo esta variable para mantener un contador total del indice (a diferencia de indices.length)
        let contador = 0;
        console.log("\n--- LISTA DE TAREAS ---");
        // 1. Recolectamos índices globales de las tareas que cumplen el filtro
        for (let i = 0; i < data_1.tareas.length; i++) {
            if (filtro === "Todas" || data_1.tareas[i].estado === filtro) {
                indices[contador] = i;
                contador++;
            }
        }
        // 2. Si no hay coincidencias, aviso y vuelvo
        if (contador === 0) {
            console.log("No hay tareas que coincidan con el filtro.\n");
            console.log("---------------------\n");
            return -1;
        }
        // 3. Mostrar listado numerado local
        console.log("Estas son tus tareas.");
        for (let j = 0; j < contador; j++) {
            const globalIdx = indices[j];
            console.log(`${j + 1}- ${data_1.tareas[globalIdx].titulo} [${data_1.tareas[globalIdx].estado}]`);
        }
        console.log("---------------------\n");
        // 4. Pedir selección
        while (true) {
            let opcion = yield (0, entradas_1.input)("¿Deseas ver los detalles de alguna? Introduce el número para verla o 0 para volver: ");
            let num = parseInt(opcion, 10);
            if (isNaN(num) || num < 0 || num > contador) {
                console.log("Opción inválida. Intenta nuevamente.");
                continue;
            }
            if (num === 0) {
                return -1; // volver sin seleccionar
            }
            // Mapeo número local -> índice global
            const seleccionadoGlobal = indices[num - 1];
            yield (0, detalles_1.menuDetalles)(seleccionadoGlobal); // llama al menú de detalles
            return seleccionadoGlobal;
        }
    });
}
/*
  menuTareas()
  - Submenú que permite elegir el filtro (Todas / Pendiente / En curso / Terminada).
  - Llama a listarTareas(filtro).
*/
function menuTareas() {
    return __awaiter(this, void 0, void 0, function* () {
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
            let op = (yield (0, entradas_1.input)("Elija una opción: ")).trim();
            if (op === "0")
                return -1;
            let filtro = null;
            if (op === "1")
                filtro = "Todas";
            else if (op === "2")
                filtro = "Pendiente";
            else if (op === "3")
                filtro = "En Curso";
            else if (op === "4")
                filtro = "Terminada";
            else {
                console.log("Opción inválida, intente nuevamente.\n");
                continue;
            }
            // Listar y esperar selección (si vuelve con -1, reitera el submenú)
            yield listarTareas(filtro);
        }
    });
}
