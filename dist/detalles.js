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
exports.menuDetalles = menuDetalles;
// Modulo detalles.js
const data_1 = require("./data");
const entradas_1 = require("./entradas");
const editar_1 = require("./editar");
//Funcion para el bonus de las estrellas
function formatDificultad(nivel) {
    //switch que retorna la cantidad de estrellas segun el entero
    //esto funciona gracias al parseInt
    switch (nivel) {
        case 1: return "★☆☆ (Fácil)";
        case 2: return "★★☆ (Medio)";
        case 3: return "★★★ (Difícil)";
        default: return "Sin Datos";
    }
}
//funcion principal del modulo para mostrar los detalles de la tarea
//recibe el indice que viene del index.js
function menuDetalles(indice) {
    return __awaiter(this, void 0, void 0, function* () {
        //recibe los datos de la tarea con el indice seleccionado
        let tarea = data_1.tareas[indice];
        if (!tarea) {
            console.log("La tarea seleccionada no existe.\n");
            return;
        }
        //en este while utilizamos literales de plantilla para mostrar los datos de la tarea
        while (true) {
            console.log("\n=== DETALLES DE LA TAREA ===\n");
            console.log(`Título:       ${tarea.titulo || "Sin Datos"}`);
            console.log(`Descripción:  ${tarea.descripcion || "Sin Datos"}`);
            console.log(`Estado:       ${tarea.estado || "Sin Datos"}`);
            console.log(`Dificultad:   ${formatDificultad(tarea.dificultad)}`);
            console.log(`Vencimiento:  ${tarea.vencimiento || "Sin Datos"}`);
            console.log(`Creación:     ${tarea.creacion || "Sin Datos"}`);
            console.log(`Última edición:${tarea.edicion || "Sin Datos"}`);
            console.log("\n============================\n");
            let op = yield (0, entradas_1.input)('Presiona "E" para editar, "0" para volver: ');
            if (op.toLowerCase() === "e") {
                yield (0, editar_1.editarTarea)(indice);
            }
            else if (op === "0") {
                return; // volvemos al menú anterior
            }
            else {
                console.log("Opción inválida, intenta nuevamente.\n");
            }
        }
    });
}
