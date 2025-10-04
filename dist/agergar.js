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
exports.agregarTarea = agregarTarea;
// Importamos módulos
const data_1 = require("./data");
const entradas_1 = require("./entradas");
// La función es async porque usamos await
function agregarTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n=== Creando una nueva tarea ===");
        // 1. Título
        let titulo = yield (0, entradas_1.input)("1. Ingresa el título: ");
        if (!titulo || titulo.trim() === "") {
            console.log("El título no puede estar vacío.");
            return;
        }
        // 2. Descripción
        let descripcion = yield (0, entradas_1.input)("2. Ingresa la descripción: ");
        if (!descripcion || descripcion.trim() === "") {
            descripcion = "Sin descripción";
        }
        // 3. Estado (opciones acotadas)
        //va a empezar vacia pero eventualmente tendra un valor tipo string//
        let estado = null;
        while (true) {
            //toma el input del usuario para el estado
            let est = yield (0, entradas_1.input)("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ");
            //eliminamos espacios en blanco al inicio y final, ademas, convertimos las letras que sean minusculas en mayuscula
            est = est.trim().toUpperCase();
            if (est === "P") {
                estado = "Pendiente";
                break;
            }
            if (est === "E") {
                estado = "En Curso";
                break;
            }
            if (est === "T") {
                estado = "Terminada";
                break;
            }
            if (est === "C") {
                estado = "Cancelada";
                break;
            }
            console.log("Opción inválida. Usa P, E, T o C.");
        }
        // 4. Dificultad (1, 2, 3)
        //va a empezar vacia pero eventualmente tendra un valor tipo number//
        let dificultad = null;
        while (true) {
            //Dificultad de tipo string ingresada por usuario 
            let difUser = yield (0, entradas_1.input)("4. Dificultad ([1] / [2] / [3]): ");
            //Dificultad convertida en number
            let dif = parseInt(difUser);
            if (dif >= 1 && dif <= 3) {
                dificultad = dif;
                break;
            }
            console.log("Opción inválida. Ingresa 1, 2 o 3.");
        }
        // 5. Vencimiento (opcional)
        //Vencimiento de tipo string ingresado por usuario 
        let vencimientoUser = yield (0, entradas_1.input)("5. Vencimiento (YYYY-MM-DD) o deja en blanco: ");
        //Vencimiento convertido en Date
        let vencimiento = null;
        if (!vencimientoUser || vencimientoUser.trim() === "") {
            vencimiento = null; // si no se ingresa nada
        }
        else {
            vencimiento = new Date(vencimientoUser);
            if (isNaN(vencimiento.getTime())) {
                console.log("Fecha inválida, se asigna 'null'.");
                vencimiento = null;
            }
        }
        // 6. Crear tarea (respetando la interfaz Tarea)
        const tarea = {
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
            estado: estado, // usamos ! porque el bucle garantiza que no sea null
            dificultad: dificultad,
            vencimiento: vencimiento,
            creacion: new Date(),
            edicion: new Date()
        };
        // Agregar al arreglo global
        data_1.tareas.push(tarea);
        console.log("\n¡Datos guardados con éxito!\n");
    });
}
