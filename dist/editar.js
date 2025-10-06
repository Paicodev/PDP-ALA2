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
exports.editarTarea = editarTarea;
// editar.ts
const data_1 = require("./data");
const entradas_1 = require("./entradas");
function editarTarea(indice) {
    return __awaiter(this, void 0, void 0, function* () {
        const tarea = data_1.tareas[indice];
        console.log(`\nEstas editando la tarea "${tarea.titulo}".`);
        console.log(`
- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.
- Si deseas dejar en blanco un atributo, escribe un espacio.
  `);
        // 1. Descripción
        let nuevaDesc = yield (0, entradas_1.input)(`1. Ingresa la descripción [${tarea.descripcion || "sin descripción"}]: `);
        if (nuevaDesc === " ")
            tarea.descripcion = "";
        else if (nuevaDesc !== "")
            tarea.descripcion = nuevaDesc;
        // 2. Estado
        let nuevoEstado = yield (0, entradas_1.input)(`2. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada) [${tarea.estado}]: `);
        if (nuevoEstado.trim() !== "") {
            const est = nuevoEstado.trim().toUpperCase();
            if (est === "P")
                tarea.estado = "Pendiente";
            else if (est === "E")
                tarea.estado = "En Curso";
            else if (est === "T")
                tarea.estado = "Terminada";
            else if (est === "C")
                tarea.estado = "Cancelada";
            else
                console.log("Valor inválido, se mantiene el estado anterior.");
        }
        // 3. Dificultad
        let nuevaDif = yield (0, entradas_1.input)(`3. Dificultad ([1] / [2] / [3]) [${tarea.dificultad}]: `);
        if (nuevaDif.trim() !== "") {
            const difNum = parseInt(nuevaDif);
            if ([1, 2, 3].includes(difNum))
                tarea.dificultad = difNum;
            else
                console.log("Valor inválido, se mantiene la dificultad anterior.");
        }
        // 4. Vencimiento
        let nuevoVenc = yield (0, entradas_1.input)(`4. Vencimiento [${tarea.vencimiento}]: `);
        if (nuevoVenc === " ")
            tarea.vencimiento = null;
        else if (nuevoVenc.trim() !== "") {
            const fecha = new Date(nuevoVenc);
            if (!isNaN(fecha.getTime()))
                tarea.vencimiento = fecha;
            else
                console.log("Fecha inválida, se mantiene la fecha anterior.");
        }
        // BONUS: actualizar "última edición"
        tarea.edicion = new Date();
        console.log("\n¡Datos guardados!");
        yield (0, entradas_1.input)("Presiona cualquier tecla para continuar…");
    });
}
